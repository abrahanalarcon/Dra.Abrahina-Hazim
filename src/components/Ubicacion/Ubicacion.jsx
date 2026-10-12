import { doctora, sedes } from '../../data/content';
import { WhatsAppIcon } from '../shared/WhatsAppIcon';
import styles from './Ubicacion.module.css';

export function Ubicacion() {
  return (
    <section className={`section ${styles.section}`} id="ubicacion">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag section-tag--on-blush">Ubicación</span>
          <h2 className={styles.title}>Encuéntrame en consulta</h2>
          <p className={styles.subtitle}>
            Agenda tu cita y recibe orientación sobre la ubicación más conveniente para ti.
          </p>
        </div>

        <div className={`${styles.map} reveal`}>
          <iframe
            src="https://www.google.com/maps?q=18.459030,-69.303780&z=13&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Ubicación de las consultas de ${doctora.nombre}`}
          />
        </div>

        <div className={styles.grid}>
          {sedes.map(sede => (
            <article key={sede.ciudad} className={`${styles.card} reveal`}>
              <span className={styles.pin}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <h3 className={styles.city}>{sede.ciudad}</h3>
              <p className={styles.place}>
                {sede.lugar.split('\n').map((line, i) => (
                  <span key={i}>
                    {line.startsWith('"') ? <em>{line}</em> : line}
                    {i < sede.lugar.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
              <a href={sede.mapa} target="_blank" rel="noopener" className={styles.btn}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                Cómo llegar
              </a>
            </article>
          ))}
        </div>

        <div className={`${styles.cta} reveal`}>
          <div className={styles.ctaInfo}>
            <p className={styles.ctaText}>
              Agenda tu cita y recibe orientación sobre la ubicación más conveniente para ti.
            </p>
            <a href={doctora.whatsappLink} target="_blank" rel="noopener" className="btn btn-whatsapp">
              <WhatsAppIcon />
              Agendar por WhatsApp
            </a>
          </div>

          <div className={styles.qr}>
            <div className={styles.qrPlaceholder} aria-label="Código QR para agendar cita">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/><line x1="14" y1="14" x2="14" y2="21"/>
                <line x1="21" y1="14" x2="21" y2="21"/><line x1="17" y1="14" x2="17" y2="17"/>
                <line x1="14" y1="17" x2="18" y2="17"/>
              </svg>
              <span className={styles.qrText}>QR<br />Agendar</span>
            </div>
            <p className={styles.qrCaption}>Escanea para agendar</p>
          </div>
        </div>
      </div>
    </section>
  );
}