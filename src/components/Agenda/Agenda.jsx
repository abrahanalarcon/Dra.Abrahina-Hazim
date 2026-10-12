import { doctora } from '../../data/content';
import { WhatsAppIcon } from '../shared/WhatsAppIcon';
import styles from './Agenda.module.css';

export function Agenda() {
  return (
    <section className={`section ${styles.section}`} id="agenda">
      <div className={`${styles.glow} ${styles.glow1}`} aria-hidden="true" />
      <div className={`${styles.glow} ${styles.glow2}`} aria-hidden="true" />

      <div className={`container ${styles.inner} reveal`}>
        <span className="section-tag section-tag--light">Agenda</span>
        <h2 className={styles.title}>¿Listo/a para comenzar?</h2>
        <p className={styles.text}>
          Tu salud merece tiempo, atención y un plan pensado para ti.
        </p>
        <p className={styles.subtext}>
          Escríbenos por WhatsApp y te orientaremos para elegir la consulta
          o servicio más adecuado para ti.
        </p>

        <a href={doctora.whatsappLink} target="_blank" rel="noopener" className="btn btn-whatsapp">
          <WhatsAppIcon />
          Agendar por WhatsApp
        </a>

        <p className={styles.footnote}>
          Respuesta en horario de consulta · Lunes a Sábado
        </p>
      </div>
    </section>
  );
}