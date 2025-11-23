// --- STATE ---
let currentLang = "id";
let currentFilter = "all";
let visibleCount = 6;
let currentImageIndex = 0;
let currentProjectId = null;
let currentModalIndex = 0;

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  }

  renderProjects();
  updateTexts();
  lucide.createIcons();
  initScrollSpy();
  initScrollReveal();

  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 20) {
      nav.classList.add("border-slate-200", "dark:border-slate-800");
      nav.classList.remove("border-transparent");
    } else {
      nav.classList.remove("border-slate-200", "dark:border-slate-800");
      nav.classList.add("border-transparent");
    }
  });
});

// --- ANIMATION LOGIC ---
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal-up");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  reveals.forEach((el) => observer.observe(el));
}

// --- MODAL ZOOM LOGIC ---
function openImageModal(index) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const counter = document.getElementById("modal-counter");
  const project = PROJECTS.find((p) => p.id === currentProjectId);

  if (!project) return;

  currentModalIndex = index;

  if (modal && modalImg) {
    modalImg.src = project.images[currentModalIndex];
    if (counter)
      counter.innerText = `${currentModalIndex + 1} / ${project.images.length}`;

    modal.classList.remove("hidden");

    requestAnimationFrame(() => {
      modal.classList.remove("opacity-0");
      modalImg.classList.remove("scale-95");
      modalImg.classList.add("scale-100");
    });
  }
}

function changeModalSlide(step) {
  const project = PROJECTS.find((p) => p.id === currentProjectId);
  if (!project) return;

  const modalImg = document.getElementById("modal-img");
  const counter = document.getElementById("modal-counter");

  modalImg.style.opacity = 0;

  setTimeout(() => {
    currentModalIndex += step;
    if (currentModalIndex >= project.images.length) currentModalIndex = 0;
    if (currentModalIndex < 0) currentModalIndex = project.images.length - 1;

    modalImg.src = project.images[currentModalIndex];
    if (counter)
      counter.innerText = `${currentModalIndex + 1} / ${project.images.length}`;

    modalImg.style.opacity = 1;
  }, 200);
}

function closeImageModal() {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  if (modal && modalImg) {
    modal.classList.add("opacity-0");
    modalImg.classList.remove("scale-100");
    modalImg.classList.add("scale-95");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  }
}

// --- FUNCTIONS LAINNYA ---

function initScrollSpy() {
  const sections = document.querySelectorAll(".section-spy");
  const navLinks = document.querySelectorAll(".nav-link");

  const updateActiveLink = () => {
    const detailView = document.getElementById("detail-view");
    const isDetailViewActive = !detailView.classList.contains("hidden-force");

    if (isDetailViewActive) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("data-section") === "projects") {
          link.classList.add("active");
        }
      });
      return;
    }

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("data-section") === current) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("translate-x-full");
  if (!menu.classList.contains("translate-x-full")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

function handleMobileNav(section) {
  setView("home", section);
  toggleMobileMenu();
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  localStorage.theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

function toggleLang() {
  currentLang = currentLang === "id" ? "en" : "id";
  document.getElementById("lang-btn-desktop").innerText =
    currentLang === "id" ? "ID" : "EN";
  document.getElementById("lang-btn-mobile").innerText =
    currentLang === "id" ? "ID" : "EN";

  updateTexts();
  const container = document.getElementById("projects-grid");
  container.innerHTML = "";
  visibleCount = 6;
  renderProjects();

  if (currentProjectId) openDetail(currentProjectId);
}

function updateTexts() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const keys = key.split(".");
    let val = TRANSLATIONS[currentLang];
    keys.forEach((k) => (val = val ? val[k] : ""));
    if (val && el.tagName !== "INPUT" && el.tagName !== "TEXTAREA") {
      el.innerText = val;
    }
  });
}

