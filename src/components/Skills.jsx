import { useReveal } from '../hooks/useReveal'
import { useRevealChildren } from '../hooks/useReveal'
import s from './Skills.module.css'

const CARDS = [
  {
    icon: '🍃', title: 'Base de données',
    pills: [
      { label: 'MongoDB', hl: true }, { label: 'MongoDB Atlas', hl: true },
      { label: 'Mongoose', hl: true }, { label: 'MariaDB' }, { label: 'MySQL' },
    ],
  },
  {
    icon: '⚙️', title: 'Back-end',
    pills: [
      { label: 'Node.js', hl: true }, { label: 'Express.js', hl: true },
      { label: 'REST API', hl: true }, { label: 'PHP' }, { label: 'Symfony' },
    ],
  },
  {
    icon: '⚛️', title: 'Front-end',
    pills: [
      { label: 'React', hl: true }, { label: 'Vite', hl: true },
      { label: 'Angular' }, { label: 'JavaScript ES6+' },
      { label: 'HTML5 / CSS3' }, { label: 'SCSS' }, { label: 'Bootstrap' },
    ],
  },
  {
    icon: '🛠️', title: 'Outils & DevOps',
    pills: [
      { label: 'Git / GitHub', hl: true }, { label: 'Docker' },
      { label: 'Figma' }, { label: 'Trello' }, { label: 'WordPress' },
    ],
  },
]

const MERN = [
  { letter: 'M', name: 'MongoDB' },
  { letter: 'E', name: 'Express' },
  { letter: 'R', name: 'React'   },
  { letter: 'N', name: 'Node.js' },
]

export default function Skills() {
  const titleRef   = useReveal()
  const gridRef    = useRevealChildren('.reveal')
  const bannerRef  = useReveal()

  return (
    <section id="skills">
      <div className="container">
        <div ref={titleRef} className={`reveal ${s.header}`}>
          <span className="section-tag">Stack Technique</span>
          <h2 className="section-title">
            Les outils<br /><em>que je maîtrise.</em>
          </h2>
        </div>

        <div ref={gridRef} className={s.grid}>
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`reveal ${s.card}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={s.cardHead}>
                <span className={s.icon}>{card.icon}</span>
                <h3>{card.title}</h3>
              </div>
              <div className={s.pills}>
                {card.pills.map(p => (
                  <span key={p.label} className={`${s.pill} ${p.hl ? s.pillHl : ''}`}>
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MERN Banner */}
        <div ref={bannerRef} className={`reveal ${s.banner}`}>
          <span className={s.bannerLabel}>Stack principale</span>
          <div className={s.bannerItems}>
            {MERN.map((m, i) => (
              <div key={m.letter} className={s.bannerGroup}>
                <div className={s.bannerItem}>
                  <span className={s.letter}>{m.letter}</span>
                  <span className={s.mname}>{m.name}</span>
                </div>
                {i < MERN.length - 1 && <span className={s.arrow}>→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
