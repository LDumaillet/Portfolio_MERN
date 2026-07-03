import s from "./Hero.module.css";

export default function Hero() {
  const scroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={s.hero} id="hero">
      {/* Background */}
      <div className={s.bg}>
        <div className={s.grid} />
        <div className={s.watermark}>RECONVERSION</div>
      </div>

      <div className={s.content}>
        {/* Eyebrow */}
        <div className={s.eyebrow}>
          <div className={s.eyebrowLine} />
          <span className={s.eyebrowText}>
            Développeur MERN · Grand Est &amp; Remote
          </span>
        </div>

        {/* Name */}
        <h1 className={s.title} aria-label="Lucas Dumaillet">
          <span className={s.line1}>LUCAS</span>
          <span className={s.line2}>DUMAILLET</span>
        </h1>

        {/* Sub + CTA */}
        <div className={s.body}>
          <p className={s.sub}>
            De la clé à molette au terminal.
            <br />
            <strong>Full Stack MERN</strong>—
            <span className={s.mern}>MongoDB · Express · React · Node</span>
            <br />
            Bac&nbsp;+2 obtenu en parallèle de la vie. <br />
            <strong>Disponible dès maintenant.</strong>
          </p>

          <div className={s.actions}>
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => scroll(e, "#projects")}
            >
              Voir mes projets →
            </a>
            <a
              href="#contact"
              className="btn-ghost"
              onClick={(e) => scroll(e, "#contact")}
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={s.scrollHint}>
        <span>Scroll</span>
        <div className={s.track}>
          <div className={s.thumb} />
        </div>
      </div>
    </section>
  );
}
