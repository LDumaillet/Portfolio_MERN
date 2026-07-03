import { useEffect, useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import s from "./Story.module.css";

const ENTRIES = [
  {
    side: "left",
    year: "2014",
    title: "CAP Maintenance Véhicules Auto",
    desc: "Lycée des Métiers entre Meurthe et Sanon. Premier diplôme technique, première rigueur.",
    badge: "Automobile",
    badgeClass: "auto",
    gold: false,
  },
  {
    side: "right",
    year: "2015",
    title: "BAC Maintenance Auto",
    titleEm: "Avec mention",
    desc: "Le goût du travail bien fait, récompensé par une mention. Déjà.",
    badge: "Automobile",
    badgeClass: "auto",
    gold: false,
  },
  {
    side: "left",
    year: "2016 – 2021",
    title: "Conseiller commercial après-vente",
    desc: "Peugeot / Citroën Pont-à-Mousson. De la mécanique à la relation client. Gestion d'équipe. Facturation. Adaptabilité et rigueur.",
    badge: "Professionnel",
    badgeClass: "pro",
    gold: false,
  },
  {
    side: "right",
    year: "2023 — Le tournant",
    title: "🔥 La décision de tout changer",
    desc: "Autodidacte le soir, en famille le weekend. HTML → CSS → JavaScript → MERN. La passion du code naît ici, dans les marges de la vie.",
    badge: "Reconversion",
    badgeClass: "pivot",
    gold: true,
    highlight: true,
  },
  {
    side: "left",
    year: "2024 – 2025",
    title: "Formation Studi — Bac +2 Obtenu",
    desc: "Graduate Développeur Web & Web Mobile. En parallèle du boulot et de la famille. Pas d'excuses. Mission accomplie.",
    badge: "Formation",
    badgeClass: "edu",
    gold: false,
  },
  {
    side: "right",
    year: "Août 2025 — Aujourd'hui",
    title: "✦ Développeur Full Stack — Stream Team",
    desc: "JeVeuxAider.com · JavaScript, Node.js, Express, SQL. Le code est devenu le métier. Le chemin était long. Il valait le coup.",
    badge: "En poste",
    badgeClass: "dev",
    gold: true,
  },
  {
    side: "left",
    year: "2026 - Aujourd'hui",
    title: "Conseiller commercial après-vente",
    desc: "Toyota / Lexus Maxéville. Relation client. Adaptabilité et rigueur.",
    badge: "Professionnel",
    badgeClass: "pro",
    gold: false,
  },
];

function TlEntry({ entry }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add(s.vis);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isRight = entry.side === "right";

  return (
    <div ref={ref} className={`${s.entry} ${isRight ? s.right : s.left}`}>
      {/* Left side — card or empty */}
      {!isRight ? (
        <div className={`${s.card} ${entry.highlight ? s.highlight : ""}`}>
          <span className={s.year}>{entry.year}</span>
          <h3>
            {entry.title}
            {entry.titleEm && (
              <>
                {" "}
                — <em>{entry.titleEm}</em>
              </>
            )}
          </h3>
          <p>{entry.desc}</p>
          <span className={`${s.badge} ${s[entry.badgeClass]}`}>
            {entry.badge}
          </span>
        </div>
      ) : (
        <div />
      )}

      {/* Dot */}
      <div className={s.dotCol}>
        <div className={`${s.dot} ${entry.gold ? s.dotGold : ""}`} />
      </div>

      {/* Right side */}
      {isRight ? (
        <div className={`${s.card} ${entry.highlight ? s.highlight : ""}`}>
          <span className={s.year}>{entry.year}</span>
          <h3>
            {entry.title}
            {entry.titleEm && (
              <>
                {" "}
                — <em>{entry.titleEm}</em>
              </>
            )}
          </h3>
          <p>{entry.desc}</p>
          <span className={`${s.badge} ${s[entry.badgeClass]}`}>
            {entry.badge}
          </span>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default function Story() {
  const titleRef = useReveal();
  return (
    <section id="story" className="alt">
      <div className="container">
        <div ref={titleRef} className={`reveal ${s.header}`}>
          <span className="section-tag">Parcours</span>
          <h2 className="section-title">
            Une trajectoire
            <br />
            <em>construite brique par brique.</em>
          </h2>
        </div>
        <div className={s.wrap}>
          <div className={s.line} />
          {ENTRIES.map((e, i) => (
            <TlEntry key={i} entry={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
