const skillData = {
  "Python": {desc:"Used for data cleaning, exploratory analysis, feature engineering, analytics and automation.", level:"Analytics & EDA", tools:"Pandas · NumPy", width:"90%"},
  "SQL": {desc:"Used for ETL, aggregations, subqueries, CASE statements, window functions and business analysis.", level:"Business Analysis", tools:"SQL Server · SSMS", width:"88%"},
  "Power BI": {desc:"Used to build interactive dashboards, KPI cards, slicers, trend analysis and business reporting.", level:"BI & Dashboards", tools:"DAX · Slicers", width:"88%"},
  "Tableau": {desc:"Used to build interactive dashboards and visual stories with filters and multiple analytical views.", level:"Visualization", tools:"Interactive dashboards", width:"82%"},
  "Pandas": {desc:"Used for data cleaning, transformation, feature engineering, grouping and exploratory analysis.", level:"Data Wrangling", tools:"DataFrames · ETL", width:"91%"},
  "NumPy": {desc:"Used for numerical operations and supporting analytical workflows in Python.", level:"Numerical Analysis", tools:"Arrays · Statistics", width:"84%"},
  "EDA": {desc:"Used to inspect distributions, trends, relationships, missing values and outliers before modeling.", level:"Exploratory Analysis", tools:"Plots · KPIs", width:"90%"},
  "Statistics": {desc:"Applied correlation analysis, regression, Welch's t-tests and confidence-interval analysis in projects.", level:"Statistical Analysis", tools:"Regression · Tests", width:"78%"},
  "Excel": {desc:"Listed in the resume as part of the analytics toolkit for analysis and reporting.", level:"Analysis & Reporting", tools:"Spreadsheets", width:"78%"},
  "Scikit-learn": {desc:"Used for Logistic Regression and Linear SVM modeling in the NLP project.", level:"Machine Learning", tools:"Classification", width:"76%"},
  "Matplotlib": {desc:"Used for analytical visualizations during Python/Jupyter workflows.", level:"Visualization", tools:"Python charts", width:"80%"},
  "Seaborn": {desc:"Used for statistical and exploratory visualizations in analytics projects.", level:"EDA Visualization", tools:"Statistical plots", width:"80%"},
  "MongoDB": {desc:"Listed in the resume as a database technology.", level:"Database", tools:"NoSQL", width:"68%"},
  "Jupyter": {desc:"Used as the notebook environment for Python analysis, EDA, feature engineering and modeling.", level:"Analytics Environment", tools:"Notebooks", width:"90%"},
  "GitHub": {desc:"Used to document and publish analytics projects and maintain project work.", level:"Version Control", tools:"Repositories", width:"82%"}
};

const skillButtons = document.querySelectorAll(".skill-pill");
const skillName = document.getElementById("skill-name");
const skillDesc = document.getElementById("skill-desc");
const skillBar = document.getElementById("skill-bar");
const skillLevel = document.getElementById("skill-level");
const skillTools = document.getElementById("skill-tools");

function selectSkill(name){
  const data = skillData[name];
  if(!data) return;
  skillButtons.forEach(b => b.classList.toggle("selected", b.dataset.skill === name));
  skillName.textContent = name;
  skillDesc.textContent = data.desc;
  skillBar.style.width = data.width;
  skillLevel.textContent = data.level;
  skillTools.textContent = data.tools;
}
skillButtons.forEach(btn => btn.addEventListener("click", () => selectSkill(btn.dataset.skill)));

const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}));

const filters = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");
filters.forEach(filter => filter.addEventListener("click", () => {
  filters.forEach(f => f.classList.remove("active"));
  filter.classList.add("active");
  const wanted = filter.dataset.filter;
  projectCards.forEach(card => {
    const show = wanted === "all" || card.dataset.category.split(" ").includes(wanted);
    card.classList.toggle("hidden", !show);
  });
}));

const projectDetails = {
  "Customer Shopping Behaviour Analysis": {
    type:"PYTHON • SQL • POWER BI",
    description:"Analyzed 3,900 customer records using Python, Pandas, NumPy and Jupyter; standardized data, created age groups and purchase-frequency metrics, developed 10 business-focused SQL queries, and built an interactive Power BI dashboard.",
    stats:["3,900 records","10 SQL queries","Power BI dashboard"],
    tags:["Python","Pandas","SQL Server","Power BI","GitHub"]
  },
  "Mental Health Text Classification & NLP Analysis": {
    type:"NLP • MACHINE LEARNING • TABLEAU",
    description:"Analyzed 53,044 records and cleaned 52,681 usable statements. Applied NLTK preprocessing, TF-IDF with 10,000 unigram/bigram features, Logistic Regression and Linear SVM, plus SQL analysis and an interactive Tableau dashboard.",
    stats:["53,044 records","52,681 usable statements","10K TF-IDF features"],
    tags:["NLTK","TF-IDF","Scikit-learn","Tableau","SQL"]
  },
  "Vendor Performance Analysis": {
    type:"PYTHON • SQL • POWER BI",
    description:"Analyzed 123 vendors across sales, purchases, profitability, freight, inventory and product performance. Integrated data with SQL ETL and applied correlation, linear regression, Welch's t-tests and 95% confidence-interval analysis before building a Power BI dashboard.",
    stats:["123 vendors","95% confidence intervals","Power BI dashboard"],
    tags:["SQL ETL","Regression","Welch's t-test","Power BI"]
  }
};

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalType = document.getElementById("modal-type");
const modalDescription = document.getElementById("modal-description");
const modalStats = document.getElementById("modal-stats");
const modalTags = document.getElementById("modal-tags");
const modalGithub = document.getElementById("modal-github");

projectCards.forEach(card => card.addEventListener("click", e => {
  if(e.target.closest("a")) return;
  const title = card.querySelector("h3").innerText.replace(/\n/g," ");
  const data = projectDetails[title];
  if(!data) return;
  modalTitle.textContent = title;
  modalType.textContent = data.type;
  modalDescription.textContent = data.description;
  modalStats.innerHTML = data.stats.map(s => `<span><b>${s}</b></span>`).join("");
  modalTags.innerHTML = data.tags.map(t => `<span>${t}</span>`).join("");
  modalGithub.href = "https://github.com/Himanshu_Gupta21";
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("no-scroll");
}));

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("no-scroll");
}
document.querySelector(".modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
reveals.forEach(el => observer.observe(el));

const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s => sectionObserver.observe(s));

document.getElementById("year").textContent = new Date().getFullYear();
selectSkill("Python");
