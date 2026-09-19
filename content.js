/* ==========================================================================
   PORTFOLIO CONTENT
   ==========================================================================
   This is the ONLY file you should need to edit to update your portfolio.
   Everything on the page — profile, resume, contact links, skills,
   education, certifications, projects, and work experience — is read from
   the PORTFOLIO_DATA object below and rendered by render.js.

   To add a new project / certification / experience item, copy an existing
   entry in the relevant array and edit the fields. To remove one, delete
   its entry. Nothing else in the codebase needs to change.
   ========================================================================== */

const PORTFOLIO_DATA = {

  // ------------------------------------------------------------------
  // Profile — hero section
  // ------------------------------------------------------------------
  profile: {
    name: "Digvijay Wagh",
    status: "Backend & AI Engineer — Pune, India",
    role: "Backend Engineer specializing in Golang, cloud infrastructure, and AI-powered systems.",
    bio: "Backend engineer with experience building Golang services, disaster recovery and cloud migration tooling, infrastructure automation, and system utilities across VMware, Nutanix, and Azure. Currently focused on building AI-powered applications, multi-agent systems, and data engineering projects.",
    photo: "assets/Photo.jpeg"
  },

  // ------------------------------------------------------------------
  // Resume — used by the Resume section (view in a new tab + download).
  // Drop your resume PDF at the path below.
  // ------------------------------------------------------------------
  resume: {
    file: "assets/resume/Digvijay_Wagh_Resume.pdf",
    downloadName: "Digvijay_Wagh_Resume.pdf"
  },

  // ------------------------------------------------------------------
  // Contact — every link here is clickable and opens/redirects properly
  // ------------------------------------------------------------------
  contact: {
    email: "waghdigvijay2010@gmail.com",
    phone: "+919307054948",
    phoneDisplay: "+91 93070 54948",
    linkedin: "https://www.linkedin.com/in/digvijay-wagh-752b7822a",
    tuf: "https://takeuforward.org/profile/Digvijay27",
    leetcode: "https://leetcode.com/u/Digvijay_Wagh/",
    github: "https://github.com/DigvijayWagh22",
    instagram: "https://www.instagram.com/digvijay_.wagh/"
  },

  // ------------------------------------------------------------------
  // Skills — grouped exactly as on your resume
  // ------------------------------------------------------------------
  skills: [
    {
      group: "Languages",
      items: ["Golang", "Python", "C++"]
    },
    {
      group: "Software Engineering",
      items: ["Gin", "FastAPI", "Git", "Linux", "MySQL", "Jenkins"]
    },
    {
      group: "Virtualization & Cloud",
      items: ["VMware", "Nutanix", "AWS", "Azure"]
    },
    {
      group: "AI & Data",
      items: ["RAG", "AI Agents", "LangChain", "LangGraph", "PySpark", "Databricks"]
    }
  ],

  // ------------------------------------------------------------------
  // Education — add one entry per school (college, 12th, 10th, etc.)
  // ------------------------------------------------------------------
  education: [
    {
      organization: "Vishwakarma Institute of Information Technology",
      place: "Pune, India",
      degree: "B.Tech, Information Technology",
      stream: "Information Technology",
      score: "CGPA 9.05",
      date: "2021 — 2025"
    },
    {
      organization: "SGM College",
      place: "Karad, Maharashtra",
      degree: "HSC (12th)",
      stream: "Science",
      score: "Percentage: 96%, MHT-CET percentile: 97.04",
      date: "2019 — 2021"
    },
    {
      organization: "KEMS Aravade",
      place: "Aravade, Tal-Tasgaon, Dist-Sangli, Maharashtra",
      degree: "SSC (10th)",
      score: "Percentage: 93.80%",
      date: "2007 — 2019"
    }
  ],

  // ------------------------------------------------------------------
  // Certifications — clicking the name opens the certificate (PDF or
  // external certificate link) in a new tab.
  // ------------------------------------------------------------------
  certifications: [
    {
      name: "VMware vSphere 8 Certified Professional - Data Center Virtualization (VCP-DCV) (2V0-21.23) Cert Prep",
      issuer: "LinkedIn Learning",
      date: "April 2, 2026",
      file: "https://www.linkedin.com/learning/certificates/127685ee4764b8bf572db3fafb49351b1e3dc50ffa22307e1a2d4a3dbb2d7159?trk=share_certificate"
    },
    {
      name: "Manage Storage in Azure",
      issuer: "LinkedIn Learning",
      date: "March 22, 2026",
      file: "https://www.linkedin.com/learning/certificates/9d389365641999fd9274b6b1b4b8d31db706dfed308d6b9114e6f48ad0a3650c?trk=share_certificate"
    },
    {
      name: "Nutanix Hybrid Cloud Fundamentals (NHCF) Online",
      issuer: "Nutanix",
      date: "March 10, 2026",
      file: "https://drive.google.com/file/d/1ZhXOiERbflchX97U406qIrHTDJ6U8RdD/view?usp=sharing"
    },
    {
      name: "AWS: Storage and Data Management",
      issuer: "LinkedIn Learning",
      date: "April 7, 2026",
      file: "https://www.linkedin.com/learning/certificates/aab19fe4cac42d36c0063fed84559dd726cb236257b073e5a6e84e841da915b9?trk=share_certificate"
    },
    {
      name: "IBM Data Engineering Professional Certificate",
      issuer: "IBM",
      date: "November 2, 2024",
      file: "https://coursera.org/share/962d85ca742500ba5d38db1036c05461"
    }
  ],

  // ------------------------------------------------------------------
  // Projects — clicking a card opens a detail modal with the full
  // description, architecture images, tech stack, and problem solved.
  // ------------------------------------------------------------------
  projects: [
    {
      id: "sreagent",
      name: "SREAgent",
      summary: "Multi-agent AI system that analyzes failed Jenkins builds, investigates root causes, and creates fix pull requests for engineer review.",
      problem: "CI failures often require engineers to manually inspect build logs, code changes, and the Jenkins host before determining whether the issue is caused by application code, tests, dependencies, permissions, or host resources. This makes failure triage time-consuming and repetitive.",
      description: "SREAgent automates the initial CI failure investigation by collecting Jenkins logs and GitHub commit changes, classifying the failure using an LLM and deterministic log checks, and routing the issue to specialized agents. Code and test failures are investigated by a code-fix agent, while infrastructure-related failures are investigated using read-only tools on the Jenkins host. When a repository change is identified, the system creates a single pull request for engineer review and sends the investigation result to Slack.",
      techStack: ["Python", "FastAPI", "LangGraph", "LangChain", "Azure AI Foundry", "Jenkins", "GitHub REST API", "Slack", "SQLite", "Azure Key Vault", "Managed Identity"],
      highlights: [
        "Uses a structured multi-agent workflow to classify and investigate Jenkins build failures.",
        "Combines LLM-based analysis with deterministic regex checks to ground failure classification in build evidence.",
        "Uses read-only host investigation tools to inspect disk space, permissions, and installed packages when failures are infrastructure-related.",
        "Creates a single atomic GitHub commit and pull request when a repository-level fix is identified; changes are never auto-merged.",
        "Uses Azure Key Vault and VM Managed Identity for secure credential management.",
        "Tracks build processing in SQLite and runs as a persistent systemd service with duplicate-build protection.",
        "Sends Slack notifications containing the failure classification, evidence, confidence, and pull request link."
      ],
      images: ["assets/sreagent_triage_pipeline.png"]
    },
    {
      id: "productpulse",
      name: "ProductPulse AI",
      summary: "Databricks-based retail AI copilot combining structured analytics, RAG, and conversational memory for product and support intelligence.",
      problem: "Retail teams need to combine information scattered across reviews, support tickets, returns, orders, inventory data, and internal PDF documents. Traditional dashboards can provide metrics, while document search can provide guidance, but neither can combine both sources to answer a business question with supporting evidence.",
      description: "Built an end-to-end retail intelligence and support copilot on Databricks that combines a Lakehouse data pipeline, RAG, vector retrieval, SQL analytics, and conversational memory. Structured retail data is processed through Bronze and Gold Delta tables, while reviews, support tickets, and PDF documents are converted into RAG chunks and stored in Lakebase with pgvector. An LLM-based planner routes each question to SQL metrics, RAG, memory, or a hybrid workflow before generating the final response.",
      techStack: ["Databricks", "Unity Catalog", "Delta Lake", "PySpark", "Lakebase", "pgvector", "RAG", "Qwen Embeddings", "Llama", "SQL Warehouse", "Streamlit", "Databricks Apps", "Databricks Asset Bundles"],
      highlights: [
        "Built a Bronze-Silver-Gold data pipeline for structured retail data and unstructured PDF content.",
        "Implemented RAG over customer reviews, support tickets, and internal PDF documents using embeddings and Lakebase pgvector.",
        "Implemented LLM-based tool planning with Python validation and guardrails to route questions across SQL, RAG, memory, or hybrid workflows.",
        "Used SQL Warehouse to answer structured metric questions from Gold Delta tables without unnecessarily invoking RAG.",
        "Implemented Lakebase conversation memory for follow-up context and explicit user preferences.",
        "Deployed the conversational interface as a Streamlit application using Databricks Apps.",
        "Managed deployment of Databricks workflows and resources using Databricks Asset Bundles."
      ],
      images: ["assets/productpulse_lld_hand_sketch_flow.jpg"]
    }
  ],

  // ------------------------------------------------------------------
  // Work experience — the role, then individual clickable work items.
  // Each item opens a modal with problem / how it works / tech stack /
  // impact. Add images to assets/experience/ if you have diagrams.
  // ------------------------------------------------------------------
  experience: [
    {
      role: "Junior Software Engineer",
      company: "Datamotive Technologies, Pune",
      dateRange: "Sep 2025 — Jun 2026",
      items: [
        {
          id: "backendengineering",
          name: "Backend Engineering",
          summary: "Backend development and system improvements across configuration-driven alerts, event processing, reporting, and Golang services.",
          problem: "The disaster recovery platform required reliable backend services for processing events, triggering configurable alerts, generating operational reports, and addressing issues across different recovery workflows.",
          howItWorks: "Developed and enhanced Golang backend services with configuration-driven event and alert handling, implemented backend-based report generation, and resolved bugs across core service workflows. Worked with existing service components to improve functionality, reliability, and consistency of backend operations.",
          techStack: ["Golang", "Gin", "GORM", "MySQL", "REST APIs"],
          impact: "Improved backend reliability and operational visibility by automating alert handling and report generation while resolving issues across critical Golang services.",
          images: []
        },
        {
          id: "nutanixpackaging",
          name: "Nutanix Packaging",
          summary: "Automated Nutanix VM image packaging and delivery workflow using Packer and Jenkins.",
          problem: "Preparing customer-ready VM images in the Nutanix environment involved multiple manual steps, including VM provisioning, service registration, image preparation, and packaging.",
          howItWorks: "A base image VM and Jenkins server are created in the Nutanix infrastructure. Packer scripts automate the creation and configuration of new VMs from the base image, while Jenkins jobs orchestrate the packaging workflow, register required services, and generate a compressed QCOW2 image as the final customer deliverable.",
          techStack: ["Nutanix", "Packer", "Jenkins", "QCOW2", "Linux"],
          impact: "Automated the VM image preparation and packaging workflow, making the generation of standardized, customer-ready Nutanix images more consistent and reducing manual deployment steps.",
          images: []
        },
        {
          id: "ransomwareautomation",
          name: "Ransomware Detection",
          summary: "Developed automation scripts supporting block-level ransomware detection and security analysis workflows.",
          problem: "The ransomware detection workflow required supporting automation to process disk-level analysis data and make security checks easier to execute and validate during disaster recovery operations.",
          howItWorks: "Developed and maintained automation scripts supporting the ransomware detection workflow, working with block-level disk analysis data and detection-related processing. The automation helped streamline execution and validation of security analysis tasks within the recovery environment.",
          techStack: ["Golang", "Automation Scripts", "Block-level Disk Analysis", "Ransomware Detection"],
          impact: "Streamlined supporting automation for the ransomware detection workflow, reducing manual effort during security analysis and validation of recovery data.",
          images: []
        },
        {
          id: "networkanalyzer",
          name: "NetworkAnalyzer",
          summary: "A Golang-based network diagnostics tool for collecting client-side network statistics and analyzing TCP-level performance.",
          problem: "Network-related issues during replication were difficult to investigate without consistent network performance data from the customer environment.",
          howItWorks: "A Golang-based tool collects network statistics from the client environment, processes the collected data, and generates analysis reports. Python is used to analyze the network metrics and plot TCP-level performance graphs, helping engineers understand network behavior during replication.",
          techStack: ["Golang", "TCP/IP", "Python", "Network Diagnostics", "Data Visualization"],
          impact: "Standardized network data collection and analysis, making it easier for engineers to investigate network performance and identify potential issues affecting replication.",
          images: []
        },
        {
          id: "nutanixinfraanalyzer",
          name: "NutanixInfraAnalyzer",
          summary: "A Golang-based Nutanix infrastructure analysis tool for collecting and reporting customer environment details.",
          problem: "The migration and disaster recovery platform required detailed information about the customer's Nutanix environment, but collecting infrastructure details manually was time-consuming and inconsistent.",
          howItWorks: "A Golang utility connects to the Nutanix environment through Nutanix APIs, collects information about VMs, disks, clusters, storage containers, networks, and Guest OS configurations, and generates structured CSV reports for infrastructure analysis.",
          techStack: ["Golang", "Nutanix APIs", "Nutanix Prism", "CSV"],
          impact: "Automated Nutanix infrastructure discovery and reporting, reducing manual data collection and providing a structured view of the customer environment for migration and deployment analysis.",
          images: []
        },
        {
          id: "azureutility",
          name: "Azure Utility",
          summary: "A Golang-based Azure utility for validating VM source images during cloud migration.",
          problem: "During Azure VM migration, engineers needed to verify whether the source VM image was available in the target migration environment before proceeding with the migration workflow.",
          howItWorks: "A Golang utility built with the Azure SDK for Go connects to Azure and retrieves VM source image information. It then verifies whether the required source image is present in the target migration environment.",
          techStack: ["Golang", "Azure SDK for Go", "Microsoft Azure", "Azure Compute"],
          impact: "Automated source image discovery and validation, helping identify missing images early and reducing potential issues during Azure VM migration.",
          images: []
        }
      ]
    },
    {
      role: "Backend Intern",
      company: "Datamotive Technologies, Pune",
      dateRange: "Jun 2025 — Sep 2025",
      items: [
        {
          id: "vmwareinfraanalyzer",
          name: "VMwareInfraAnalyzer",
          summary: "A Golang-based VMware infrastructure analysis tool for collecting and reporting customer environment details before deployment.",
          problem: "The disaster recovery platform required detailed information about a customer's existing VMware environment before deployment. Collecting VM, disk, host, datastore, stale file, and Guest OS information manually was time-consuming and error-prone.",
          howItWorks: "A Golang utility connects to the customer's VMware environment through VMware APIs, collects infrastructure and configuration details, processes VM information concurrently, and generates structured CSV reports for analysis. The reports provide visibility into VMs, disks, hosts, datastores, stale files, and Guest OS details.",
          techStack: ["Golang", "VMware APIs", "govmomi", "CSV"],
          impact: "Automated infrastructure discovery and reporting, reducing manual effort and helping the team identify environment details and potential deployment issues before installing the disaster recovery platform.",
          images: []
        },
        {
          id: "postscriptfeature",
          name: "Postscript Feature",
          summary: "Golang-based post-recovery automation for configuring recovered Windows VMs.",
          problem: "After VM recovery, Windows machines required several manual configuration steps before they could be used in the target environment, increasing recovery time and the possibility of configuration errors.",
          howItWorks: "A Golang-based postscript feature automatically invokes configuration scripts on recovered Windows VMs after recovery. The scripts perform Sysprep, configure SAN policy, update the IP address and hostname, join the VM to Active Directory, and update the corresponding DNS records.",
          techStack: ["Golang", "Windows", "PowerShell", "Active Directory", "DNS"],
          impact: "Automated key post-recovery configuration tasks, reducing manual intervention and helping recovered Windows VMs become ready for use faster and more consistently.",
          images: []
        }
      ]
    }
  ]
};