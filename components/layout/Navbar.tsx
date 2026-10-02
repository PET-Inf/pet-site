"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="menu-toggle-wrapper">
        <button className="menu-toggle" onClick={toggleMenu}></button>
        {menuOpen && (
          <div className="dropdown">
            <Link href="/#sobre" onClick={closeMenu}>Sobre</Link>
            <Link href="/#projetos" onClick={closeMenu}>Projetos</Link>
            <Link href="/#historia" onClick={closeMenu}>História</Link>
            <Link href="/#equipe" onClick={closeMenu}>Nossa Equipe</Link>
            <Link href="/selecao" onClick={closeMenu}>Seleção</Link>
            <Link href="/#contato" onClick={closeMenu}>Contato</Link>
          </div>
        )}
      </div>

      <Link href="/#inicio" className="logo-link">
        <Image src="/logo_PET.png" alt="Logo" className="logo" width={150} height={150} />
      </Link>

      <ul className="menu">
        <Link href="/#sobre">Sobre</Link>
        <Link href="/#projetos">Projetos</Link>
        <Link href="/#historia">História</Link>
        <Link href="/#equipe">Nossa Equipe</Link>
        <Link href="/selecao">Seleção</Link>
        <Link href="/#contato">Contato</Link>
      </ul>
    </nav>
  );
}
