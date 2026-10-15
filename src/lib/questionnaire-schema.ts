// Mirrors JotForm form 220048004067141 ("Web Designer Client Questionnaire").
// Every `name` below is the exact JotForm field name, so submissions land in
// the same JotForm inbox the old Wix site used. If you add or rename questions
// in JotForm, update the matching name here.

export const JOTFORM_ID = "220048004067141";
export const JOTFORM_SUBMIT_URL = `https://submit.jotform.com/submit/${JOTFORM_ID}`;

type Base = {
  name: string;
  label: string;
  hint?: string;
  required?: boolean;
  placeholder?: string;
  // Only show when another field has a specific value.
  showIf?: { name: string; equals: string };
  width?: "full" | "half";
};

export type Field =
  | (Base & { type: "text" | "email" | "tel" | "url" | "textarea" | "date" })
  | (Base & { type: "radio"; options: string[] })
  | (Base & { type: "checkbox"; options: string[] });

export type Step = {
  id: string;
  title: string;
  blurb: string;
  fields: Field[];
};

const yesNo = ["Yes", "No"];

export const steps: Step[] = [
  {
    id: "general",
    title: "General information",
    blurb: "Who you are and how to reach you.",
    fields: [
      { type: "text", name: "q4_businessName", label: "Business name", required: true },
      { type: "text", name: "q5_mainContact[first]", label: "First name", required: true, width: "half" },
      { type: "text", name: "q5_mainContact[last]", label: "Last name", required: true, width: "half" },
      { type: "text", name: "q9_title", label: "Your title", placeholder: "Owner, Marketing Director…", width: "half" },
      { type: "email", name: "q8_email8", label: "Email", required: true, width: "half" },
      { type: "tel", name: "q7_phoneNumber7[full]", label: "Phone number", width: "half" },
      { type: "text", name: "q6_address[addr_line1]", label: "Street address" },
      { type: "text", name: "q6_address[addr_line2]", label: "Address line 2" },
      { type: "text", name: "q6_address[city]", label: "City", width: "half" },
      { type: "text", name: "q6_address[state]", label: "State / province", width: "half" },
      { type: "text", name: "q6_address[postal]", label: "Postal code", width: "half" },
      { type: "text", name: "q6_address[country]", label: "Country", width: "half" },
    ],
  },
  {
    id: "background",
    title: "Background",
    blurb: "Your current setup and what your business is about.",
    fields: [
      { type: "url", name: "q11_currentWebsite", label: "Current website URL", hint: "If you have one", placeholder: "https://" },
      { type: "text", name: "q22_currentWeb", label: "Current web hosting company", hint: "If applicable", width: "half" },
      { type: "text", name: "q23_whatDomain23", label: "Domain registrar", hint: "GoDaddy, Namecheap, etc.", width: "half" },
      { type: "textarea", name: "q14_pleaseDescribe", label: "Describe your business in a few sentences.", required: true },
      { type: "textarea", name: "q15_whatProblems15", label: "What problems do you solve for your clients? What makes you different?" },
      { type: "textarea", name: "q16_whyDo", label: "Why do you want a new website? What are your priorities?", required: true },
    ],
  },
  {
    id: "brand",
    title: "Brand identity",
    blurb: "How your brand looks, sounds and feels.",
    fields: [
      { type: "textarea", name: "q18_describeThe", label: "Describe the look and feel you want", hint: "Adjectives and short phrases work great: clean, bold, warm, playful…" },
      { type: "textarea", name: "q19_describeYour", label: "Who is your target audience? What should the site convey to them?" },
      { type: "textarea", name: "q28_listAny", label: "Important words people should associate with your brand" },
      { type: "text", name: "q29_whatIs", label: "Your tagline" },
      { type: "radio", name: "q30_doYou30", label: "Do you have a logo?", options: ["Yes", "No", "Not sure"] },
      { type: "radio", name: "q33_doYou33", label: "Do you have a style guide or brand standards?", options: yesNo },
      { type: "textarea", name: "q35_doYou35", label: "Do you have established print materials? If so, what kind?", hint: "Brochures, letterhead, event materials…" },
      { type: "text", name: "q36_whatFonts36", label: "Fonts you typically use" },
      { type: "text", name: "q37_areThere", label: "Colors you want incorporated" },
      { type: "radio", name: "q38_doYou38", label: "Do you have Pantone numbers for those colors?", options: yesNo },
      { type: "textarea", name: "q39_ifYou", label: "What words or phrases would someone search to find your site?" },
      { type: "textarea", name: "q40_whichOf", label: "Which of those are most important? Second? Third?" },
    ],
  },
  {
    id: "design",
    title: "Design preferences",
    blurb: "Share three to five sites you like and tell us why.",
    fields: [
      { type: "url", name: "q45_website145", label: "Website #1", placeholder: "https://" },
      { type: "textarea", name: "q47_website", label: "What do you like about it?" },
      { type: "url", name: "q48_website2", label: "Website #2", placeholder: "https://" },
      { type: "textarea", name: "q49_website49", label: "What do you like about it?" },
      { type: "url", name: "q50_website3", label: "Website #3", placeholder: "https://" },
      { type: "textarea", name: "q51_website51", label: "What do you like about it?" },
      { type: "url", name: "q52_website4", label: "Website #4", hint: "Optional", placeholder: "https://" },
      { type: "textarea", name: "q53_website53", label: "What do you like about it?" },
      { type: "url", name: "q54_website5", label: "Website #5", hint: "Optional", placeholder: "https://" },
      { type: "textarea", name: "q55_website55", label: "What do you like about it?" },
      { type: "textarea", name: "q56_whatTypes", label: "Anything you've seen on other websites that you hate?" },
    ],
  },
  {
    id: "content",
    title: "Content",
    blurb: "Pages, copy and photos.",
    fields: [
      { type: "text", name: "q59_approximatelyMany59", label: "Roughly how many pages do you need?", hint: "A ballpark is fine.", placeholder: "e.g. 6" },
      {
        type: "checkbox",
        name: "q67_atMinimum67[]",
        label: "Pages you'd like on the site",
        hint: "Select all that apply.",
        options: ["Home", "About", "Services", "Contact Form", "FAQs", "Staff", "Board of Directors", "Management", "Client List", "Portfolio", "Testimonials", "Programs", "Volunteer", "Donate Page", "News & Events", "Directions", "Privacy Policy", "Terms of Use", "Disclaimer"],
      },
      { type: "radio", name: "q60_doYou60", label: "Do you already have written content you want to use?", options: yesNo },
      { type: "textarea", name: "q84_ifNo84", label: "Who will provide the content?", showIf: { name: "q60_doYou60", equals: "No" } },
      { type: "radio", name: "q83_doYou83", label: "Do you have high-resolution photos to use?", options: yesNo },
      { type: "textarea", name: "q85_ifNo85", label: "Who will provide photos?", showIf: { name: "q83_doYou83", equals: "No" } },
      { type: "radio", name: "q68_howOften", label: "How often do you expect to update the site?", options: ["Once a week or more", "Monthly", "Quarterly", "Less than 4 times a year"] },
    ],
  },
  {
    id: "features",
    title: "Features",
    blurb: "What the site needs to do.",
    fields: [
      {
        type: "checkbox",
        name: "q72_pleaseCheck[]",
        label: "Features you'd like",
        hint: "Select all that apply.",
        options: ["Responsive Design", "SEO", "Analytics Tracking", "Social Media", "E-Commerce", "Image Gallery", "Video", "Calendar", "Search Function", "Forum", "RSS Feed", "Advertising"],
      },
      {
        type: "checkbox",
        name: "q74_whichSocial74[]",
        label: "Social platforms you use",
        options: ["Facebook", "Instagram", "LinkedIn", "Youtube", "Twitter", "Pinterest", "Yelp", "TripAdvisor", "Tumblr", "Flickr", "Foursquare", "Google+", "Vine", "Urbanspoon", "About.me"],
      },
      { type: "textarea", name: "q73_whatTypes73", label: "What kind of social media integration would you like?", hint: "Feeds, share buttons, links…" },
      { type: "textarea", name: "q75_areThere75", label: "Any other functionality you need?" },
    ],
  },
  {
    id: "other",
    title: "Final details",
    blurb: "Timeline, team and anything else.",
    fields: [
      { type: "radio", name: "q81_doYou81", label: "Do you have a designated IT person we should coordinate with?", options: yesNo },
      { type: "textarea", name: "q80_whatOther", label: "Who else on your team will be involved, and in what role?" },
      { type: "text", name: "q82_whatIs82", label: "Preferred deadline for launch", placeholder: "e.g. End of March" },
      { type: "textarea", name: "q97_anythingElse", label: "Anything else we should know?" },
    ],
  },
];
