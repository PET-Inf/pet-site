import React from 'react';
import { FaGithub, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function Contato() {
  return (
    <section className="contato-section">
      <div className="contato-title">Contatos e Redes Sociais</div>
      <div className="redes-container">
        <a className="rede-link" href="https://www.instagram.com/petinfpucrs" target="_blank" rel="noopener noreferrer">
          <div className="rede-item">
            <FaInstagram className="icone-rede"/>
            <span>@petinfpucrs</span>
          </div>
        </a>
        <a className="rede-link" href="https://www.youtube.com/@petinfpucrs" target="_blank" rel="noopener noreferrer">
          <div className="rede-item">
            <FaYoutube className="icone-rede"/>
            <span>PET Informática PUCRS</span>
          </div>
        </a>
        <a className="rede-link" href="https://github.com/PET-Inf" target="_blank" rel="noopener noreferrer">
          <div className="rede-item">
            <FaGithub className="icone-rede"/>
            <span>PET Inf</span>
          </div>
        </a>
        <a className="rede-link" href="mailto:petinf.pucrs@gmail.com" rel="noopener noreferrer">
          <div className="rede-item">
            <FaEnvelope className="icone-rede"/>
            <span>petinf.pucrs@gmail.com</span>
          </div>
        </a>
      </div>
    </section>
  );
}
