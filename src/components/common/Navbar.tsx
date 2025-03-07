// frontend/src/components/Navbar.tsx
import React from 'react';
import styles from '../../styles/navbar.module.css';
import InternalLink from './InternalLink';

interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  links: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <InternalLink href="/">A S</InternalLink>
      </div>
      <input type="checkbox" id="nav-toggle" className={styles.navToggle} />
      <label htmlFor="nav-toggle" className={styles.navToggleLabel}>
        ☰
      </label>
      <div className={styles.navMenu}>
        <label htmlFor="nav-toggle" className={styles.closeButton}>
          ✕
        </label>
        {links.map((link) => (
          <InternalLink key={link.href} href={link.href}>
            {link.label}
          </InternalLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;