import { doctora } from '../../data/content';
import styles from './Footer.module.css';
import emblemaOscuro from '../../assets/emblema-oscuro.webp';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <img
            className={styles.brandMark}
            src={emblemaOscuro}
            alt={doctora.nombre}
            width="40"
            height="58"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className={styles.name}>{doctora.nombre}</p>
            <p className={styles.roles}>Gastroenteróloga · Endoscopista · Internista</p>
          </div>
        </div>

        <div className={styles.social}>
          <a
            href={`https://www.instagram.com/${doctora.instagram}/`}
            target="_blank"
            rel="noopener"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @{doctora.instagram}
          </a>
        </div>

        <p className={styles.quote}>Cuidando tu salud digestiva con un enfoque integral.</p>

        <p className={styles.copy}>
          © {year} {doctora.nombre}. Todos los derechos reservados a Moises Alarcon.
        </p>
      </div>
    </footer>
  );
}