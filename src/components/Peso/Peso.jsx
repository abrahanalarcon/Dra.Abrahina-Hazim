import { pesoItems } from '../../data/content';
import styles from './Peso.module.css';

const ICONS = {
  metabolica: <path d="M3 12h4l2-6 4 12 2-6h6"/>,
  composicion: <><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 14l3-3 2 2 4-4"/></>,
  alimentaria: <><path d="M3 2v7c0 1.1.9 2 2 2h1v10"/><path d="M7 2v7"/><path d="M14 2c-1.5 3-2 5-2 8 0 2 1 3 3 3v8"/><path d="M15 2v11"/></>,
  glp1: <><path d="M9 3v6a5 5 0 0 0 10 0V3"/><path d="M9 3H7a2 2 0 0 0-2 2v4"/><path d="M19 3h2a2 2 0 0 1 2 2v4"/></>,
  balon: <><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18"/><path d="M7 12h10"/></>,
  seguimiento: <><path d="M21 12a9 9 0 1 1-9-9"/><path d="M21 3v6h-6"/><path d="M9 13l3 3 6-6"/></>,
};

export function Peso() {
  return (
    <section className={`section ${styles.section}`} id="peso">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">Bienestar</span>
          <div className={styles.priceBadge}>
            <span className={styles.priceCurrency}>RD$</span>
            <span className={styles.priceAmount}>3,500</span>
          </div>
          <h2 className="section-title">Consulta especializada para pérdida de peso</h2>
          <p className={styles.lead}>Bajar de peso no debería tratarse únicamente de comer menos.</p>
          <p className="section-subtitle">
            Evaluamos tu estado de salud, composición corporal, hábitos y
            factores metabólicos para diseñar una estrategia adaptada a ti.
          </p>
        </div>

        <h3 className={`${styles.subtitle} reveal`}>Podemos trabajar en:</h3>

        <div className={styles.grid}>
          {pesoItems.map(item => (
            <article key={item.titulo} className={`${styles.card} reveal`}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[item.icono]}
                </svg>
              </span>
              <h4 className={styles.cardTitle}>{item.titulo}</h4>
              <p className={styles.cardText}>{item.texto}</p>
            </article>
          ))}
        </div>

        <div className={`${styles.footer} reveal`}>
          <p>El objetivo no es solo perder peso. Es <strong>mejorar tu salud</strong> y construir resultados que puedas mantener.</p>
        </div>
      </div>
    </section>
  );
}