function filterProjects(category) {
  currentFilter = category;
  visibleCount = 6;
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    if (btn.dataset.filter === category) {
      btn.classList.add(
        "bg-slate-900",
        "text-white",
        "border-transparent",
        "dark:bg-white",
        "dark:text-slate-900"
      );
    } else {
      btn.classList.remove(
        "bg-slate-900",
        "text-white",
        "border-transparent",
        "dark:bg-white",
        "dark:text-slate-900"
      );
    }
  });
  document.getElementById("projects-grid").innerHTML = "";
  renderProjects();
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  const filtered = PROJECTS.filter(
    (p) => currentFilter === "all" || p.categoryGroup === currentFilter
  );

  const loadMoreBtn = document.getElementById("load-more-btn");
  if (loadMoreBtn) {
    loadMoreBtn.classList.toggle("hidden", visibleCount >= filtered.length);
  }

  const currentItemsCount = container.children.length;
  const newItems = filtered.slice(currentItemsCount, visibleCount);

  let html = "";
  newItems.forEach((project, idx) => {
    const content = project.content[currentLang];
    const delay = (idx % 3) * 100;

    html += `
        <div onclick="openDetail(${project.id})" 
             class="group cursor-pointer animate-fade-in-up flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 transform hover:-translate-y-1"
             style="animation-delay: ${delay}ms; animation-fill-mode: both;">
             
            <div class="relative aspect-[16/9] overflow-hidden">
                <img src="${project.images[0]}" alt="${
      content.title
    }" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div class="absolute top-3 left-3">
                    <span class="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-black/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-sm">
                        ${content.category}
                    </span>
                </div>
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-bold mb-2 group-hover:text-accent transition-colors leading-tight">${
                  content.title
                }</h3>
                <p class="text-slate-500 dark:text-slate-400 line-clamp-2 mb-3 text-xs leading-relaxed">${
                  content.shortDesc
                }</p>
                <div class="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div class="flex flex-wrap gap-1.5">
                        ${project.tools
                          .slice(0, 3)
                          .map(
                            (t) => `
                            <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wide">${t}</span>
                        `
                          )
                          .join("")}
                    </div>
                    <div class="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-accent group-hover:text-white transition-colors">
                        <i data-lucide="arrow-up-right" class="w-3 h-3"></i>
                    </div>
                </div>
            </div>
        </div>`;
  });

  if (html) {
    container.insertAdjacentHTML("beforeend", html);
    lucide.createIcons();
  } else if (currentItemsCount === 0) {
    container.innerHTML = `<div class="col-span-3 text-center text-slate-400 py-12">No projects found in this category.</div>`;
  }
}

function loadMoreProjects() {
  visibleCount += 3;
  renderProjects();
}

function setView(view, targetSection = null) {
  const home = document.getElementById("home-view");
  const detail = document.getElementById("detail-view");

  if (view === "home") {
    detail.classList.add("hidden-force");
    home.classList.remove("hidden-force");
    currentProjectId = null;

    setTimeout(() => {
      if (targetSection) {
        const section = document.getElementById(targetSection);
        if (section) {
          const yOffset = -100;
          const y =
            section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      } else {
        window.scrollTo(0, 0);
      }
      window.dispatchEvent(new Event("scroll"));
    }, 50);
  } else {
    detail.classList.remove("hidden-force");
    home.classList.add("hidden-force");
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
    }, 50);
  }
}

