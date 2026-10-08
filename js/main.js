"use strict";
/* Portafolio · diseño Holograma (v3): comportamiento de la página.
   Depende de js/data.js (datos y utilidades), que se carga antes. */

/* =====================================================================
   Módulos
   ===================================================================== */
const ProjectFilter = {
  apply(button) {
    const group = button.closest("[data-filter-group]");
    const list = document.getElementById(group.dataset.filterGroup);
    const filter = button.dataset.filter;
    group.querySelectorAll("[data-filter]").forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    let visible = 0;
    list.querySelectorAll("[data-categories]").forEach((item) => {
      item.hidden = filter !== "todo" && !item.dataset.categories.split(" ").includes(filter);
      if (!item.hidden) visible += 1;
    });
    document.querySelectorAll(`[data-filter-count="${list.id}"]`).forEach((counter) => { counter.textContent = `${visible} objeto(s)`; });
  },
};

const ProjectDialog = {
  element: document.getElementById("projectDialog"),
  open(projectId, skin) {
    const project = projectById(projectId);
    this.element.dataset.skin = skin;
    this.element.innerHTML = html`
      <div class="portfolio-dialog__inner">
        <header class="portfolio-dialog__header">
          <div>
            <p class="portfolio-dialog__eyebrow">${project.type}</p>
            <h2 class="portfolio-dialog__title" id="projectDialogTitle">${project.name}</h2>
          </div>
          <button class="portfolio-dialog__close" data-action="close-dialog">Cerrar</button>
        </header>
        ${projectMedia(project, "portfolio-dialog")}
        <div class="portfolio-dialog__text">
          ${project.details.map((p) => `<p>${p}</p>`)}
          <p class="portfolio-dialog__build">${project.build}</p>
        </div>
        <div class="portfolio-dialog__techs"><ul class="tech-list">${project.techs.map((t) => `<li>${t}</li>`)}</ul></div>
        ${project.url ? html`<a class="portfolio-dialog__link" href="${project.url}" target="_blank" rel="noopener">Abrir proyecto ↗</a>` : ""}
      </div>`;
    this.element.showModal();
  },
};

const CourseViewer = {
  element: document.getElementById("courseDialog"),
  open(skin, courseId = COURSES[0].id) {
    this.element.dataset.skin = skin;
    this.element.innerHTML = html`
      <div class="portfolio-dialog__inner">
        <header class="portfolio-dialog__header">
          <div>
            <p class="portfolio-dialog__eyebrow">${COURSES.length} certificados</p>
            <h2 class="portfolio-dialog__title" id="courseDialogTitle">Cursos</h2>
          </div>
          <button class="portfolio-dialog__close" data-action="close-dialog">Cerrar</button>
        </header>
        <div class="course-viewer">
          <ul class="course-viewer__list">
            ${COURSES.map((course) => html`<li><button class="course-viewer__item" data-action="show-certificate" data-course-id="${course.id}" aria-pressed="false">${course.name}<span>${course.provider}</span></button></li>`)}
          </ul>
          <figure class="course-viewer__figure"><img id="certificateImage" src="" alt=""><figcaption id="certificateCaption"></figcaption></figure>
        </div>
      </div>`;
    this.element.showModal();
    this.show(courseId);
  },
  show(courseId) {
    const course = COURSES.find((c) => c.id === courseId);
    this.element.querySelectorAll("[data-action='show-certificate']").forEach((b) => {
      const isCurrent = b.dataset.courseId === courseId;
      b.setAttribute("aria-pressed", String(isCurrent));
      if (isCurrent) b.scrollIntoView({ block: "nearest" });
    });
    const image = this.element.querySelector("#certificateImage");
    image.src = course.cert;
    image.alt = `Certificado: ${course.name}`;
    this.element.querySelector("#certificateCaption").textContent = `${course.name} · ${course.provider}`;
  },
};

const MobileMenu = {
  toggle(button) {
    const root = button.closest("[data-menu-root]");
    const open = root.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  },
  closeFrom(link) {
    const root = link.closest("[data-menu-root]");
    if (!root || !root.classList.contains("is-open")) return;
    root.classList.remove("is-open");
    root.querySelector("[data-action='toggle-menu']").setAttribute("aria-expanded", "false");
  },
};

const EmailCopy = {
  async copy(button) {
    const original = button.textContent;
    const matchCase = (word) => (/^[A-ZÁÉÍÓÚ[]/.test(original) ? word[0].toUpperCase() + word.slice(1) : word);
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      button.textContent = matchCase("copiado");
    } catch {
      const range = document.createRange();
      range.selectNodeContents(button.parentElement.querySelector("[data-email]"));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = matchCase("seleccionado");
    }
    setTimeout(() => { button.textContent = original; }, 1600);
  },
};

/* Recalcula al abrir la página los datos que dependen de la fecha (edad, tiempo desde el título, año) */
const ProfileFacts = {
  update() {
    const today = new Date();
    const since = DateUtils.elapsed(PROFILE.graduationDate, today);
    const values = {
      age: DateUtils.ageOn(PROFILE.birthDate, today),
      yearsSinceGraduation: since.years,
      sinceGraduationText: DateUtils.elapsedText(since),
      year: today.getFullYear(),
    };
    document.querySelectorAll("[data-fact]").forEach((el) => {
      const value = String(values[el.dataset.fact]);
      el.textContent = el.dataset.pad ? value.padStart(Number(el.dataset.pad), "0") : value;
    });
  },
};

/* =====================================================================
   Eventos delegados: cada control declara su acción con data-action
   ===================================================================== */
function handleClick(event) {
  const target = event.target.closest("[data-action], [data-filter], a[href^='#']");
  if (!target) return;
  if (target.matches("[data-filter]")) return ProjectFilter.apply(target);
  if (target.matches("a[href^='#']")) return MobileMenu.closeFrom(target);

  switch (target.dataset.action) {
    case "toggle-menu": return MobileMenu.toggle(target);
    case "open-project": return ProjectDialog.open(target.dataset.projectId, "glass");
    case "open-courses": return CourseViewer.open("glass", target.dataset.courseId);
    case "show-certificate": return CourseViewer.show(target.dataset.courseId);
    case "copy-email": return EmailCopy.copy(target);
    case "close-dialog": return target.closest("dialog").close();
  }
}

function closeDialogOnBackdrop(event) {
  if (event.target instanceof HTMLDialogElement) event.target.close();
}

/* =====================================================================
   Inicio
   ===================================================================== */
ProfileFacts.update();
document.addEventListener("click", handleClick);
document.querySelectorAll("dialog").forEach((dialog) => dialog.addEventListener("click", closeDialogOnBackdrop));
