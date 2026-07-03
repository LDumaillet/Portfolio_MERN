import { useState, useEffect } from "react";
import s from "./Nav.module.css";
import logo from "../assets/logo-gold.svg";

const LINKS = [
  { href: "#about", label: "À propos" },
  { href: "#story", label: "Parcours" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const smoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${s.nav} ${scrolled ? s.scrolled : ""}`}>
        <div className={s.logo}>
          <img src={logo} alt="Logo Lucas Dumaillet" className={s.logo} />
        </div>

        <ul className={s.links}>
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={s.link}
                onClick={(e) => smoothScroll(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:dumaillet.lucas@gmail.com" className={s.avail}>
          Disponible
        </a>

        <button
          className={`${s.burger} ${menuOpen ? s.open : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`${s.mobile} ${menuOpen ? s.mobileOpen : ""}`}>
        <ul>
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={s.mobileLink}
                onClick={(e) => smoothScroll(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
