import { useEffect, useState } from 'react';
import { doctora, navLinks } from '../../data/content';
import styles from './Navbar.module.css';
import emblemaClaro from '../../assets/emblema-claro.webp';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <a href="#inicio" className={styles.logo}>
          <img
            className={styles.brandMark}
            src={emblemaClaro}
            alt={doctora.nombre}
            width="36"
            height="52"
            decoding="async"
          />
          <span className={styles.logoText}>
            {doctora.nombreCorto}
            <small>Gastroenterología</small>
          </span>
        </a>

        <nav className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#agenda" className="btn btn-primary" onClick={closeMenu}>
            Agendar cita
          </a>
        </nav>

        <button
          className={`${styles.toggle} ${menuOpen ? styles.toggleActive : ''}`}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}