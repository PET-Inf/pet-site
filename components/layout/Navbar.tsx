"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    closeMenu();

    if (window.location.pathname === '/' && window.location.hash === `#${sectionId}`) {
      event.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuToggleWrapper}>
        <button className={styles.menuToggle} onClick={toggleMenu}></button>
        {menuOpen && (
          <div className={styles.dropdown}>
            <Link href="/#sobre" onClick={(event) => handleSectionClick(event, 'sobre')}>Sobre</Link>
            <Link href="/#projetos" onClick={(event) => handleSectionClick(event, 'projetos')}>Projetos</Link>
            <Link href="/#historia" onClick={(event) => handleSectionClick(event, 'historia')}>História</Link>
            <Link href="/#equipe" onClick={(event) => handleSectionClick(event, 'equipe')}>Nossa Equipe</Link>
            <Link href="/selecao" onClick={closeMenu}>Seleção</Link>
            <Link href="/#contato" onClick={(event) => handleSectionClick(event, 'contato')}>Contato</Link>
          </div>
        )}
      </div>

      <Link href="/#inicio" className={styles.logoLink} onClick={(event) => handleSectionClick(event, 'inicio')}>
        <Image src="/logo_PET.png" alt="Logo" className={styles.logo} width={150} height={150} />
      </Link>

      <ul className={styles.menu}>
        <Link href="/#sobre" onClick={(event) => handleSectionClick(event, 'sobre')}>Sobre</Link>
        <Link href="/#projetos" onClick={(event) => handleSectionClick(event, 'projetos')}>Projetos</Link>
        <Link href="/#historia" onClick={(event) => handleSectionClick(event, 'historia')}>História</Link>
        <Link href="/#equipe" onClick={(event) => handleSectionClick(event, 'equipe')}>Nossa Equipe</Link>
        <Link href="/selecao">Seleção</Link>
        <Link href="/#contato" onClick={(event) => handleSectionClick(event, 'contato')}>Contato</Link>
      </ul>
    </nav>
  );
}
