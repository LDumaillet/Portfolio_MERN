import { useReveal, useRevealChildren } from "../hooks/useReveal";
import s from "./Projects.module.css";
import imgHelpWork from "../assets/projects/helpwork.webp";
import imgStreamTeam from "../assets/projects/streamteam.webp";
import imgArcadia from "../assets/projects/arcadia.webp";
import imgCrypto from "../assets/projects/crypto.webp";
import imgLibrary from "../assets/projects/library.webp";
import imgApi from "../assets/projects/api-pays.webp";
import imgPortfolioV1 from "../assets/projects/portfolio_v1.webp";

const PROJECTS = [
  {
    id: "helpwork",
    featured: true,
    badge: "⭐ Projet phare",
    title: "Help Work",
    desc: "Application B2B de gestion de dossiers et suivi financier. Architecture MERN complète — MongoDB Atlas, Mongoose, Express, React + Vite. Ambition SaaS.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB Atlas", "Mongoose"],
    wip: true,
    link: "https://help-work-eta.vercel.app/",
    deployed: true,
    image: imgHelpWork,
    arch: [
      "client/ (React + Vite)",
      "server/ (Express + Node)",
      "models/ (Mongoose)",
      "routes/ (REST API)",
      "db/ → MongoDB Atlas ☁️",
    ],
  },
  {
    id: "streamteam",
    num: "01",
    title: "Stream Team",
    desc: "Site professionnel — Node.js + Express, interface dynamique SQL. Projet en production.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "SQL"],
    link: "https://www.stream-team.site/",
    deployed: true,
    image: imgStreamTeam,
  },
  {
    id: "portfolio-v1",
    num: "02",
    title: "Portfolio — Première version",
    desc: "Mon tout premier portfolio professionnel, HTML/CSS/PHP avec formulaire de contact PHPMailer. Une base solide qui a posé les fondations de ma reconversion.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://portfolio-lucas-dumaillet-bc5d34c772d6.herokuapp.com/",
    deployed: true,
    image: imgPortfolioV1,
  },
  {
    id: "arcadia",
    num: "02",
    title: "Zoo Arcadia",
    desc: "Double base de données MariaDB + MongoDB, interface PHP dynamique, administration.",
    tech: ["PHP", "JavaScript", "MariaDB", "MongoDB", "HTML/CSS"],
    deployed: false,
    image: imgArcadia,
  },
  {
    id: "crypto",
    num: "03",
    title: "Suivi Crypto",
    desc: "Dashboard Angular de suivi crypto temps réel via API externe.",
    tech: ["Angular", "SCSS", "JavaScript", "REST API"],
    deployed: false,
    image: imgCrypto,
  },
  {
    id: "library",
    num: "04",
    title: "Librairie Angular",
    desc: "Catalogue de livres Angular — composants réutilisables, routing, état JSON.",
    tech: ["Angular", "SCSS", "JavaScript", "JSON"],
    deployed: false,
    image: imgLibrary,
  },
  {
    id: "api",
    num: "05",
    title: "API Pays",
    desc: "Consultation de données géographiques mondiales via API REST, filtres dynamiques.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    deployed: false,
    image: imgApi,
  },
];

export default function Projects() {
  const titleRef = useReveal();
  const gridRef = useRevealChildren(".reveal");

  return (
    <section id="projects" className="alt">
      <div className="container">
        <div ref={titleRef} className={`reveal ${s.header}`}>
          <span className="section-tag">Projets</span>
          <h2 className="section-title">
            Ce que
            <br />
            <em>j'ai construit.</em>
          </h2>
        </div>

        <div ref={gridRef} className={s.grid}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className={`reveal ${s.card} ${p.featured ? s.featured : ""}`}
              style={{
                transitionDelay: p.featured ? "0s" : `${(i - 1) * 0.08}s`,
              }}
            >
              {p.featured ? (
                <div className={s.featRow}>
                  {/* Visuel du projet phare */}
                  <div className={s.featThumb}>
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`Aperçu de l'application ${p.title}`}
                        loading="lazy"
                      />
                    ) : (
                      <div className={s.thumbPlaceholder}>
                        <span className={s.placeholderIcon}>🖥️</span>
                        <span>{p.title}</span>
                      </div>
                    )}
                    <div className={s.thumbOverlay} />
                  </div>

                  <div className={s.featLeft}>
                    <span className={s.featBadge}>{p.badge}</span>
                    <div className={s.title}>{p.title}</div>
                    <p className={s.desc}>{p.desc}</p>
                    <div className={s.tech}>
                      {p.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    {p.wip && (
                      <span className={s.wip}>🚧 En développement actif</span>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener"
                        className={s.visitBtn}
                      >
                        Visiter le site ↗
                      </a>
                    )}
                  </div>
                  <div className={s.arch}>
                    <div className={s.archComment}>// Architecture</div>
                    {p.arch.map((line, j) => (
                      <div
                        key={j}
                        className={
                          j === p.arch.length - 1 ? s.archGold : s.archLine
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {/* Vignette du projet */}
                  <div className={s.thumb}>
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`Aperçu du projet ${p.title}`}
                        loading="lazy"
                      />
                    ) : (
                      <div className={s.thumbPlaceholder}>
                        <span className={s.placeholderIcon}>🖼️</span>
                        <span>{p.title}</span>
                      </div>
                    )}
                    <div className={s.thumbOverlay} />
                    {!p.deployed && (
                      <span className={s.notLive}>Démo non déployée</span>
                    )}
                  </div>

                  <div className={s.top}>
                    <span className={s.num}>{p.num}</span>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener"
                        className={s.ext}
                      >
                        ↗
                      </a>
                    )}
                  </div>
                  <div className={s.title}>{p.title}</div>
                  <p className={s.desc}>{p.desc}</p>
                  <div className={s.tech}>
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