function changeSlide(step) {
  const project = PROJECTS.find((p) => p.id === currentProjectId);
  if (!project) return;

  const img = document.getElementById("slider-img");
  const blurImg = document.getElementById("bg-blur-img");

  img.style.opacity = 0;
  if (blurImg) blurImg.style.opacity = 0;

  setTimeout(() => {
    currentImageIndex += step;
    if (currentImageIndex >= project.images.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = project.images.length - 1;

    img.src = project.images[currentImageIndex];
    if (blurImg) blurImg.src = project.images[currentImageIndex];

    // REBIND ONCLICK (PENTING)
    img.parentElement.onclick = function () {
      openImageModal(currentImageIndex);
    };

    project.images.forEach((_, idx) => {
      const dot = document.getElementById(`dot-${idx}`);
      if (dot) {
        if (idx === currentImageIndex) {
          dot.classList.remove("bg-white/60", "w-2");
          dot.classList.add("bg-accent", "w-6");
        } else {
          dot.classList.add("bg-white/60", "w-2");
          dot.classList.remove("bg-accent", "w-6");
        }
      }
    });

    img.style.opacity = 1;
    if (blurImg) blurImg.style.removeProperty("opacity");
  }, 300);
}

function scrollRelated(direction) {
  const container = document.getElementById("related-slider");
  if (!container) return;
  const scrollAmount =
    container.clientWidth > 600 ? 350 : container.clientWidth - 40;
  if (direction === 1)
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  else container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
}

// --- OPEN DETAIL FUNCTION (REVISED LAYOUT) ---
function openDetail(id) {
  currentProjectId = id;
  currentImageIndex = 0;

  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return;

  const content = project.content[currentLang];
  const t = TRANSLATIONS[currentLang].projects;
  const ctaT = TRANSLATIONS[currentLang].cta;
  const linkHtml = project.link
    ? `<a href="${project.link}" target="_blank" class="px-6 py-3 rounded-full font-bold text-white bg-accent hover:brightness-110 transition-all inline-flex items-center gap-2 text-sm">${t.visit} <i data-lucide="external-link" class="w-4 h-4"></i></a>`
    : `<div class="px-6 py-3 rounded-full font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 text-sm inline-flex items-center gap-2 cursor-not-allowed">${t.private} <i data-lucide="lock" class="w-4 h-4"></i></div>`;

  // REVISI: pointer-events-auto pada button, pointer-events-none pada container kontrol
  const sliderControls =
    project.images.length > 1
      ? `<div class="absolute inset-0 z-20 pointer-events-none flex items-center justify-between px-4">
             <button onclick="changeSlide(-1); event.stopPropagation();" class="pointer-events-auto p-3 rounded-full bg-accent/80 text-white shadow-lg transition-all hover:bg-pink-600 flex items-center justify-center backdrop-blur-sm">
                 <i data-lucide="chevron-left" class="w-6 h-6"></i>
             </button>
             <button onclick="changeSlide(1); event.stopPropagation();" class="pointer-events-auto p-3 rounded-full bg-accent/80 text-white shadow-lg transition-all hover:bg-pink-600 flex items-center justify-center backdrop-blur-sm">
                 <i data-lucide="chevron-right" class="w-6 h-6"></i>
             </button>
         </div>
         <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 pointer-events-none">
            ${project.images
              .map(
                (_, idx) =>
                  `<div id="dot-${idx}" class="w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === 0 ? "bg-accent w-6" : "bg-white/60 shadow"
                  }"></div>`
              )
              .join("")}
         </div>`
      : "";

  // --- RELATED PROJECTS ---
  const relatedProjects = PROJECTS.filter((p) => p.id !== id).slice(0, 5);
  let relatedHtml = "";
  relatedProjects.forEach((rel, idx) => {
    const relContent = rel.content[currentLang];
    const delay = idx * 100;
    relatedHtml += `<div onclick="openDetail(${rel.id})" class="min-w-[90%] md:min-w-[calc(33.333%-16px)] snap-center cursor-pointer group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-accent transition-all shadow-sm hover:shadow-lg animate-fade-in-up" style="animation-delay: ${delay}ms"><div class="aspect-[4/3] bg-slate-100 dark:bg-slate-800 relative overflow-hidden"><img src="${rel.images[0]}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"><div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div></div><div class="p-5"><div class="text-xs font-bold text-accent uppercase tracking-wider mb-1">${relContent.category}</div><h4 class="font-bold text-lg group-hover:text-accent transition-colors line-clamp-1">${relContent.title}</h4></div></div>`;
  });

  const ctaHtml = `<div class="mt-20 p-10 rounded-[2.5rem] bg-accent text-white text-center relative overflow-hidden shadow-2xl"><div class="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div><div class="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div><div class="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl"></div><div class="relative z-10 flex flex-col items-center gap-6"><div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner"><i data-lucide="rocket" class="w-8 h-8 text-white"></i></div><h3 class="text-3xl md:text-4xl font-bold font-heading">${ctaT.title}</h3><p class="text-white/90 max-w-xl mx-auto text-lg leading-relaxed">${ctaT.desc}</p><button onclick="setView('home', 'contact')" class="px-8 py-4 bg-white text-accent font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2 mt-2"><i data-lucide="mail" class="w-5 h-5"></i> ${ctaT.btn}</button></div></div>`;

  const html = `
      <div class="animate-fade-in-up">
          <div class="mb-10">
              <span class="text-accent font-bold text-sm tracking-wide uppercase mb-2 block">${
                content.category
              }</span>
              <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">${
                content.title
              }</h1>
              <div class="border-l-4 border-accent pl-6 py-1 mb-8"><p class="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium mb-6">${
                content.fullDesc
              }</p><button onclick="setView('home', 'projects')" class="group flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-accent dark:hover:border-accent text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-all text-sm font-bold shadow-sm"><i data-lucide="arrow-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform"></i><span>${
    currentLang === "id" ? "Kembali ke Beranda" : "Back to Home"
  }</span></button></div>
              <div class="flex flex-wrap gap-6 items-center justify-between border-y border-slate-200 dark:border-slate-800 py-6"><div><div class="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">${
                t.tech
              }</div><div class="flex flex-wrap gap-2">${project.tools
    .map(
      (t) =>
        `<span class="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium">${t}</span>`
    )
    .join("")}</div></div>${linkHtml}</div>
          </div>
          
          <div class="relative w-full aspect-[4/3] md:aspect-video overflow-hidden rounded-2xl group shadow-2xl mb-12 bg-slate-100 dark:bg-slate-900 select-none">
              <div class="absolute inset-0 z-0">
                  <img id="bg-blur-img" src="${
                    project.images[0]
                  }" class="w-full h-full object-cover blur-2xl opacity-50 dark:opacity-30 scale-110 transition-all duration-500">
              </div>

              <div class="absolute inset-0 z-10 flex items-center justify-center p-0 md:p-8 cursor-zoom-in transition-transform active:scale-[0.98]" onclick="openImageModal(currentImageIndex)">
                    <img id="slider-img" src="${
                      project.images[0]
                    }" class="w-full h-full object-contain shadow-lg rounded-lg transition-opacity duration-300">
              </div>

              ${sliderControls}
          </div>

          <div class="grid md:grid-cols-3 gap-12 mb-20"><div class="md:col-span-2 space-y-8"><div class="grid gap-6"><div class="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"><h4 class="font-bold mb-2 flex items-center gap-2 text-slate-900 dark:text-white"><i data-lucide="alert-circle" class="w-5 h-5 text-orange-500"></i> ${
            t.challenge
          }</h4><p class="text-slate-600 dark:text-slate-400 leading-relaxed">${
    content.challenge
  }</p></div><div class="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"><h4 class="font-bold mb-2 flex items-center gap-2 text-slate-900 dark:text-white"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-500"></i> ${
    t.solution
  }</h4><p class="text-slate-600 dark:text-slate-400 leading-relaxed">${
    content.solution
  }</p></div></div></div><div><div class="sticky top-28 space-y-6"><div class="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm"><h4 class="font-bold mb-4 text-sm uppercase text-slate-500">Info Proyek</h4><ul class="space-y-4 text-sm"><li class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-3"><span class="text-slate-500">Tipe</span><span class="font-medium">${
    project.type === "internal" ? "Internal" : "Public"
  }</span></li><li class="flex justify-between"><span class="text-slate-500">Kategori</span><span class="font-medium">${
    content.category
  }</span></li></ul></div></div></div></div>
          <div class="border-t border-slate-200 dark:border-slate-800 pt-12 mt-12"><div class="flex items-center justify-between mb-8"><h3 class="text-2xl font-bold">${
            t.related
          }</h3><div class="flex gap-2"><button onclick="scrollRelated(-1)" class="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><i data-lucide="chevron-left" class="w-5 h-5"></i></button><button onclick="scrollRelated(1)" class="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><i data-lucide="chevron-right" class="w-5 h-5"></i></button></div></div><div class="relative -mx-4 px-4"><div id="related-slider" class="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory hide-scrollbar scroll-smooth">${relatedHtml}</div></div></div>
          ${ctaHtml}
      </div>`;

  document.getElementById("detail-content").innerHTML = html;
  setView("detail");
  lucide.createIcons();
  initScrollReveal();
}

// Initialize filters on load
filterProjects("all");
