import { useReveal } from "../hooks/useReveal";
import s from "./Interests.module.css";

const ITEMS = [
  { icon: "🏎️", label: "Passionné d'automobile" },
  { icon: "💻", label: "Passionné de technologie" },
  { icon: "🏀", label: "Fan de basket" },
  { icon: "🎮", label: "Gamer" },
  { icon: "📚", label: "Lecteur" },
  { icon: "🎵", label: "Mélomane" },
];

export default function Interests() {
  const ref = useReveal();
  return (
    <section>
      <div className="container">
        <div ref={ref} className={`reveal ${s.inner}`}>
          <span className="section-tag">Côté humain</span>
          <h2 className={s.title}>
            Hors clavier,
            <br />
            <em>je suis aussi…</em>
          </h2>
          <div className={s.list}>
            {ITEMS.map(({ icon, label }) => (
              <div key={label} className={s.item}>
                <span className={s.icon}>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
