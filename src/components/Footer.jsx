import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.inner}>
          <div>
            <div className={s.logo}>Lucas Dumaillet</div>
            <div className={s.sub}>Développeur MERN · Bac +2</div>
          </div>
          <div className={s.links}>
            <a
              href="https://www.linkedin.com/in/lucas-dumaillet-3558a235b"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <a href="mailto:dumaillet.lucas@gmail.com">Email</a>
            <a href="/CV_Lucas_Dumaillet.pdf" download>
              CV
            </a>
          </div>
        </div>
        <div className={s.copy}>
          © 2026 Lucas Dumaillet · Construit avec React · Conçu pour convaincre
        </div>
      </div>
    </footer>
  );
}
