import { useReveal } from "../hooks/useReveal";
import s from "./About.module.css";
import photoLucas from "../assets/lucas-photo.jpg";

const CHIPS = [
  "🎓 Bac +2 — Graduate Dev Web & Web Mobile",
  "💼 En poste — Stream Team (JeVeuxAider.com) / Conseiller Commercial Services ( TOYOTA, LEXUS )",
  "🚀 Projet perso — Help Work (MERN)",
  "📍 Grand Est · Remote OK",
];

const ROWS = [
  { icon: "📍", text: "Nancy, France" },
  { icon: "🎯", text: "Disponible — CDI / Remote" },
  { icon: "🏎️", text: "Mécanicien, passionné de tech" },
  { icon: "👨‍👩‍👧‍👦", text: "Papa, développeur" },
  { icon: "⚙️", text: "Stack : MongoDB · Express · React · Node" },
];

export default function About() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section id="about">
      <div className="container">
        <div className={s.grid}>
          {/* Text */}
          <div ref={leftRef} className="reveal">
            <span className="section-tag">À propos</span>
            <h2 className={s.heading}>
              Pas le
              <br />
              parcours <em>classique.</em>
              <br />
              La motivation,
              <br />
              <em>oui.</em>
            </h2>
            <p className={s.lead}>
              Mécanicien auto. Conseiller après-vente. Et maintenant développeur
              full stack. Un virage à 180°, piloté avec méthode.
            </p>
            <p className={s.body}>
              En 2023, j'ai pris la décision de tout réinventer. J'ai commencé
              seul — HTML, CSS, JavaScript — le soir après le travail, les
              enfants couchés. Puis une formation diplômante chez Studi,{" "}
              <strong>
                tout en travaillant à plein temps et en élevant ma famille.
              </strong>
            </p>
            <p className={s.body}>
              Ce parcours m'a donné quelque chose qu'aucune école classique ne
              peut enseigner : la{" "}
              <strong>
                discipline, la résilience, et une motivation qui ne dépend de
                personne d'autre que moi.
              </strong>
            </p>
            <p className={s.body}>
              Aujourd'hui développeur full stack chez Stream Team sur
              JeVeuxAider.com, je continue à construire en parallèle{" "}
              <strong>Help Work</strong>, une application B2B en MERN stack.
            </p>
            <div className={s.chips}>
              {CHIPS.map((c) => (
                <span key={c} className={s.chip}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* ID Card */}
          <div ref={rightRef} className="reveal delay-1">
            <div className={s.card}>
              <div className={s.avatar}>
                <img
                  src={photoLucas}
                  alt="Lucas DUMAILLET"
                  className={s.avatarImg}
                />
              </div>
              <div className={s.name}>Lucas Dumaillet</div>
              <div className={s.role}>Développeur MERN</div>
              <div className={s.rows}>
                {ROWS.map((r) => (
                  <div key={r.icon} className={s.row}>
                    <span className={s.rowIcon}>{r.icon}</span>
                    <span>{r.text}</span>
                  </div>
                ))}
              </div>
              <div className={s.btns}>
                <a
                  href="https://github.com/LDumaillet?tab=repositories"
                  className={s.btn}
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-dumaillet-3558a235b"
                  target="_blank"
                  rel="noopener"
                  className={s.btn}
                >
                  LinkedIn
                </a>
                <a href="mailto:dumaillet.lucas@gmail.com" className={s.btn}>
                  Email
                </a>
                <a href="/CV_Lucas_Dumaillet.pdf" download className={s.btn}>
                  CV ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
