import { sintomas } from '../../data/content';
import styles from './CuandoConsultar.module.css';

export function CuandoConsultar() {
  return (
    <section className={`section ${styles.section}`} id="cuando-consultar">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Síntomas frecuentes</span>
          <h2 className="section-title">¿Tu cuerpo te está dando señales?</h2>
          <p className="section-subtitle">
            Si presentas alguno de estos síntomas de forma frecuente,
            es importante conocer su causa.
          </p>
        </div>

        <ul className={`${styles.grid} reveal`}>
          {sintomas.map(s => (
            <li key={s} className={styles.item}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {s}
            </li>
          ))}
        </ul>

        <div className={`${styles.note} reveal`}>
          <p className={styles.noteText}>
            También podemos evaluar alteraciones relacionadas con el{' '}
            <strong>hígado, vesícula, vías biliares y páncreas</strong>.
          </p>
          <p className={styles.noteHighlight}>
            No normalices los síntomas. Una evaluación adecuada es el primer paso
            para conocer qué está ocurriendo y recibir el tratamiento indicado.
          </p>
        </div>
      </div>
    </section>
  );
}