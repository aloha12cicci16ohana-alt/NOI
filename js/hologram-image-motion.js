(() => {
  const root = document.querySelector(".hologram-image-motion");
  const canvas = document.querySelector(".hologram-image-motion__canvas");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isFullPageBackground = document.body.classList.contains("has-hologram-image-motion");
  const frameInterval = isFullPageBackground ? 1000 / 24 : 1000 / 60;
  let lastFrame = 0;

  if (!root || !canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  const state = {
    width: 0,
    height: 0,
    dpr: 1,
  };

  function resize() {
    state.dpr = Math.min(window.devicePixelRatio || 1, 2);
    state.width = Math.floor(window.innerWidth);
    state.height = Math.floor(window.innerHeight);
    canvas.width = Math.floor(state.width * state.dpr);
    canvas.height = Math.floor(state.height * state.dpr);
    canvas.style.width = `${state.width}px`;
    canvas.style.height = `${state.height}px`;
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  }

  function drawRefractionLine(time, config) {
    const { width, height } = state;
    const gradient = ctx.createLinearGradient(
      width * config.x1,
      height * config.y1,
      width * config.x2,
      height * config.y2,
    );
    gradient.addColorStop(0, "rgba(255,255,255,0)");
    gradient.addColorStop(0.24, `rgba(${config.a},${config.alpha})`);
    gradient.addColorStop(0.42, `rgba(${config.b},${config.alpha * 1.1})`);
    gradient.addColorStop(0.56, "rgba(255,255,255,0.12)");
    gradient.addColorStop(0.72, `rgba(${config.a},${config.alpha * 0.62})`);
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (let pass = 0; pass < 2; pass += 1) {
      ctx.strokeStyle = pass === 0 ? gradient : "rgba(255,255,255,0.035)";
      ctx.lineWidth = pass === 0 ? config.width : config.width + 9;
      ctx.filter = pass === 0 ? "blur(0.15px)" : "blur(4px)";
      ctx.beginPath();

      for (let i = 0; i <= 120; i += 1) {
        const t = i / 120;
        const x = width * (config.x1 + (config.x2 - config.x1) * t);
        const y =
          height * (config.y1 + (config.y2 - config.y1) * t) +
          Math.sin(t * Math.PI * config.wave + time * config.speed + config.phase) * height * config.amp;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
    }

    ctx.restore();
  }

  function drawWhorls(time, breathe) {
    const { width, height } = state;
    const whorls = [
      { x: 0.22, y: 0.57, rx: 0.16, ry: 0.11, rot: -0.35, phase: 0.4 },
      { x: 0.61, y: 0.42, rx: 0.19, ry: 0.12, rot: -0.14, phase: 2.2 },
      { x: 0.78, y: 0.68, rx: 0.22, ry: 0.13, rot: 0.28, phase: 4.1 },
    ];

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.filter = "blur(0.18px)";

    whorls.forEach((whorl) => {
      const cx = width * whorl.x;
      const cy = height * whorl.y;
      const rx = width * whorl.rx;
      const ry = height * whorl.ry;

      for (let ring = 0; ring < 6; ring += 1) {
        const shimmer = (Math.sin(time * 0.18 + whorl.phase + ring) + 1) / 2;
        ctx.strokeStyle = ring % 2 === 0
          ? `rgba(255, 211, 246, ${0.055 + shimmer * 0.035})`
          : `rgba(119, 236, 255, ${0.058 + shimmer * 0.035})`;
        ctx.lineWidth = ring % 3 === 0 ? 1.4 : 0.9;
        ctx.beginPath();

        for (let step = 0; step <= 130; step += 1) {
          const t = step / 130;
          const angle = t * Math.PI * 2.05 + time * 0.028 + whorl.phase + ring * 0.18;
          const scale = 0.42 + ring * 0.105;
          const ripple = 1 + Math.sin(t * Math.PI * 6 + time * 0.13 + ring) * 0.04;
          const localX = Math.cos(angle) * rx * scale * ripple;
          const localY = Math.sin(angle) * ry * scale * (1 + breathe * 0.035);
          const x = cx + localX * Math.cos(whorl.rot) - localY * Math.sin(whorl.rot);
          const y = cy + localX * Math.sin(whorl.rot) + localY * Math.cos(whorl.rot);

          if (step === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
      }
    });

    ctx.restore();
  }

  function render(ms) {
    if (ms - lastFrame < frameInterval) {
      if (!reduceMotion) window.requestAnimationFrame(render);
      return;
    }

    lastFrame = ms;

    const time = ms / 1000;
    const breathe = reduceMotion ? 0.35 : (Math.sin(time * 0.46) + 1) / 2;
    const driftX = reduceMotion ? 0 : Math.sin(time * 0.18) * 42 + Math.sin(time * 0.07) * 16;
    const driftY = reduceMotion ? 0 : Math.cos(time * 0.16) * 24 + Math.sin(time * 0.09) * 10;
    const sheenX = reduceMotion ? -8 : -38 + Math.sin(time * 0.22) * 34;

    root.style.setProperty("--motion-breathe", breathe.toFixed(4));
    root.style.setProperty("--motion-drift-x", `${driftX.toFixed(2)}px`);
    root.style.setProperty("--motion-drift-y", `${driftY.toFixed(2)}px`);
    root.style.setProperty("--motion-sheen-x", `${sheenX.toFixed(2)}%`);

    ctx.clearRect(0, 0, state.width, state.height);

    drawRefractionLine(time, {
      x1: -0.05,
      y1: 0.62,
      x2: 1.06,
      y2: 0.28,
      a: "255,207,246",
      b: "120,236,255",
      alpha: 0.18 + breathe * 0.06,
      width: 3.2,
      wave: 3.1,
      speed: 0.42,
      phase: 0.4,
      amp: 0.052,
    });

    drawRefractionLine(time, {
      x1: 0.08,
      y1: 0.86,
      x2: 0.92,
      y2: 0.18,
      a: "255,247,176",
      b: "255,195,241",
      alpha: 0.14 + breathe * 0.05,
      width: 2.5,
      wave: 3.8,
      speed: 0.34,
      phase: 2.2,
      amp: 0.044,
    });

    drawRefractionLine(time, {
      x1: 0.48,
      y1: 0.74,
      x2: 1.08,
      y2: 0.34,
      a: "120,236,255",
      b: "255,207,246",
      alpha: 0.13 + breathe * 0.045,
      width: 2.2,
      wave: 4.4,
      speed: 0.38,
      phase: 4.6,
      amp: 0.038,
    });

    drawWhorls(time, breathe);

    if (!reduceMotion) window.requestAnimationFrame(render);
  }

  resize();
  window.addEventListener("resize", resize);
  window.requestAnimationFrame(render);
})();
