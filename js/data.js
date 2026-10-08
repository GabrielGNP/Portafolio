"use strict";
/* Portafolio · diseño Holograma (v3): datos del portafolio y utilidades compartidas.
   Para agregar un proyecto, un curso o un trabajo, se edita solo este archivo
   (y la tarjeta correspondiente en index.html). */

/* =====================================================================
   Datos
   ===================================================================== */
const PROFILE = {
  name: "Gabriel Perero",
  role: "Analista de Sistemas de Información y desarrollador de software",
  birthDate: new Date(1999, 2, 16),
  graduationDate: new Date(2022, 6, 7),
  email: "gabrielpererojob@gmail.com",
  linkedin: "https://www.linkedin.com/in/gabriel-perero/",
  github: "https://github.com/GabrielGNP",
  logo: "img/GP.png",
};

const EXPERIENCE = [
  {
    id: "sofka", role: "Consultor de desarrollo", org: "Sofka Technologies",
    start: "2026-05", end: null, logo: "img/Sofka.jpg",
    summary: "",
    points: [], techs: [],
  },
  {
    id: "uader", role: "Docente universitario", org: "UADER FCyT",
    orgFull: "Universidad Autónoma de Entre Ríos, Facultad de Ciencia y Tecnología",
    start: "2024-10", end: null, logo: "img/Uader.png",
    summary: "Docente auxiliar universitario en la carrera de Licenciatura en Sistemas.",
    points: [], techs: [],
  },
  {
    id: "freelance", role: "Desarrollador de software freelance", org: "Trabajo independiente",
    start: "2022-07", end: null, logo: "img/GSmartGMail.png",
    summary: "Desarrollo de aplicaciones de software a demanda. Las tecnologías dependen del tipo de software a desarrollar.",
    points: [
      "Gestor de Productos: aplicación de escritorio para Windows.",
      "Escáner de códigos de barras: aplicación móvil hecha con Flutter (Dart), como subcontratación.",
    ],
    techs: [],
  },
  {
    id: "coding-school", role: "Profesor de programación", org: "Academia Coding School",
    // Dos períodos en la academia; start y end abarcan del primero al último
    periods: [{ start: "2023-11", end: "2025-04" }, { start: "2026-04", end: "2026-09" }],
    start: "2023-11", end: "2026-09", logo: "img/Coding%20School.webp",
    summary: "Profesor de niveles iniciales. Enseñanza de los conceptos básicos y la lógica de la programación usando la creación de juegos como medio de aprendizaje.",
    points: [], techs: ["Scratch", "Construct 3"],
  },
  {
    id: "the-west", role: "Administrador de la wiki de The West", org: "Voluntariado",
    start: "2023-06", end: "2024-04", logo: null,
    summary: "Mantenimiento y actualización de la información en la wiki del juego web The West.",
    points: [
      "Agregar contenido nuevo y actualizar la información.",
      "Mejorar la visibilidad y la organización de la información.",
      "Idear nuevos usos o utilidades para la wiki.",
      "Generar informes de actualizaciones y crear el manual de usuario.",
      "Hacer que la wiki sea responsive.",
    ],
    techs: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  {
    id: "taller", role: "Profesor en taller de informática", org: "Taller para adultos mayores y jubilados",
    start: "2023-03", end: "2023-11", logo: null,
    summary: "Enseñanza del uso de la PC y de herramientas como Gmail, Drive y Google Maps, consejos de seguridad al navegar y uso de internet como herramienta de ayuda.",
    points: ["Realización de guías y manuales sobre el uso de distintas herramientas."],
    techs: [],
  },
];

const PROJECT_CATEGORIES = [
  { id: "todo", label: "Todo" },
  { id: "web", label: "Web" },
  { id: "backend", label: "Back-End" },
  { id: "movil", label: "Móvil" },
  { id: "desktop", label: "Escritorio" },
];

const PROJECTS = [
  {
    id: "gestor", name: "Sistema Gestor de Productos", type: "Aplicación de escritorio para Windows",
    categories: ["desktop"], image: "img/projects/Gestor%20de%20Productos.png", icon: null, portrait: false,
    summary: "Sistema para negocios de venta de productos que gestiona los datos de los productos almacenados en una base de datos local.",
    details: [
      "Sistema de uso para negocios de venta de productos.",
      "Gestiona los datos relacionados a los productos almacenados en una base de datos local.",
      "Permite almacenar información sobre productos, marcas, rubros, clientes y ventas.",
      "Software genérico comercial.",
    ],
    build: "Creado con Visual Studio 2022 usando Windows Forms y C#. Código versionado con Git.",
    techs: ["C#", "SQLite", "Git", "Visual Studio 2022"], url: null,
  },
  {
    id: "arrecife", name: "Arrecife Mobil", type: "Aplicación móvil para Android",
    categories: ["movil"], image: "img/projects/Arrecife%20Mobil.jpg", icon: "img/projects/iconArrecife%20Mobil.jpg", portrait: true,
    summary: "Aplicación para almacenar de manera segura información y credenciales de cuentas.",
    details: [
      "Almacenamiento seguro de las credenciales de las cuentas de usuario que se crean en distintas plataformas y servicios.",
      "Guarda nombre de usuario, contraseña y correo de cada cuenta. No automatiza el inicio de sesión: solo mantiene un registro seguro para consultarlo cuando haga falta.",
      "También permite registrar información de texto de manera segura.",
      "Cifra la información a partir de la contraseña escrita, y solo puede descifrarse desde la propia app.",
    ],
    build: "Creada con el SDK Flutter y el lenguaje Dart, en Android Studio.",
    techs: ["Flutter", "Dart", "Android Studio", "Android"], url: null,
  },
  {
    id: "bibliocode", name: "BiblioCode", type: "Aplicación web",
    categories: ["web"], image: "img/projects/BiblioCode.png", icon: null, portrait: false,
    summary: "Repositorio de lenguajes y fragmentos de código ya usados, para tener a mano utilidades al crear nuevos proyectos.",
    details: [
      "Un repositorio de información sobre lenguajes y fragmentos de código usados antes, para acceder fácilmente a distintas utilidades al crear nuevos proyectos.",
      "No es un repositorio de proyectos grandes ni una documentación completa de lenguajes, frameworks, librerías o herramientas.",
      "Es un lugar para guardar fragmentos de código curiosos, útiles o interesantes que sirven de ejemplo y ahorran tiempo al escribir código.",
    ],
    build: "Creada con HTML, CSS y JavaScript puro.",
    techs: ["HTML", "CSS", "JavaScript", "Visual Studio Code"], url: "https://gabrielgnp.github.io/BiblioCode",
  },
  {
    id: "sic", name: "Proyecto SIC (Sistem Inputs Controller)", type: "Aplicación de escritorio para Windows",
    categories: ["desktop"], image: "img/projects/SIC.png", icon: null, portrait: false,
    summary: "Registra la cantidad de pulsaciones del teclado y del mouse para llevar un control del uso de esos periféricos.",
    details: [
      "Registra de forma numérica la cantidad de pulsaciones del teclado y del mouse, para tener un control sobre el uso de estos dos periféricos.",
      "Incluye un autoclicker que no suma clics a los contadores, así la contabilización del uso del mouse queda limpia.",
    ],
    build: "Creado con C# y Windows Forms. Código versionado con Git.",
    techs: ["C#", "Windows Forms", "Git"], url: "https://gabrielgnp.github.io/SIC_Website/",
  },
  {
    id: "hanoi", name: "Torre de Hanoi", type: "Aplicación web · juego",
    categories: ["web", "backend"], image: "img/projects/Torre%20de%20Hanoi.png", icon: null, portrait: false,
    summary: "El clásico juego, hecho sin frameworks ni librerías, con tiempos y récords guardados en un servidor propio.",
    details: [
      "Uno de los primeros proyectos: recrear el clásico juego de la Torre de Hanoi y aprender a usar íconos en los proyectos.",
      "El servidor que guarda los tiempos y los récords está construido con Cloudflare Workers, y la base de datos con Cloudflare D1.",
    ],
    build: "Creada con HTML, CSS y JavaScript puro. Íconos de Font Awesome.",
    techs: ["HTML", "CSS", "JavaScript", "Git", "Font Awesome", "Cloudflare Workers", "Cloudflare D1"],
    url: "https://gabrielgnp.github.io/TorreDeHanoi/index.html",
  },
  {
    id: "archery", name: "Archery Statistics", type: "Aplicación móvil para Android",
    categories: ["movil"], image: "img/projects/Archery%20Statistics.jpg", icon: "img/projects/iconArcheryStatistics.png", portrait: true,
    summary: "Registra, evalúa y genera estadísticas de la práctica de tiro con arco.",
    details: [
      "Registra los resultados de las prácticas de tiro con arco.",
      "Con esos resultados genera estadísticas para evaluar la mejora del deportista a lo largo del tiempo.",
    ],
    build: "Creada con Flutter y Dart en Android Studio. Los datos se guardan localmente en archivos de texto plano.",
    techs: ["Flutter", "Dart", "Android Studio", "Android"], url: null,
  },
];

const STUDIES = [
  { title: "Analista de Sistemas de Información", place: "UADER FCyT", years: "2017 – 2022", inProgress: false },
  { title: "Licenciatura en Sistemas de Información", place: "UADER FCyT", years: "2024 – 2025", inProgress: false, note: "Tesina pendiente" },
];

const KNOWLEDGE = [
  { name: "C#", projectIds: ["gestor", "sic"] },
  { name: "Flutter", projectIds: ["arrecife", "archery"] },
  { name: "Web", projectIds: ["bibliocode", "hanoi"] },
];

const COURSES = [
  { id: "iot-cisco", name: "Introduction to IoT", provider: "Cisco Networking Academy", cert: "certifications/Certificate_Introduction_to_IoT.avif" },
  { id: "ciberseguridad-cisco", name: "Introduction to Cybersecurity", provider: "Cisco Networking Academy", cert: "certifications/Certificate_Introduction_to_Cybersecurity.avif" },
  { id: "ia-ibm", name: "Artificial Intelligence Fundamentals", provider: "IBM", cert: "certifications/Certifiicate_Artificial_Intelligence_Fundamentals.avif" },
  { id: "java", name: "Introducción a Java SE", provider: "Platzi", cert: "certifications/diploma-java-basico.avif" },
  { id: "java-poo", name: "Java SE Orientado a Objetos", provider: "Platzi", cert: "certifications/diploma-java-oop.avif" },
  { id: "java-persistencia", name: "Java SE Persistencia de Datos", provider: "Platzi", cert: "certifications/diploma-java-persistencia.avif" },
  { id: "java-testing", name: "Curso Básico de Testing en Java", provider: "Platzi", cert: "certifications/diploma-testing-java.avif" },
  { id: "java-spring", name: "Curso de Java Spring", provider: "Platzi", cert: "certifications/diploma-java-spring.avif" },
  { id: "java-funcional", name: "Programación Funcional con Java SE", provider: "Platzi", cert: "certifications/diploma-java-funcional.avif" },
  { id: "cpp-practico", name: "Curso práctico de C++", provider: "Platzi", cert: "certifications/diploma-c-plus-plus-practico.avif" },
  { id: "cpp-poo", name: "Programación orientada a objetos con C++", provider: "Platzi", cert: "certifications/diploma-c-plus-plus-poo.avif" },
  { id: "cpp", name: "Curso de C++ básico", provider: "Platzi", cert: "certifications/diploma-c-plus-plus.avif" },
  { id: "poo", name: "Programación Orientada a Objetos", provider: "Platzi", cert: "certifications/diploma-oop.avif" },
  { id: "git", name: "Curso Profesional de Git y GitHub", provider: "Platzi", cert: "certifications/diploma-git-github.avif" },
  { id: "dart", name: "Curso de Dart desde Cero", provider: "Platzi", cert: "certifications/diploma-dart.avif" },
  { id: "flutter", name: "Curso de Flutter", provider: "Platzi", cert: "certifications/diploma-flutter.avif" },
  { id: "docker", name: "Curso de Docker", provider: "Platzi", cert: "certifications/diploma-docker.avif" },
  { id: "historias-usuario", name: "Historias de Usuario en Scrum", provider: "Platzi", cert: "certifications/diploma-historias-usuario-scrum.avif" },
  { id: "scrum", name: "Curso Profesional de Scrum", provider: "Platzi", cert: "certifications/diploma-scrum.avif" },
  { id: "backend", name: "Introducción al Desarrollo Backend", provider: "Platzi", cert: "certifications/diploma-introduccion-backend.avif" },
  { id: "devops", name: "Curso Profesional de DevOps", provider: "Platzi", cert: "certifications/diploma-devops.avif" },
  { id: "new-relic", name: "New Relic: Observabilidad, Monitoreo y Performance Web", provider: "Platzi", cert: "certifications/diploma-new-relic.avif" },
  { id: "ciberseguridad-microsoft", name: "Conceptos básicos de la ciberseguridad", provider: "Microsoft", cert: "certifications/certificado_Descripci%C3%B3n-de-los-conceptos-b%C3%A1sicos-de-la-ciberseguridad.avif" },
];

const TOOLS = [
  { name: "codi.link", url: "https://codi.link/", image: "img/tools/codi.link.png", description: "Editor web de HTML, CSS y JavaScript con resultado casi inmediato. Útil para probar una idea sin recargar la página.", author: "@midudev" },
  { name: "UI Colors", url: "https://uicolors.app/create", image: "img/tools/UI%20Colors.png", description: "Genera la paleta de un color en distintas tonalidades para armar interfaces con mejores colores.", author: "@erikdevries_nl" },
  { name: "Font Awesome", url: "https://fontawesome.com/", image: "img/tools/FontAwesome.png", description: "Librería con una gran cantidad de íconos. No todos son gratuitos.", author: "Font Awesome" },
  { name: "Tabler Icons", url: "https://tabler.io/icons", image: "img/tools/tabler_icons.png", description: "Íconos gratuitos y de código abierto.", author: "@codecalm" },
  { name: "Icons8", url: "https://iconos8.es/icons", image: "img/tools/iconos8.png", description: "Repositorio con una enorme cantidad de íconos gratuitos.", author: "Icons8" },
];
const TOOLS_INTRO = "Herramientas que uso en mis desarrollos. Ninguna fue creada por mí, pero me ayudan a optimizar, facilitar y agilizar mis proyectos.";

/* =====================================================================
   Utilidades
   ===================================================================== */
const DateUtils = {
  MONTHS: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],

  ageOn(birth, today) {
    let age = today.getFullYear() - birth.getFullYear();
    const beforeBirthday = today.getMonth() < birth.getMonth()
      || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
    return beforeBirthday ? age - 1 : age;
  },

  elapsed(from, today) {
    let months = (today.getFullYear() - from.getFullYear()) * 12 + (today.getMonth() - from.getMonth());
    if (today.getDate() < from.getDate()) months -= 1;
    return { years: Math.floor(months / 12), months: months % 12 };
  },

  elapsedText({ years, months }) {
    const y = years === 1 ? "1 año" : `${years} años`;
    if (months === 0) return y;
    return `${y} y ${months === 1 ? "1 mes" : `${months} meses`}`;
  },

  parseMonth(value) {
    const [year, month] = value.split("-").map(Number);
    return new Date(year, month - 1, 1);
  },

  formatMonth(value) {
    const date = this.parseMonth(value);
    return `${this.MONTHS[date.getMonth()]} ${date.getFullYear()}`;
  },

  /* Meses de un período contando el mes de inicio y el de fin (como LinkedIn) */
  monthsInclusive(start, end) {
    const a = this.parseMonth(start), b = this.parseMonth(end);
    return (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()) + 1;
  },

  /* Tiempo total de un trabajo: suma de sus períodos; los actuales cuentan hasta el mes en curso */
  jobMonths(job, today) {
    const current = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
    const periods = job.periods || [{ start: job.start, end: job.end }];
    return periods.reduce((total, p) => total + this.monthsInclusive(p.start, p.end || current), 0);
  },

  /* «X años Y meses», sin la parte que dé cero */
  durationText(months) {
    const years = Math.floor(months / 12), rest = months % 12;
    const parts = [];
    if (years) parts.push(years === 1 ? "1 año" : `${years} años`);
    if (rest) parts.push(rest === 1 ? "1 mes" : `${rest} meses`);
    return parts.join(" ") || "menos de 1 mes";
  },

  period(job) {
    return `${this.formatMonth(job.start)} – ${job.end ? this.formatMonth(job.end) : "actualidad"}`;
  },
};

