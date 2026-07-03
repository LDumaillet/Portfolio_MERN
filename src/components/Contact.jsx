import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faDownload,
  faPaperPlane,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import s from "./Contact.module.css";

const WEB3FORMS_ACCESS_KEY = "9dedd766-2f69-4c68-9fa7-4ea2809e7a69";

const LINKS = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "dumaillet.lucas@gmail.com",
    href: "mailto:dumaillet.lucas@gmail.com",
  },
  {
    icon: faLinkedinIn,
    label: "LinkedIn",
    value: "Lucas Dumaillet",
    href: "https://www.linkedin.com/in/lucas-dumaillet-3558a235b",
    external: true,
  },
  {
    icon: faGithub,
    label: "GitHub",
    value: "Lucas Dumaillet",
    href: "https://github.com/LDumaillet?tab=repositories",
    external: true,
  },
  {
    icon: faDownload,
    label: "Curriculum Vitae",
    value: "Télécharger mon CV PDF",
    href: "/CV_Lucas_Dumaillet.pdf",
    download: true,
  },
];

export default function Contact() {
  const leftRef = useReveal();
  const rightRef = useReveal();
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("done");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="alt">
      <div className="container">
        <div className={s.grid}>
          {/* Left */}
          <div ref={leftRef} className="reveal">
            <span className="section-tag">Contact</span>
            <h2 className={s.heading}>
              Parlons
              <br />
              d'un <em>projet.</em>
            </h2>
            <p className={s.sub}>
              Vous cherchez un développeur Full Stack MERN déterminé, capable de
              livrer, prêt à s'investir à 100&nbsp;%&nbsp;? Je suis disponible
              pour CDI, freelance ou collaboration.
            </p>
            <div className={s.links}>
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className={s.link}
                  {...(l.external ? { target: "_blank", rel: "noopener" } : {})}
                  {...(l.download ? { download: true } : {})}
                >
                  <span className={s.ico}>
                    <FontAwesomeIcon icon={l.icon} />
                  </span>
                  <div>
                    <span className={s.lbl}>{l.label}</span>
                    <span className={s.val}>{l.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div ref={rightRef} className="reveal delay-1">
            <form className={s.form} onSubmit={handleSubmit}>
              <div className={s.fg}>
                <label>Votre email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="vous@exemple.com"
                  required
                />
              </div>
              <div className={s.fg}>
                <label>Sujet</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Proposition, collaboration, question…"
                  required
                />
              </div>
              <div className={s.fg}>
                <label>Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Décrivez votre projet ou votre besoin…"
                  required
                />
              </div>
              <button
                type="submit"
                className={`${s.submit} ${status === "done" ? s.done : ""} ${status === "error" ? s.errorBtn : ""}`}
                disabled={status === "sending"}
              >
                {status === "idle" && (
                  <>
                    Envoyer <FontAwesomeIcon icon={faPaperPlane} />
                  </>
                )}
                {status === "sending" && "Envoi en cours…"}
                {status === "done" && (
                  <>
                    Message envoyé <FontAwesomeIcon icon={faCheck} />
                  </>
                )}
                {status === "error" &&
                  "Erreur — réessaie ou écris-moi par email"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
