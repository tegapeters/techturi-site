"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  JOTFORM_ID,
  JOTFORM_SUBMIT_URL,
  steps,
  type Field,
} from "@/lib/questionnaire-schema";

type Values = Record<string, string | string[]>;
type Status = "editing" | "submitting" | "done" | "error";

const DRAFT_KEY = "techturi-questionnaire-draft-v1";
const REVIEW_INDEX = steps.length;

function isVisible(field: Field, values: Values) {
  if (!field.showIf) return true;
  return values[field.showIf.name] === field.showIf.equals;
}

function isEmpty(v: string | string[] | undefined) {
  return v === undefined || (Array.isArray(v) ? v.length === 0 : v.trim() === "");
}

// Turn our flat values into the exact name/value pairs JotForm expects.
function toJotformPairs(values: Values): [string, string][] {
  const pairs: [string, string][] = [];
  for (const step of steps) {
    for (const field of step.fields) {
      if (!isVisible(field, values)) continue;
      const v = values[field.name];
      if (isEmpty(v)) continue;
      if (field.name === "q7_phoneNumber7[full]") {
        const digits = String(v).replace(/\D/g, "");
        const local = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
        if (local.length === 10) {
          pairs.push(["q7_phoneNumber7[area]", local.slice(0, 3)]);
          pairs.push(["q7_phoneNumber7[phone]", `${local.slice(3, 6)}-${local.slice(6)}`]);
        } else {
          pairs.push(["q7_phoneNumber7[phone]", String(v)]);
        }
        continue;
      }
      if (Array.isArray(v)) v.forEach((item) => pairs.push([field.name, item]));
      else pairs.push([field.name, v]);
    }
  }
  pairs.push(["formID", JOTFORM_ID]);
  pairs.push(["simple_spc", `${JOTFORM_ID}-${JOTFORM_ID}`]);
  pairs.push(["website", ""]); // JotForm honeypot; must stay empty
  pairs.push(["submitSource", "techturi.org/questionnaire"]);
  return pairs;
}