const html = (strings, ...values) => strings.reduce((out, str, i) => out + str + (i < values.length ? [].concat(values[i]).join("") : ""), "");
const escapeText = (text) => String(text).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
const projectById = (id) => PROJECTS.find((project) => project.id === id);

/* Datos calculados una sola vez al cargar */
const TODAY = new Date();
const FACTS = {
  age: DateUtils.ageOn(PROFILE.birthDate, TODAY),
  sinceGraduation: DateUtils.elapsed(PROFILE.graduationDate, TODAY),
  courseCount: COURSES.length,
  projectCount: PROJECTS.length,
};

/* Datos que cambian con la fecha: se marcan para poder recalcularlos al abrir la página */
function fact(key, pad = 0) {
  const values = {
    age: FACTS.age,
    yearsSinceGraduation: FACTS.sinceGraduation.years,
    sinceGraduationText: DateUtils.elapsedText(FACTS.sinceGraduation),
    year: TODAY.getFullYear(),
  };
  const value = pad ? String(values[key]).padStart(pad, "0") : values[key];
  return `<span data-fact="${key}"${pad ? ` data-pad="${pad}"` : ""}>${value}</span>`;
}

function aboutParagraphs(highlightTag, highlightClass) {
  const open = `<${highlightTag}${highlightClass ? ` class="${highlightClass}"` : ""}>`;
  const close = `</${highlightTag}>`;
  return [
    `Tengo ${open}${fact("age")} años${close} y soy Analista en Sistemas de Información desde hace ${open}${fact("sinceGraduationText")}${close}. Me dedico al desarrollo de software, y lo que más me gusta es programar: es habitual que esté escribiendo código. En 2025 terminé la Licenciatura en Sistemas de Información; me queda pendiente la tesina.`,
    `Desde que me recibí aprendí distintas tecnologías, algunas por curiosidad y otras porque un trabajo lo pedía: desarrollo móvil, aplicaciones web (front-end y back-end), APIs, aplicaciones de escritorio y un poco de desarrollo de juegos.`,
  ];
}

function projectMedia(project, block) {
  const alt = `Captura de ${escapeText(project.name)}`;
  if (project.portrait) {
    return html`<figure class="${block}__media ${block}__media--portrait">
      <img class="${block}__icon" src="${project.icon}" alt="" width="56" height="56" loading="lazy">
      <img class="${block}__shot" src="${project.image}" alt="${alt}" loading="lazy">
    </figure>`;
  }
  return html`<figure class="${block}__media"><img class="${block}__shot" src="${project.image}" alt="${alt}" loading="lazy"></figure>`;
}

function filterButtons(block, targetId, extraClass = "", buttonExtraClass = "") {
  return html`<div class="${block} ${extraClass}" role="group" aria-label="Filtrar proyectos por tipo" data-filter-group="${targetId}">
    ${PROJECT_CATEGORIES.map((cat, i) => html`<button class="${block}__button ${buttonExtraClass}" data-filter="${cat.id}" aria-pressed="${i === 0}">${cat.label}</button>`)}
  </div>`;
}
