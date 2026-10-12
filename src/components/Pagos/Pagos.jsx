import { doctora } from '../../data/content';
import styles from './Pagos.module.css';

export function Pagos() {
  return (
    <section className={`section ${styles.section}`} id="pagos">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Pagos</span>
          <h2 className="section-title">Métodos de pago</h2>
        </div>

        <div className={`${styles.alert} reveal`}>
          <div className={styles.alertIcon}>⚠</div>
          <div>
            <h4 className={styles.alertTitle}>Importante</h4>
            <p className={styles.alertText}>
              Una vez realizado el pago, envía tu comprobante por WhatsApp
              para confirmar tu cita o recibir la información correspondiente.
            </p>
            <p className={styles.alertContact}>
              WhatsApp: <strong>@{doctora.instagram}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}