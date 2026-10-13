import { doctora, trust } from '../../data/content';
import styles from './Hero.module.css';
import doctoraImg from '../../assets/doctora.webp';

export function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={`${styles.decor} ${styles.decor1}`} aria-hidden="true" />
      <div className={`${styles.decor} ${styles.decor2}`} aria-hidden="true" />

      <div className={`container ${styles.grid}`}>
        <div className={`${styles.text} reveal`}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} />
            {doctora.especialidades}
          </p>

          <h1 className={styles.title}>
            Dra. Abrahina<br />
            <span className={styles.titleAccent}>Hazim Bailey</span>
          </h1>

          <p className={styles.subtitle}>{doctora.frase}</p>

          <div className={styles.actions}>
            <a href="#agenda" className="btn btn-primary">
              Agendar cita
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#cuando-consultar" className="btn btn-outline">Conocer más</a>
          </div>

          <ul className={styles.trust}>
            {trust.map(item => (
              <li key={item.label}>
                <strong>{item.number}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.photo} reveal`}>
          <div className={styles.photoFrame}>
             <img   src={doctoraImg}        alt={doctora.nombre}  fetchpriority="high"  decoding="async"  />
          </div>
          <div className={styles.blob} aria-hidden="true" />
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>✚</span>
            <div>
              <strong>Consulta disponible</strong>
              <small>Agenda por WhatsApp</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}