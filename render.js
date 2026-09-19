/* ==========================================================================
   RENDER — reads PORTFOLIO_DATA (content.js) and ICONS (icons.js) and
   builds the DOM. You should not need to edit this file to update your
   content — edit content.js instead.
   ========================================================================== */

const modal = document.getElementById("detailModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function openModal(html) {
  modalBody.innerHTML = html;
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
}
function closeModal() {
  modalBody.innerHTML = "";
  if (typeof modal.close === "function") modal.close();
  else modal.removeAttribute("open");
}
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
modal.addEventListener("cancel", closeModal);

function chipRow(items, className = "chip") {
  return items.map((i) => `<span class="${className}">${i}</span>`).join("");
}

function imageGallery(images, altPrefix) {
  if (!images || images.length === 0) return "";
  return `<div class="modal__gallery">${images
    .map((src) => `<img src="${src}" alt="${altPrefix} diagram" loading="lazy">`)
    .join("")}</div>`;
}

/* ---------------------------------------------------------
   Hero
--------------------------------------------------------- */
function renderHero() {
  const p = PORTFOLIO_DATA.profile;
  const r = PORTFOLIO_DATA.resume;
  document.getElementById("hero").innerHTML = `
    <div class="hero__top">
      <img class="hero__photo" src="${p.photo}" alt="${p.name}" onerror="this.style.display='none'">
      <div class="hero__id">
        <p class="hero__status"><span class="dot" aria-hidden="true"></span>${p.status}</p>
        <h1 class="hero__name">${p.name}</h1>
      </div>
    </div>
    <p class="hero__role">${p.role}</p>
    <p class="hero__bio">${p.bio}</p>

    <div class="hero__cta">
      <a class="btn btn--primary" href="${r.file}" target="_blank" rel="noopener noreferrer">
        ${icon("fileText")}View resume
      </a>
      <a class="btn btn--ghost" href="${r.file}" download="${r.downloadName}">
        ${icon("download")}Download
      </a>
    </div>

    <ul class="hero__links">
      <li><a href="mailto:${PORTFOLIO_DATA.contact.email}">${icon("mail")}Email</a></li>
      <li><a href="tel:${PORTFOLIO_DATA.contact.phone}">${icon("phone")}${PORTFOLIO_DATA.contact.phoneDisplay}</a></li>
      <li><a href="${PORTFOLIO_DATA.contact.linkedin}" target="_blank" rel="noopener noreferrer">${icon("linkedin")}LinkedIn</a></li>
      <li><a href="${PORTFOLIO_DATA.contact.github}" target="_blank" rel="noopener noreferrer">${icon("github")}GitHub</a></li>
      <li><a href="${PORTFOLIO_DATA.contact.instagram}" target="_blank" rel="noopener noreferrer">${icon("instagram")}Instagram</a></li>
      <li><a href="${PORTFOLIO_DATA.contact.tuf}" target="_blank" rel="noopener noreferrer">${icon("target")}TUF</a></li>
      <li><a href="${PORTFOLIO_DATA.contact.leetcode}" target="_blank" rel="noopener noreferrer">${icon("code")}LeetCode</a></li>
    </ul>
  `;
}

/* ---------------------------------------------------------
   Experience
--------------------------------------------------------- */
function renderExperience() {
  const list = document.getElementById("experienceList");
  list.innerHTML = PORTFOLIO_DATA.experience
    .map((role, idx) => {
      const isLast = idx === PORTFOLIO_DATA.experience.length - 1;
      const itemsHtml = role.items
        .map(
          (item) => `
        <button class="work-item" data-work-id="${item.id}">
          <span class="work-item__text">
            <span class="work-item__name">${item.name}</span>
            <span class="work-item__summary">${item.summary}</span>
          </span>
          ${icon("chevronRight", "work-item__chev")}
        </button>`
        )
        .join("");

      const otherHtml =
        role.otherContributions && role.otherContributions.length
          ? `<ul class="entry__other">${role.otherContributions
              .map((c) => `<li>${c}</li>`)
              .join("")}</ul>`
          : "";

      return `
      <article class="entry">
        <div class="entry__rail">
          <span class="entry__dot">${icon("briefcase")}</span>
          ${isLast ? "" : '<span class="entry__line"></span>'}
        </div>
        <div class="entry__body">
          <p class="entry__date">${role.dateRange}</p>
          <h3 class="entry__role">${role.role} <span class="entry__at">— ${role.company}</span></h3>
          ${itemsHtml ? `<div class="work-items">${itemsHtml}</div>` : ""}
          ${otherHtml}
        </div>
      </article>`;
    })
    .join("");

  list.querySelectorAll(".work-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = PORTFOLIO_DATA.experience
        .flatMap((r) => r.items)
        .find((i) => i.id === btn.dataset.workId);
      if (!item) return;
      openModal(`
        <p class="modal__kicker">${icon("briefcase")}Work experience</p>
        <h3 class="modal__title">${item.name}</h3>
        <h4 class="modal__label">Problem</h4>
        <p>${item.problem}</p>
        <h4 class="modal__label">How it works</h4>
        <p>${item.howItWorks}</p>
        <h4 class="modal__label">Tech stack</h4>
        <div class="chips">${chipRow(item.techStack)}</div>
        <h4 class="modal__label">Impact</h4>
        <p>${item.impact}</p>
        ${imageGallery(item.images, item.name)}
      `);
    });
  });
}

