(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const video = document.querySelector(".hologram-video-layer video");

  if (video) {
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    if (reduceMotion) {
      video.removeAttribute("autoplay");
      video.pause();
    } else {
      const tryPlay = () => {
        const p = video.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => {});
        }
      };

      if (video.readyState >= 2) {
        tryPlay();
      } else {
        video.addEventListener("loadeddata", tryPlay, { once: true });
      }
    }
  }

  const meta = document.querySelector("[data-fade-meta]");
  const mobileHeroMeta = document.querySelector("body:not(.sub-page) .right-vertical");
  const worksWindow = document.getElementById("works-window");
  const worksOverlay = document.getElementById("works-overlay");
  const worksIntro = document.querySelector(".works-intro");
  const worksPlaceholder = document.querySelector(".works-placeholder");
  const glassStage = document.getElementById("glass-stage");
  const glassColumn = document.querySelector(".liquid-glass-column");
  const glassScroller = document.querySelector(".liquid-glass-scroll");
  const footerStage = document.querySelector(".footer-card-stage");
  const glassFooter = document.querySelector(".glass-footer");
  const rightNote = document.querySelector(".right-note");
  const heroPoster = document.querySelector(".hero-poster");
  const topbar = document.querySelector(".topbar");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function easeExpoOut(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function buildClip(wPx, hPx, r, vpW, vpH) {
    const hInset = Math.max(0, (vpW - wPx) / 2);
    const vInset = Math.max(0, (vpH - hPx) / 2);
    return `inset(${vInset}px ${hInset}px ${vInset}px ${hInset}px round ${r}px)`;
  }

  function initTitleSweeps() {
    const titles = document.querySelectorAll(".holo-title-sweep");
    if (!titles.length || reduceMotion) return;

    if (!("IntersectionObserver" in window)) {
      titles.forEach((title) => title.classList.add("is-sweeping"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-sweeping");
        observer.unobserve(entry.target);
      });
    }, {
      root: null,
      rootMargin: "0px 0px -18% 0px",
      threshold: 0.35,
    });

    titles.forEach((title) => observer.observe(title));
  }

  function initSkillTitleLines() {
    const titles = document.querySelectorAll(".skill-title-line");
    if (!titles.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      titles.forEach((title) => title.classList.add("is-lined"));
      return;
    }

    const trigger = document.querySelector("#skill .service-text-content") || document.getElementById("skill");
    if (!trigger) {
      titles.forEach((title) => title.classList.add("is-lined"));
      return;
    }

    let hasPlayed = false;
    const drawInOrder = () => {
      if (hasPlayed) return;
      hasPlayed = true;
      titles.forEach((title, index) => {
        window.setTimeout(() => {
          title.classList.add("is-lined");
        }, index * 920);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        drawInOrder();
        observer.unobserve(entry.target);
      });
    }, {
      root: null,
      rootMargin: "0px 0px -18% 0px",
      threshold: 0.18,
    });

    observer.observe(trigger);
  }

  function initMobileMenu() {
    if (!topbar || !menuToggle || !mobileMenu) return;

    const setOpen = (isOpen) => {
      topbar.classList.toggle("is-menu-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
    };

    menuToggle.addEventListener("click", () => {
      setOpen(!topbar.classList.contains("is-menu-open"));
    });

    mobileMenu.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("click", (event) => {
      if (!topbar.classList.contains("is-menu-open")) return;
      if (topbar.contains(event.target)) return;
      setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) setOpen(false);
    });
  }

  function initSubPageHeaderLock() {
    if (!document.body.classList.contains("sub-page") || !topbar || !menuToggle) return;

    const mq = window.matchMedia("(max-width: 1024px)");
    const logo = topbar.querySelector(".logo");
    let frame = 0;

    const reset = () => {
      topbar.style.position = "";
      topbar.style.top = "";
      topbar.style.left = "";
      topbar.style.right = "";
      topbar.style.width = "";
      topbar.style.height = "";
      topbar.style.zIndex = "";
      topbar.style.transform = "";
      topbar.style.marginBottom = "";
      topbar.style.display = "";
      topbar.style.alignItems = "";
      topbar.style.justifyContent = "";
      topbar.style.pointerEvents = "";
      topbar.style.overflow = "";
      topbar.style.isolation = "";
      topbar.style.willChange = "";
      menuToggle.style.position = "";
      menuToggle.style.top = "";
      menuToggle.style.left = "";
      menuToggle.style.right = "";
      menuToggle.style.margin = "";
      menuToggle.style.zIndex = "";
      menuToggle.style.transform = "";
      if (logo) logo.style.position = "";
    };

    const lock = () => {
      frame = 0;

      if (!mq.matches) {
        reset();
        return;
      }

      const viewportWidth = Math.round(
        (window.visualViewport && window.visualViewport.width) ||
        document.documentElement.clientWidth ||
        window.innerWidth ||
        430
      );
      const viewportPageTop = Math.round(
        (window.visualViewport && window.visualViewport.pageTop) ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        0
      );
      const viewportOffsetLeft = Math.round((window.visualViewport && window.visualViewport.offsetLeft) || 0);
      const phoneWidth = Math.min(viewportWidth, 430);
      const edge = 18;
      const headerWidth = Math.max(0, phoneWidth - edge * 2);
      topbar.style.position = "absolute";
      topbar.style.top = `${viewportPageTop + 24}px`;
      topbar.style.left = `${viewportOffsetLeft + edge}px`;
      topbar.style.right = "auto";
      topbar.style.width = `${headerWidth}px`;
      topbar.style.height = "42px";
      topbar.style.zIndex = "2147483000";
      topbar.style.transform = "translate3d(0, 0, 0)";
      topbar.style.marginBottom = "-42px";
      topbar.style.display = "flex";
      topbar.style.alignItems = "flex-start";
      topbar.style.justifyContent = "space-between";
      topbar.style.pointerEvents = "auto";
      topbar.style.overflow = "visible";
      topbar.style.isolation = "isolate";
      topbar.style.willChange = "top, left";

      if (logo) logo.style.position = "static";

      menuToggle.style.position = "relative";
      menuToggle.style.top = "4px";
      menuToggle.style.left = "auto";
      menuToggle.style.right = "0";
      menuToggle.style.margin = "0";
      menuToggle.style.zIndex = "1000";
      menuToggle.style.transform = "none";
    };

    const requestLock = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(lock);
    };

    lock();
    window.addEventListener("load", requestLock, { once: true });
    window.addEventListener("pageshow", requestLock);
    window.setTimeout(requestLock, 80);
    window.setTimeout(requestLock, 260);
    window.setTimeout(requestLock, 700);
    window.setInterval(() => {
      if (mq.matches) lock();
    }, 80);
    window.addEventListener("scroll", requestLock, { passive: true });
    document.addEventListener("scroll", requestLock, { passive: true, capture: true });
    window.addEventListener("resize", requestLock);
    window.addEventListener("orientationchange", requestLock);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", requestLock);
      window.visualViewport.addEventListener("scroll", requestLock, { passive: true });
    }
  }

  function updateHeroMeta() {
    const heroHeight = window.innerHeight || 1;
    const progress = clamp(window.scrollY / (heroHeight * 0.72), 0, 1);
    const opacity = String(1 - easeExpoOut(progress));

    if (meta) meta.style.opacity = opacity;

    if (mobileHeroMeta) {
      mobileHeroMeta.style.opacity = window.innerWidth <= 900 ? opacity : "";
    }
  }

  function updateGlassColumn() {
    if (!glassColumn || !glassStage || !glassScroller) return;

    const vh = window.innerHeight || 1;
    const stickyTop = parseFloat(window.getComputedStyle(glassColumn).top) || 0;
    const columnHeight = glassColumn.clientHeight || vh;
    const scrollRange = Math.max(0, glassScroller.scrollHeight - columnHeight);
    const stageHeight = Math.ceil(columnHeight + scrollRange + stickyTop + vh * 0.18);
    glassStage.style.minHeight = `${stageHeight}px`;

    const stageRect = glassStage.getBoundingClientRect();
    const internalScroll = clamp(stickyTop - stageRect.top, 0, scrollRange);
    glassColumn.classList.toggle("is-footer-visible", internalScroll > scrollRange - columnHeight * 0.18);

    if (reduceMotion) {
      glassColumn.style.setProperty("--glass-enter-progress", "1");
      glassColumn.style.setProperty("--glass-light-progress", "0");
      glassColumn.style.setProperty("--glass-shift", "0px");
      glassColumn.style.setProperty("--glass-scale", "1");
      glassColumn.style.setProperty("--glass-column-opacity", "1");
      glassColumn.style.setProperty("--glass-glow-size", "60px");
      glassColumn.style.setProperty("--glass-brightness", "1.02");
      glassColumn.style.setProperty("--glass-light-alpha", "0.18");
      glassColumn.style.setProperty("--glass-before-opacity", "0.34");
      glassColumn.style.setProperty("--glass-after-opacity", "0.18");
      glassColumn.style.setProperty("--glass-sheen-x", "-4%");
      glassScroller.style.transform = `translate3d(0, ${(-internalScroll).toFixed(1)}px, 0)`;
      return;
    }

    const enterProgress = clamp((vh * 0.96 - stageRect.top) / (vh * 0.44), 0, 1);
    const lightProgress = clamp((vh * 0.55 - stageRect.top) / (vh * 0.7), 0, 1);

    const enter = easeExpoOut(enterProgress);
    const light = easeExpoOut(lightProgress);

    glassColumn.style.setProperty("--glass-enter-progress", enter.toFixed(3));
    glassColumn.style.setProperty("--glass-light-progress", light.toFixed(3));
    glassColumn.style.setProperty("--glass-shift", `${((1 - enter) * 72).toFixed(1)}px`);
    glassColumn.style.setProperty("--glass-scale", (0.985 + enter * 0.015).toFixed(4));
    glassColumn.style.setProperty("--glass-column-opacity", (0.18 + enter * 0.82).toFixed(3));
    glassColumn.style.setProperty("--glass-glow-size", `${(60 + light * 70).toFixed(1)}px`);
    glassColumn.style.setProperty("--glass-brightness", (1.02 + light * 0.08).toFixed(3));
    glassColumn.style.setProperty("--glass-light-alpha", (0.18 + light * 0.24).toFixed(3));
    glassColumn.style.setProperty("--glass-before-opacity", (0.18 + light * 0.22).toFixed(3));
    glassColumn.style.setProperty("--glass-after-opacity", (0.1 + enter * 0.16).toFixed(3));
    glassColumn.style.setProperty("--glass-sheen-x", `${(-22 + enter * 18).toFixed(1)}%`);
    glassScroller.style.transform = `translate3d(0, ${(-internalScroll).toFixed(1)}px, 0)`;
  }

  function updateFooterCard() {
    if (!glassFooter || !footerStage) {
      document.body.classList.remove("is-footer-entering");
      return;
    }

    if (reduceMotion) {
      glassFooter.style.setProperty("--footer-card-opacity", "1");
      glassFooter.style.setProperty("--footer-card-y", "0px");
      glassFooter.style.setProperty("--footer-card-scale", "1");
      document.body.classList.toggle("is-footer-entering", footerStage.getBoundingClientRect().top < window.innerHeight);
      return;
    }

    const vh = window.innerHeight || 1;
    const rect = footerStage.getBoundingClientRect();
    const progress = clamp((vh * 0.86 - rect.top) / (vh * 0.34), 0, 1);
    const footerEase = easeExpoOut(progress);
    document.body.classList.toggle("is-footer-entering", progress > 0.02);
    glassFooter.style.setProperty("--footer-card-opacity", footerEase.toFixed(3));
    glassFooter.style.setProperty("--footer-card-y", `${((1 - footerEase) * 84).toFixed(1)}px`);
    glassFooter.style.setProperty("--footer-card-scale", (0.97 + footerEase * 0.03).toFixed(4));
  }

  const worksSteps = [
    { w: 420, h: 280, r: 12 },
    { w: 660, h: 420, r: 8 },
    { w: 940, h: 600, r: 4 },
    { w: 9999, h: 9999, r: 0 },
  ];
  const worksPhase = [0.05, 0.22, 0.22, 0.22, 0.14, 0.15];

  function buildCumulativePhase(phase) {
    return phase.reduce((acc, value, index) => {
      acc.push((acc[index - 1] || 0) + value);
      return acc;
    }, []);
  }

  const worksCum = buildCumulativePhase(worksPhase);

  function lerpClip(fromStep, toStep, t, vpW, vpH) {
    const fw = Math.min(fromStep.w, vpW);
    const fh = Math.min(fromStep.h, vpH);
    const tw = Math.min(toStep.w, vpW);
    const th = Math.min(toStep.h, vpH);
    return buildClip(
      lerp(fw, tw, t),
      lerp(fh, th, t),
      lerp(fromStep.r, toStep.r, t),
      vpW,
      vpH,
    );
  }

  function setWorksFrame(wPx, hPx, r, vpW, vpH) {
    if (vpW <= 900) {
      worksWindow.style.clipPath = buildClip(wPx, hPx, r, vpW, vpH);
      return;
    }

    const scaleX = clamp(wPx / vpW, 0.001, 1);
    const scaleY = clamp(hPx / vpH, 0.001, 1);
    worksWindow.style.clipPath = "";
    worksWindow.style.setProperty("--works-scale-x", scaleX.toFixed(4));
    worksWindow.style.setProperty("--works-scale-y", scaleY.toFixed(4));
    worksWindow.style.setProperty("--works-radius", `${Math.max(0, r).toFixed(1)}px`);
  }

  function setWorksFrameStep(fromStep, toStep, t, vpW, vpH) {
    const fw = Math.min(fromStep.w, vpW);
    const fh = Math.min(fromStep.h, vpH);
    const tw = Math.min(toStep.w, vpW);
    const th = Math.min(toStep.h, vpH);
    setWorksFrame(
      lerp(fw, tw, t),
      lerp(fh, th, t),
      lerp(fromStep.r, toStep.r, t),
      vpW,
      vpH,
    );
  }

  let worksActive = false;

  function updateWorksWindow() {
    if (!worksWindow || !worksOverlay || !worksIntro || !worksPlaceholder) return;

    if (reduceMotion) {
      worksWindow.style.display = "none";
      worksIntro.style.opacity = "1";
      return;
    }

    const vpW = window.innerWidth;
    const vpH = window.innerHeight;
    const steps = worksSteps;
    const phase = worksPhase;
    const cum = worksCum;
    const rect = worksPlaceholder.getBoundingClientRect();
    const totalH = worksPlaceholder.offsetHeight || 1;
    const scrolled = -rect.top;

    if (scrolled < 0 || scrolled > totalH) {
      if (worksActive) {
        worksWindow.style.display = "none";
        worksWindow.style.pointerEvents = "none";
        worksOverlay.style.opacity = "0";
        worksActive = false;
      }
      if (scrolled < 0) worksIntro.style.opacity = "1";
      return;
    }

    if (!worksActive) {
      worksWindow.style.display = "block";
      worksActive = true;
    }

    const progress = clamp(scrolled / totalH, 0, 1);

    if (progress < cum[0]) {
      worksWindow.classList.add("is-scaling");
      const t = progress / phase[0];
      worksIntro.style.opacity = String(1 - easeExpoOut(t));
      setWorksFrame(
        Math.min(steps[0].w, vpW),
        Math.min(steps[0].h, vpH),
        steps[0].r,
        vpW,
        vpH,
      );
      worksOverlay.style.opacity = "0";
      worksWindow.style.pointerEvents = "none";
    } else if (progress < cum[1]) {
      worksWindow.classList.add("is-scaling");
      const t = easeExpoOut((progress - cum[0]) / phase[1]);
      worksIntro.style.opacity = "0";
      setWorksFrameStep(steps[0], steps[1], t, vpW, vpH);
      worksOverlay.style.opacity = "0";
      worksWindow.style.pointerEvents = "none";
    } else if (progress < cum[2]) {
      worksWindow.classList.add("is-scaling");
      const t = easeExpoOut((progress - cum[1]) / phase[2]);
      setWorksFrameStep(steps[1], steps[2], t, vpW, vpH);
      worksOverlay.style.opacity = "0";
      worksWindow.style.pointerEvents = "none";
    } else if (progress < cum[3]) {
      worksWindow.classList.add("is-scaling");
      const t = easeExpoOut((progress - cum[2]) / phase[3]);
      setWorksFrameStep(steps[2], steps[3], t, vpW, vpH);
      worksOverlay.style.opacity = "0";
      worksWindow.style.pointerEvents = t > 0.95 ? "auto" : "none";
    } else if (progress < cum[4]) {
      worksWindow.classList.remove("is-scaling");
      const t = easeExpoOut((progress - cum[3]) / phase[4]);
      setWorksFrame(vpW, vpH, 0, vpW, vpH);
      worksOverlay.style.opacity = String(t);
      worksWindow.style.pointerEvents = "auto";
    } else {
      worksWindow.classList.remove("is-scaling");
      setWorksFrame(vpW, vpH, 0, vpW, vpH);
      worksOverlay.style.opacity = "1";
      worksWindow.style.pointerEvents = "auto";
    }
  }

  let ticking = false;

  function update() {
    updateHeroMeta();
    updateGlassColumn();
    updateFooterCard();
    updateWorksWindow();
    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  function scrollToTopHash(hash, behavior = "smooth") {
    if (!hash) return false;
    const targetId = hash.replace(/^#/, "");
    return scrollToTopTarget(targetId, behavior);
  }

  function scrollToTopTarget(targetId, behavior = "smooth") {
    if (!targetId) return false;

    if (targetId === "fv") {
      window.scrollTo({ top: 0, behavior });
      requestUpdate();
      return true;
    }

    const target = document.getElementById(targetId);
    if (!target) return false;

    if (glassStage && glassColumn && glassScroller && glassScroller.contains(target)) {
      updateGlassColumn();
      const stickyTop = parseFloat(window.getComputedStyle(glassColumn).top) || 0;
      const stageTop = window.scrollY + glassStage.getBoundingClientRect().top;
      const sectionAnchor = target.classList.contains("glass-section")
        ? target.querySelector(".section-header") || target
        : target;
      const anchorOffset = sectionAnchor === target ? 0 : sectionAnchor.offsetTop;
      const targetY = Math.max(
        0,
        targetId === "contact"
          ? stageTop - stickyTop + target.offsetTop - 96
          : stageTop - stickyTop + target.offsetTop + anchorOffset - 56,
      );

      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      if (behavior === "auto") root.style.scrollBehavior = "auto";
      window.scrollTo({ top: targetY, behavior });
      if (behavior === "auto") requestAnimationFrame(() => { root.style.scrollBehavior = previousScrollBehavior; });
      window.setTimeout(requestUpdate, behavior === "smooth" ? 420 : 0);
      return true;
    }

    target.scrollIntoView({ behavior, block: "start" });
    window.setTimeout(requestUpdate, behavior === "smooth" ? 420 : 0);
    return true;
  }

  function initTopHashNavigation() {
    document.addEventListener("click", (event) => {
      const link = event.target.closest('a[href*="#"]');
      if (!link) return;

      const url = new URL(link.getAttribute("href"), window.location.href);
      const currentUrl = new URL(window.location.href);
      if (url.origin !== currentUrl.origin || url.pathname !== currentUrl.pathname || !url.hash) return;

      event.preventDefault();
      window.history.pushState(null, "", url.hash);
      scrollToTopHash(url.hash);
    });

    const requestedSection = new URLSearchParams(window.location.search).get("section");
    const initialTarget = requestedSection || (window.location.hash ? window.location.hash.replace(/^#/, "") : "");
    if (!initialTarget) return;

    window.history.scrollRestoration = "manual";
    const applyInitialHash = () => {
      update();
      scrollToTopTarget(initialTarget, "auto");
      requestAnimationFrame(update);
    };

    requestAnimationFrame(applyInitialHash);
    window.addEventListener("load", () => {
      window.setTimeout(applyInitialHash, 80);
      window.setTimeout(applyInitialHash, 260);
    }, { once: true });
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  initTitleSweeps();
  initSkillTitleLines();
  initMobileMenu();
  initSubPageHeaderLock();
  initTopHashNavigation();
  update();
})();


// --- Hero Poster Sub Pages ---
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workItems = document.querySelectorAll('.work-item');

  if (filterBtns.length && workItems.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((item) => item.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');

        workItems.forEach((item) => {
          const categories = item.getAttribute('data-category') || '';
          const shouldShow = filterValue === 'all' || categories.includes(filterValue);
          item.hidden = !shouldShow;
        });
      });
    });
  }

  const galleryImages = document.querySelectorAll('.gallery-img, .work-detail-hero img');
  if (galleryImages.length) {
    const lightbox = document.createElement('div');
    lightbox.className = 'noi-lightbox';
    lightbox.innerHTML = '<button class="noi-lightbox-close" type="button" aria-label="閉じる"></button><img class="noi-lightbox-img" src="" alt="" />';
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector('.noi-lightbox-img');
    const closeButton = lightbox.querySelector('.noi-lightbox-close');

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      window.setTimeout(() => {
        lightboxImage.src = '';
      }, 240);
    }

    galleryImages.forEach((image) => {
      image.addEventListener('click', () => {
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt || '';
        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    });

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox || event.target === closeButton) closeLightbox();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeLightbox();
    });
  }
});