export default function QuestionnaireForm() {
  const [values, setValues] = useState<Values>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("editing");
  const [hydrated, setHydrated] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Restore a saved draft so people can come back later.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { values: Values; stepIndex: number };
        // localStorage only exists in the browser, so this has to run after mount.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setValues(saved.values ?? {});
        setStepIndex(Math.min(saved.stepIndex ?? 0, REVIEW_INDEX));
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || status === "done") return;
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ values, stepIndex }));
    } catch {}
  }, [values, stepIndex, hydrated, status]);

  const answered = useMemo(() => {
    let total = 0;
    let filled = 0;
    for (const step of steps)
      for (const f of step.fields) {
        if (!isVisible(f, values)) continue;
        total++;
        if (!isEmpty(values[f.name])) filled++;
      }
    return { total, filled };
  }, [values]);

  const set = (name: string, value: string | string[]) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name])
      setErrors((prev) => {
        const rest = { ...prev };
        delete rest[name];
        return rest;
      });
  };

  const validate = (index: number) => {
    const next: Record<string, string> = {};
    for (const f of steps[index].fields) {
      if (!isVisible(f, values)) continue;
      const v = values[f.name];
      if (f.required && isEmpty(v)) next[f.name] = "This one's required.";
      else if (f.type === "email" && !isEmpty(v) && !/^\S+@\S+\.\S+$/.test(String(v)))
        next[f.name] = "That email doesn't look right.";
    }
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`f-${Object.keys(next)[0]}`)?.focus();
      return false;
    }
    return true;
  };

  const goTo = (index: number) => {
    setStepIndex(index);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const next = () => {
    if (stepIndex < REVIEW_INDEX && !validate(stepIndex)) return;
    goTo(stepIndex + 1);
  };

  const firstInvalidStep = () => {
    for (let i = 0; i < steps.length; i++)
      for (const f of steps[i].fields)
        if (isVisible(f, values) && f.required && isEmpty(values[f.name])) return i;
    return -1;
  };

  // Post as a regular HTML form into a hidden iframe. This is the same request
  // JotForm's own page makes, so it lands in the JotForm inbox and triggers
  // its notification emails, without navigating visitors away from the site.
  const submit = () => {
    const bad = firstInvalidStep();
    if (bad !== -1) {
      goTo(bad);
      setTimeout(() => validate(bad), 50);
      return;
    }
    setStatus("submitting");
    const form = document.createElement("form");
    form.method = "POST";
    form.action = JOTFORM_SUBMIT_URL;
    form.target = "jotform-sink";
    form.acceptCharset = "utf-8";
    form.style.display = "none";
    for (const [name, value] of toJotformPairs(values)) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    }
    document.body.appendChild(form);

    const iframe = iframeRef.current!;
    const timeout = window.setTimeout(() => setStatus("error"), 20000);
    iframe.onload = () => {
      window.clearTimeout(timeout);
      setStatus("done");
      try {
        localStorage.removeItem(DRAFT_KEY);
      } catch {}
      form.remove();
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    form.submit();
  };

  const pct = Math.round((answered.filled / Math.max(answered.total, 1)) * 100);

  if (status === "done") {
    const first = String(values["q5_mainContact[first]"] ?? "").trim();
    return (
      <div ref={topRef} className="mx-auto max-w-xl py-24 text-center">
        <style>{QUESTIONNAIRE_CSS}</style>
        <div className="mb-8 font-mono text-3xl text-accent">[ ✓ ]</div>
        <h2 className="font-display text-5xl font-normal tracking-tight">
          Thank you{first ? `, ${first}` : ""}.{" "}
          <em className="font-light text-accent">It&apos;s in.</em>
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-dim">
          I&apos;ll review everything and get back to you within 48 hours. Want to move faster? Grab
          a time on my calendar.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/book" className="tq-btn-primary">
            Book a call →
          </Link>
          <Link href="/" className="tq-btn-secondary">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={topRef} className="grid scroll-mt-24 gap-10 lg:grid-cols-[240px_1fr]">
      <iframe ref={iframeRef} name="jotform-sink" title="submission" className="hidden" />
      <style>{QUESTIONNAIRE_CSS}</style>

      {/* Step navigation */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="mb-3 flex items-baseline justify-between text-sm">
          <span className="font-medium">
            {stepIndex < REVIEW_INDEX ? `Step ${stepIndex + 1} of ${steps.length}` : "Review"}
          </span>
          <span className="text-dim">{pct}% answered</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-500"
            style={{ width: `${((stepIndex + (stepIndex === REVIEW_INDEX ? 0 : 0.5)) / steps.length) * 100}%` }}
          />
        </div>
        <ol className="mt-6 hidden space-y-1 lg:block">
          {[...steps.map((s) => s.title), "Review & send"].map((title, i) => (
            <li key={title}>
              <button
                type="button"
                onClick={() => goTo(i)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
                  i === stepIndex ? "bg-surface font-medium shadow-sm ring-1 ring-border" : "text-dim hover:text-foreground"
                }`}
              >
                <span
                  className={`grid size-6 shrink-0 place-items-center rounded-full text-xs ${
                    i < stepIndex ? "bg-accent text-background" : i === stepIndex ? "bg-foreground text-background" : "ring-1 ring-border"
                  }`}
                >
                  {i < stepIndex ? "✓" : i + 1}
                </span>
                {title}
              </button>
            </li>
          ))}
        </ol>
        <p className="mt-6 hidden text-xs leading-relaxed text-dim lg:block">
          Progress saves automatically in this browser, so you can come back and finish later.
        </p>
      </aside>

      {/* Current step */}
      <section className="min-w-0">
        {stepIndex < REVIEW_INDEX ? (
          <StepView
            key={stepIndex}
            index={stepIndex}
            values={values}
            errors={errors}
            onChange={set}
          />
        ) : (
          <Review values={values} onEdit={goTo} />
        )}

        {status === "error" && (
          <p role="alert" className="mt-6 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
            We couldn&apos;t confirm your submission. Please check your connection and try again. Your
            answers are still saved.
          </p>
        )}

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
          <button
            type="button"
            onClick={() => goTo(stepIndex - 1)}
            disabled={stepIndex === 0}
            className="tq-btn-secondary disabled:invisible"
          >
            ← Back
          </button>
          {stepIndex < REVIEW_INDEX ? (
            <button type="button" onClick={next} className="tq-btn-primary">
              {stepIndex === steps.length - 1 ? "Review answers" : "Continue"} →
            </button>
          ) : (
            <button type="button" onClick={submit} disabled={status === "submitting"} className="tq-btn-primary">
              {status === "submitting" ? "Sending…" : "Submit questionnaire"}
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

function StepView({
  index,
  values,
  errors,
  onChange,
}: {
  index: number;
  values: Values;
  errors: Record<string, string>;
  onChange: (name: string, value: string | string[]) => void;
}) {
  const step = steps[index];
  return (
    <div className="tq-animate-in">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Part {String(index + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}</p>
      <h2 className="mt-3 font-display text-4xl font-normal tracking-tight sm:text-5xl">{step.title}</h2>
      <p className="mt-2 text-dim">{step.blurb}</p>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6">
        {step.fields
          .filter((f) => isVisible(f, values))
          .map((f) => (
            <FieldView key={f.name} field={f} value={values[f.name]} error={errors[f.name]} onChange={onChange} />
          ))}
      </div>
    </div>
  );
}

function FieldView({
  field,
  value,
  error,
  onChange,
}: {
  field: Field;
  value: string | string[] | undefined;
  error?: string;
  onChange: (name: string, value: string | string[]) => void;
}) {
  const id = `f-${field.name}`;
  const span = field.width === "half" ? "col-span-2 sm:col-span-1" : "col-span-2";
  const label = (
    <span className="mb-2 block">
      <span className="font-medium">
        {field.label}
        {field.required && <span className="text-accent"> *</span>}
      </span>
      {field.hint && <span className="mt-0.5 block text-sm text-dim">{field.hint}</span>}
    </span>
  );
  const errorEl = error && (
    <span role="alert" className="mt-1.5 block text-sm text-red-600 dark:text-red-400">
      {error}
    </span>
  );

  if (field.type === "radio" || field.type === "checkbox") {
    const selected = field.type === "checkbox" ? ((value as string[]) ?? []) : [value as string];
    const toggle = (opt: string) => {
      if (field.type === "radio") onChange(field.name, value === opt ? "" : opt);
      else
        onChange(
          field.name,
          selected.includes(opt) ? selected.filter((s) => s !== opt) : [...selected, opt],
        );
    };
    return (
      <fieldset className={span}>
        <legend className="contents">{label}</legend>
        <div className="flex flex-wrap gap-2" role={field.type === "radio" ? "radiogroup" : "group"}>
          {field.options.map((opt) => {
            const on = selected.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                role={field.type}
                aria-checked={on}
                onClick={() => toggle(opt)}
                className={`tq-chip ${on ? "tq-chip-on" : ""}`}
              >
                {field.type === "checkbox" && (
                  <span className={`grid size-4 place-items-center rounded text-[10px] ${on ? "bg-background/25" : "ring-1 ring-border"}`}>
                    {on && "✓"}
                  </span>
                )}
                {opt}
              </button>
            );
          })}
        </div>
        {errorEl}
      </fieldset>
    );
  }

  const common = {
    id,
    name: field.name,
    value: (value as string) ?? "",
    placeholder: field.placeholder,
    "aria-invalid": !!error,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(field.name, e.target.value),
    className: `tq-input ${error ? "tq-input-error" : ""}`,
  };

  return (
    <label htmlFor={id} className={`block ${span}`}>
      {label}
      {field.type === "textarea" ? (
        <textarea rows={3} {...common} />
      ) : (
        <input
          type={field.type}
          autoComplete={autoCompleteFor(field.name)}
          {...common}
        />
      )}
      {errorEl}
    </label>
  );
}

function autoCompleteFor(name: string) {
  const map: Record<string, string> = {
    q4_businessName: "organization",
    "q5_mainContact[first]": "given-name",
    "q5_mainContact[last]": "family-name",
    q9_title: "organization-title",
    q8_email8: "email",
    "q7_phoneNumber7[full]": "tel",
    "q6_address[addr_line1]": "address-line1",
    "q6_address[addr_line2]": "address-line2",
    "q6_address[city]": "address-level2",
    "q6_address[state]": "address-level1",
    "q6_address[postal]": "postal-code",
    "q6_address[country]": "country-name",
  };
  return map[name] ?? "off";
}

function Review({ values, onEdit }: { values: Values; onEdit: (i: number) => void }) {
  return (
    <div className="tq-animate-in">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Almost done</p>
      <h2 className="mt-3 font-display text-4xl font-normal tracking-tight sm:text-5xl">Review your answers</h2>
      <p className="mt-2 text-dim">Make sure everything looks right, then send it over.</p>
      <div className="mt-8 space-y-4">
        {steps.map((step, i) => {
          const rows = step.fields.filter((f) => isVisible(f, values) && !isEmpty(values[f.name]));
          return (
            <div key={step.id} className="rounded-2xl bg-surface p-5 ring-1 ring-border">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{step.title}</h3>
                <button type="button" onClick={() => onEdit(i)} className="text-sm text-accent hover:underline">
                  Edit
                </button>
              </div>
              {rows.length === 0 ? (
                <p className="mt-2 text-sm text-dim">Nothing filled in yet.</p>
              ) : (
                <dl className="mt-3 space-y-3 text-sm">
                  {rows.map((f) => {
                    const v = values[f.name];
                    return (
                      <div key={f.name} className="grid gap-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-4">
                        <dt className="text-dim">{f.label}</dt>
                        <dd className="whitespace-pre-wrap break-words">{Array.isArray(v) ? v.join(", ") : v}</dd>
                      </div>
                    );
                  })}
                </dl>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const QUESTIONNAIRE_CSS = `
  .tq-input {
    width: 100%; background: var(--surface); border: 1px solid var(--border); border-radius: 4px;
    padding: 12px 16px; font-size: 15px; color: var(--foreground); outline: none; transition: border-color .15s;
  }
  .tq-input::placeholder { color: var(--dimmer); }
  .tq-input:focus { border-color: var(--accent); }
  textarea.tq-input { min-height: 96px; resize: vertical; line-height: 1.7; }
  .tq-input-error { border-color: #f87171; }
  .tq-chip {
    display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 4px;
    background: var(--surface); border: 1px solid var(--border); color: var(--dim); font-size: 14px;
    transition: border-color .15s, color .15s; user-select: none; cursor: pointer;
  }
  .tq-chip:hover { border-color: var(--dimmer); color: var(--foreground); }
  .tq-chip:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  .tq-chip-on, .tq-chip-on:hover { background: var(--accent); border-color: var(--accent); color: var(--background); font-weight: 500; }
  .tq-btn-primary, .tq-btn-secondary {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px; border-radius: 4px;
    font-family: var(--font-jetbrains), monospace; font-size: 13px; padding: 14px 28px; cursor: pointer;
    text-decoration: none; transition: opacity .15s, border-color .15s;
  }
  .tq-btn-primary { background: var(--accent); color: var(--background); font-weight: 700; border: none; letter-spacing: .03em; }
  .tq-btn-primary:hover { opacity: .9; }
  .tq-btn-primary:disabled { opacity: .6; cursor: default; }
  .tq-btn-secondary { background: transparent; color: var(--foreground); border: 1px solid var(--dimmer); }
  .tq-btn-secondary:hover { border-color: var(--dim); }
  .tq-animate-in { animation: tq-fade-up .35s ease-out both; }
  @keyframes tq-fade-up { from { opacity: 0; transform: translateY(8px); } }
  @media (prefers-reduced-motion: reduce) { .tq-animate-in { animation: none; } }
`;
