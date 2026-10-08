import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; PET - Informática {new Date().getFullYear()}</p>
      <div className={styles.logos}>
          <Image src="/logo_PUCRS.png" alt="Logo PUCRS" width={150} height={150}/>
          <Image src="/logo_MEC.png" alt="Logo MEC" width={150} height={50}/>
      </div>
      <p>Política de Privacidade</p>
    </footer>
  );
}
