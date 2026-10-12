import { procedimientos } from '../../data/content';
import styles from './Endoscopia.module.css';

const ICONS = {
  endoscopia: (
    <>
      <path d="M12 2v6"/><circle cx="12" cy="10" r="2"/>
      <path d="M12 12v4a4 4 0 0 0 4 4h1"/><path d="M12 16a4 4 0 0 1-4 4H7"/>
    </>
  ),
  colonoscopia: (
    <>
      <path d="M4 12c0-4 3-8 8-8s8 4 8 8"/>
      <path d="M4 12c0 4 3 8 8 8s8-4 8-8"/>
      <circle cx="12" cy="12" r="2"/>
    </>
  ),
  prevencion: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </>
  ),
  hepatobiliar: (
    <>
      <path d="M20 12a8 8 0 1 1-8-8c3 0 5 2 5 5s-2 3-3 3"/>
      <circle cx="9" cy="15" r="1"/>
    </>
  ),
};

export function Endoscopia() {
  return (
    <section className={`section ${styles.section}`} id="endoscopia">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Procedimientos</span>
          <h2 className="section-title">Procedimientos y prevención</h2>
          <p className="section-subtitle">
            Además de la evaluación clínica, ofrecemos orientación y seguimiento
            en procedimientos y estrategias de prevención de enfermedades digestivas.
          </p>
        </div>

        <div className={styles.grid}>
          {procedimientos.map(p => (
            <article key={p.titulo} className={`${styles.card} reveal`}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[p.icono]}
                </svg>
              </span>
              <h3 className={styles.cardTitle}>{p.titulo}</h3>
              <p className={styles.cardText}>{p.texto}</p>
            </article>
          ))}
        </div>

        <div className={`${styles.highlight} reveal`}>
          <p className={styles.highlightTitle}>Prevenir también es cuidarte.</p>
          <p className={styles.highlightText}>
            La detección oportuna puede marcar una diferencia en tu salud.
          </p>
        </div>
      </div>
    </section>
  );
}