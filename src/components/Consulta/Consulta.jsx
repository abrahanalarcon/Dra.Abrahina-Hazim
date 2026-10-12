import { serviciosConsulta, areasAtencion } from '../../data/content';
import styles from './Consulta.module.css';

export function Consulta() {
  return (
    <section className={`section ${styles.section}`} id="consulta">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">Consulta</span>
          <div className={styles.priceBadge}>
            <span className={styles.priceCurrency}>RD$</span>
            <span className={styles.priceAmount}>2,500</span>
          </div>
          <h2 className="section-title">Consulta especializada en Gastroenterología</h2>
          <p className="section-subtitle">
            Una evaluación médica integral para comprender tus síntomas,
            identificar posibles causas y establecer un plan de manejo individualizado.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.card} reveal`}>
            <h3 className={styles.cardTitle}>
              <span className={styles.cardIconDot} />
              Durante la consulta
            </h3>
            <ul className={styles.list}>
              {serviciosConsulta.map(item => (
                <li key={item}>
                  <span className={styles.listIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.card} reveal`}>
            <h3 className={styles.cardTitle}>
              <span className={styles.cardIconDot} />
              Áreas de atención
            </h3>
            <div className={styles.areasGrid}>
              {areasAtencion.map((area, i) => (
                <div key={area} className={styles.areaItem}>
                  <span className={styles.areaIcon}>
                    {['◐','◑','◒','◓','◔'][i % 5]}
                  </span>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className={`${styles.footer} reveal`}>
          Tu salud digestiva merece una evaluación <em>individualizada</em>.
        </p>
      </div>
    </section>
  );
}