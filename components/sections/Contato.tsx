import React from 'react';
import { FaGithub, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import styles from './Contato.module.css';

export default function Contato() {
  return (
    <section className={styles.contatoSection}>
      <div className={styles.contatoTitle}>Contatos e Redes Sociais</div>
      <div className={styles.redesContainer}>
        <a className={styles.redeLink} href="https://www.instagram.com/petinfpucrs" target="_blank" rel="noopener noreferrer">
          <div className={styles.redeItem}>
            <FaInstagram className={styles.iconeRede}/>
            <span>@petinfpucrs</span>
          </div>
        </a>
        <a className={styles.redeLink} href="https://www.youtube.com/@petinfpucrs" target="_blank" rel="noopener noreferrer">
          <div className={styles.redeItem}>
            <FaYoutube className={styles.iconeRede}/>
            <span>PET Informática PUCRS</span>
          </div>
        </a>
        <a className={styles.redeLink} href="https://github.com/PET-Inf" target="_blank" rel="noopener noreferrer">
          <div className={styles.redeItem}>
            <FaGithub className={styles.iconeRede}/>
            <span>PET Inf</span>
          </div>
        </a>
        <a className={styles.redeLink} href="mailto:petinf.pucrs@gmail.com" rel="noopener noreferrer">
          <div className={styles.redeItem}>
            <FaEnvelope className={styles.iconeRede}/>
            <span>petinf.pucrs@gmail.com</span>
          </div>
        </a>
      </div>
    </section>
  );
}
