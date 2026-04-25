export type Question = {
  q: string;
  options: string[];
  answer: number;
};

export type TrackQuiz = {
  id: string;
  track: string;
  badge: string;
  color: string;
  label: string;
  questions: Question[];
};

export const QUIZZES: Record<string, TrackQuiz> = {
  "data-analytics": {
    id: "data-analytics",
    track: "Data Analytics",
    badge: "DA",
    color: "#D4FF3A",
    label: "Data Analyst",
    questions: [
      {
        q: "What does SQL stand for?",
        options: ["Structured Query Language", "Simple Query Logic", "Sequential Query List", "Standard Question Language"],
        answer: 0,
      },
      {
        q: "Which chart type is best for showing trends over time?",
        options: ["Pie chart", "Bar chart", "Line chart", "Scatter plot"],
        answer: 2,
      },
      {
        q: "What does PL-300 certify you in?",
        options: ["Python programming", "Power BI data analytics", "SQL databases", "Azure cloud"],
        answer: 1,
      },
      {
        q: "Which SQL function calculates the average of a column?",
        options: ["SUM()", "COUNT()", "AVG()", "MEAN()"],
        answer: 2,
      },
      {
        q: "What is the hireable checkpoint for the Data Analytics track?",
        options: ["Google Analytics cert", "Tableau Specialist", "PL-300 + 2 projects", "SQL certification"],
        answer: 2,
      },
    ],
  },

  "business-analytics": {
    id: "business-analytics",
    track: "Business Analytics",
    badge: "BA",
    color: "#D4FF3A",
    label: "Business Analyst",
    questions: [
      {
        q: "What does BPMN stand for?",
        options: ["Business Process Model and Notation", "Basic Program Management Network", "Business Planning and Measurement Node", "Baseline Process Mapping Notation"],
        answer: 0,
      },
      {
        q: "Which is the entry-level IIBA credential?",
        options: ["CBAP", "CCBA", "ECBA", "PMI-PBA"],
        answer: 2,
      },
      {
        q: "What is the primary role of a Business Analyst?",
        options: ["Write production code", "Bridge business needs and technical solutions", "Manage cloud infrastructure", "Design relational databases"],
        answer: 1,
      },
      {
        q: "Which tool is most commonly used for process mapping?",
        options: ["Excel", "Tableau", "Lucidchart", "Python"],
        answer: 2,
      },
      {
        q: "What does PMP stand for?",
        options: ["Project Management Professional", "Process Mapping Protocol", "Product Management Practitioner", "Performance Metrics Platform"],
        answer: 0,
      },
    ],
  },

  "data-science": {
    id: "data-science",
    track: "Data Science",
    badge: "DS",
    color: "#D4FF3A",
    label: "Data Scientist",
    questions: [
      {
        q: "Which Python library is used for data manipulation and analysis?",
        options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
        answer: 1,
      },
      {
        q: "What does overfitting mean in machine learning?",
        options: ["Model performs well on training data but poorly on new data", "Model has too few parameters", "Model trains too slowly", "Model uses too much memory"],
        answer: 0,
      },
      {
        q: "Which metric best evaluates a binary classification model?",
        options: ["RMSE", "MAE", "AUC-ROC", "R-squared"],
        answer: 2,
      },
      {
        q: "What is the hireable checkpoint for the Data Science track?",
        options: ["IBM Data Science cert", "AWS ML Specialty", "TensorFlow Developer cert + 3 projects", "Kaggle Master rank"],
        answer: 2,
      },
      {
        q: "What does CNN stand for in deep learning?",
        options: ["Connected Neural Network", "Convolutional Neural Network", "Categorical Node Network", "Clustered Number Network"],
        answer: 1,
      },
    ],
  },

  "networking": {
    id: "networking",
    track: "Networking",
    badge: "NET",
    color: "#6B9FFF",
    label: "Network Engineer",
    questions: [
      {
        q: "What does TCP/IP stand for?",
        options: ["Transmission Control Protocol/Internet Protocol", "Transfer Control Process/Interface Protocol", "Trusted Communication Protocol/IP", "Terminal Control Program/Internet Process"],
        answer: 0,
      },
      {
        q: "Which subnet mask corresponds to a /24 CIDR prefix?",
        options: ["255.255.0.0", "255.0.0.0", "255.255.255.0", "255.255.255.128"],
        answer: 2,
      },
      {
        q: "What port does HTTPS use by default?",
        options: ["80", "22", "443", "8080"],
        answer: 2,
      },
      {
        q: "What is the hireable checkpoint for the Networking track?",
        options: ["CCNA 200-301", "CompTIA Network+", "Cisco CCNP", "CompTIA A+"],
        answer: 1,
      },
      {
        q: "Which OSI layer handles routing between networks?",
        options: ["Data Link (Layer 2)", "Network (Layer 3)", "Transport (Layer 4)", "Session (Layer 5)"],
        answer: 1,
      },
    ],
  },

  "cybersecurity": {
    id: "cybersecurity",
    track: "Cybersecurity",
    badge: "SEC",
    color: "#6B9FFF",
    label: "Security Analyst",
    questions: [
      {
        q: "What does CIA stand for in cybersecurity?",
        options: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Control, Identify, Assess", "Cyber, Infrastructure, Access"],
        answer: 1,
      },
      {
        q: "What type of attack tricks users into revealing credentials?",
        options: ["SQL injection", "DDoS", "Phishing", "Buffer overflow"],
        answer: 2,
      },
      {
        q: "What is the hireable checkpoint for the Cybersecurity track?",
        options: ["CEH alone", "CISSP", "Security+ → CySA+", "CISM"],
        answer: 2,
      },
      {
        q: "What does SIEM stand for?",
        options: ["Security Information and Event Management", "System Integrity and Error Monitoring", "Secure Infrastructure and Encryption Model", "Software Integration and Event Mapping"],
        answer: 0,
      },
      {
        q: "Which framework is the US standard for cybersecurity risk management?",
        options: ["ISO 27001", "NIST CSF", "COBIT", "ITIL"],
        answer: 1,
      },
    ],
  },

  "ai-foundations": {
    id: "ai-foundations",
    track: "AI Foundations",
    badge: "AI",
    color: "#D4FF3A",
    label: "AI Practitioner",
    questions: [
      {
        q: "Which type of ML uses labeled training data?",
        options: ["Unsupervised learning", "Reinforcement learning", "Supervised learning", "Transfer learning"],
        answer: 2,
      },
      {
        q: "What is the hireable checkpoint for the AI Foundations track?",
        options: ["Google ML Crash Course", "EXIN AI Essentials", "OCI AI Foundations", "AWS AI Practitioner"],
        answer: 2,
      },
      {
        q: "What is a neural network modeled after?",
        options: ["Computer circuits", "The human brain", "Decision trees", "Database schemas"],
        answer: 1,
      },
      {
        q: "Which company offers the OCI AI Foundations certification?",
        options: ["Google", "Microsoft", "Oracle", "Amazon"],
        answer: 2,
      },
      {
        q: "What is the difference between AI and ML?",
        options: ["They are identical", "AI is the broad field; ML is a subset focused on learning from data", "ML is the broad field; AI is a subset", "AI uses code; ML uses data only"],
        answer: 1,
      },
    ],
  },

  "generative-ai": {
    id: "generative-ai",
    track: "Generative AI",
    badge: "GEN",
    color: "#D4FF3A",
    label: "GenAI Engineer",
    questions: [
      {
        q: "What does LLM stand for?",
        options: ["Large Language Model", "Linear Learning Machine", "Layered Logic Module", "Long Learning Method"],
        answer: 0,
      },
      {
        q: "What does MCP stand for in the AI agent context?",
        options: ["Model Control Protocol", "Model Context Protocol", "Machine Computing Process", "Meta Content Pipeline"],
        answer: 1,
      },
      {
        q: "What is prompt engineering?",
        options: ["Writing code for AI models", "Training neural networks from scratch", "Crafting inputs to guide AI toward better outputs", "Fine-tuning model weights"],
        answer: 2,
      },
      {
        q: "What does RAG stand for?",
        options: ["Random Access Generation", "Retrieval-Augmented Generation", "Real-time AI Generation", "Recursive Algorithm Generation"],
        answer: 1,
      },
      {
        q: "What is the hireable checkpoint for the Generative AI track?",
        options: ["OCI AI Foundations only", "Prompt Engineering cert only", "OCI GenAI Pro + AWS AI Practitioner", "MCP certification"],
        answer: 2,
      },
    ],
  },

  "data-architecture": {
    id: "data-architecture",
    track: "Data Architecture",
    badge: "ARC",
    color: "#D4FF3A",
    label: "Data Architect",
    questions: [
      {
        q: "What does dbt stand for?",
        options: ["Data Build Tool", "Database Transformation", "Distributed Batch Transfer", "Data Batch Toolkit"],
        answer: 0,
      },
      {
        q: "What is Snowflake primarily used for?",
        options: ["ML model training", "Cloud data warehousing", "Real-time streaming only", "Container orchestration"],
        answer: 1,
      },
      {
        q: "What is the hireable checkpoint for Data Architecture?",
        options: ["Google Pro Data Engineer", "OCI Data Management cert", "SnowPro Core + dbt", "AWS Data Engineer cert"],
        answer: 2,
      },
      {
        q: "Which tool is the modern standard for data transformation?",
        options: ["Apache Spark", "Airflow", "dbt", "Talend"],
        answer: 2,
      },
      {
        q: "What does ETL stand for?",
        options: ["Extract, Transform, Load", "Execute, Test, Launch", "Export, Transfer, Log", "Evaluate, Train, Learn"],
        answer: 0,
      },
    ],
  },
};