/* ---------------------------------------------------------
   Projects
--------------------------------------------------------- */
function renderProjects() {
  const list = document.getElementById("projectsList");
  list.innerHTML = PORTFOLIO_DATA.projects
    .map(
      (proj) => `
    <article class="project" data-project-id="${proj.id}" tabindex="0" role="button" aria-label="View details for ${proj.name}">
      <div class="project__head">
        <span class="project__icon">${icon("folder")}</span>
        <h3>${proj.name}</h3>
      </div>
      <p class="project__desc">${proj.summary}</p>
      <div class="project__tags">${chipRow(proj.techStack.slice(0, 4), "tag")}</div>
      <span class="project__cta">View details ${icon("arrowRight")}</span>
    </article>`
    )
    .join("");

  list.querySelectorAll(".project").forEach((card) => {
    const open = () => {
      const proj = PORTFOLIO_DATA.projects.find((p) => p.id === card.dataset.projectId);
      if (!proj) return;
      openModal(`
        <p class="modal__kicker">${icon("folder")}Project</p>
        <h3 class="modal__title">${proj.name}</h3>
        <h4 class="modal__label">Problem it solves</h4>
        <p>${proj.problem}</p>
        <h4 class="modal__label">What it does</h4>
        <p>${proj.description}</p>
        <h4 class="modal__label">Tech stack</h4>
        <div class="chips">${chipRow(proj.techStack)}</div>
        ${
          proj.highlights && proj.highlights.length
            ? `<h4 class="modal__label">Highlights</h4><ul>${proj.highlights
                .map((h) => `<li>${h}</li>`)
                .join("")}</ul>`
            : ""
        }
        ${imageGallery(proj.images, proj.name)}
      `);
    };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });
}

/* ---------------------------------------------------------
   Skills
--------------------------------------------------------- */
function renderSkills() {
  document.getElementById("skillsList").innerHTML = PORTFOLIO_DATA.skills
    .map((group) => {
      const iconKey = SKILL_GROUP_ICONS[group.group] || "code";
      return `
    <div class="skills__group">
      <h4>${icon(iconKey, "skills__icon")}${group.group}</h4>
      <div class="chips">${chipRow(group.items)}</div>
    </div>`;
    })
    .join("");
}

/* ---------------------------------------------------------
   Certifications
--------------------------------------------------------- */
function renderCertifications() {
  document.getElementById("certsList").innerHTML = PORTFOLIO_DATA.certifications
    .map(
      (cert) => `
    <li class="cert-item">
      <span class="cert-item__icon">${icon("award")}</span>
      <span class="cert-item__text">
        <a href="${cert.file}" target="_blank" rel="noopener noreferrer">${cert.name}${icon("externalLink", "cert-item__ext")}</a>
        <span class="cert-item__meta">${[cert.issuer, cert.date].filter(Boolean).join(" · ")}</span>
      </span>
    </li>`
    )
    .join("");
}

/* ---------------------------------------------------------
   Education
--------------------------------------------------------- */
function renderEducation() {
  document.getElementById("eduList").innerHTML = PORTFOLIO_DATA.education
    .map(
      (edu) => `
    <div class="edu__entry">
      <span class="edu__icon">${icon("cap")}</span>
      <div>
        <p class="edu__school">${edu.organization}</p>
        <p class="edu__degree">${edu.degree}${edu.stream ? ` — ${edu.stream}` : ""}</p>
        <p class="edu__meta">${edu.place} · ${edu.score}</p>
        <p class="edu__date">${edu.date}</p>
      </div>
    </div>`
    )
    .join("");
}

/* ---------------------------------------------------------
   Resume
--------------------------------------------------------- */
function renderResume() {
  const r = PORTFOLIO_DATA.resume;
  document.getElementById("resumeCard").innerHTML = `
    <div class="resume-card">
      <span class="resume-card__icon">${icon("fileText")}</span>
      <div class="resume-card__text">
        <p class="resume-card__title">Digvijay Wagh — Resume</p>
        <p class="resume-card__meta">PDF · view in your browser or download a copy</p>
      </div>
      <div class="resume-card__actions">
        <a class="btn btn--primary" href="${r.file}" target="_blank" rel="noopener noreferrer">${icon("fileText")}View</a>
        <a class="btn btn--ghost" href="${r.file}" download="${r.downloadName}">${icon("download")}Download</a>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------------
   Contact
--------------------------------------------------------- */
function renderContact() {
  const c = PORTFOLIO_DATA.contact;
  document.getElementById("contactList").innerHTML = `
    <li><a href="mailto:${c.email}">${icon("mail")}${c.email}</a></li>
    <li><a href="tel:${c.phone}">${icon("phone")}${c.phoneDisplay}</a></li>
    <li><a href="${c.linkedin}" target="_blank" rel="noopener noreferrer">${icon("linkedin")}LinkedIn</a></li>
    <li><a href="${c.github}" target="_blank" rel="noopener noreferrer">${icon("github")}GitHub</a></li>
    <li><a href="${c.instagram}" target="_blank" rel="noopener noreferrer">${icon("instagram")}Instagram</a></li>
    <li><a href="${c.tuf}" target="_blank" rel="noopener noreferrer">${icon("target")}Take U Forward</a></li>
    <li><a href="${c.leetcode}" target="_blank" rel="noopener noreferrer">${icon("code")}LeetCode</a></li>
  `;
}

/* ---------------------------------------------------------
   Nav toggle + footer year
--------------------------------------------------------- */
function initChrome() {
  const navToggle = document.getElementById("navToggle");
  const nav = document.querySelector(".topbar__nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------
   Init
--------------------------------------------------------- */
renderHero();
renderExperience();
renderProjects();
renderSkills();
renderCertifications();
renderEducation();
renderResume();
renderContact();
initChrome();