// --- Hero Poster Sub Pages Robust Init ---
(() => {
  function initSubPageInteractions() {
    if (document.body.dataset.subPageInteractionsReady === 'true') return;
    document.body.dataset.subPageInteractionsReady = 'true';

    const filterBtns = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');

    if (filterBtns.length && workItems.length) {
      function applyWorksFilter(filterValue, updateUrl) {
        filterBtns.forEach((item) => {
          item.classList.toggle('active', item.getAttribute('data-filter') === filterValue);
        });
        workItems.forEach((item) => {
          const categories = item.getAttribute('data-category') || '';
          const shouldShow = filterValue === 'all' || categories.includes(filterValue);
          item.hidden = !shouldShow;
          item.style.display = shouldShow ? '' : 'none';
        });
        if (updateUrl && window.history && window.history.replaceState) {
          const url = new URL(window.location.href);
          if (filterValue === 'all') {
            url.searchParams.delete('filter');
          } else {
            url.searchParams.set('filter', filterValue);
          }
          window.history.replaceState(null, '', url);
        }
      }

      filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          applyWorksFilter(btn.getAttribute('data-filter') || 'all', true);
        });
      });

      const initialFilter = new URLSearchParams(window.location.search).get('filter') || 'all';
      applyWorksFilter(initialFilter, false);
    }

    const galleryImages = document.querySelectorAll('.gallery-img, .work-detail-hero img');
    if (!galleryImages.length || document.querySelector('.noi-lightbox')) return;

    const lightbox = document.createElement('div');
    lightbox.className = 'noi-lightbox';
    lightbox.innerHTML = '<button class="noi-lightbox-close" type="button" aria-label="閉じる"></button><img class="noi-lightbox-img" src="" alt="" />';
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector('.noi-lightbox-img');
    const closeButton = lightbox.querySelector('.noi-lightbox-close');

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      window.setTimeout(() => {
        lightboxImage.src = '';
      }, 240);
    }

    galleryImages.forEach((image) => {
      image.addEventListener('click', () => {
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt || '';
        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    });

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox || event.target === closeButton) closeLightbox();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeLightbox();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSubPageInteractions);
  } else {
    initSubPageInteractions();
  }
})();
