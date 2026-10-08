import React from 'react';
import styles from './Inicio.module.css';

export default function Inicio() {
  return (
    <>
      <div className={styles.banner} style={{ backgroundImage: "url(/fotos_sala/pet_sala.png)" }}>
        <h2>Desde 1991 realizando projetos inovadores!</h2>
      </div>
    </>
  );
}
