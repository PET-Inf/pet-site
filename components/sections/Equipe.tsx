'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { slides } from '@/data/EquipeData';
import styles from './Equipe.module.css';

export default function Equipe() {
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      let newPerPage = 5;
      if (window.innerWidth < 640) newPerPage = 1;
      else if (window.innerWidth < 850) newPerPage = 2;
      else if (window.innerWidth < 1100) newPerPage = 3;
      else if (window.innerWidth < 1350) newPerPage = 4;
      
      setPerPage(newPerPage);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(slides.length / perPage);
  const safePage = Math.min(page, Math.max(0, totalPages - 1));

  function navigate(next: number, dir: 'left' | 'right') {
    setDirection(dir);
    setAnimKey((k) => k + 1);
    setPage(next);
  }

  const visible = slides.slice(safePage * perPage, safePage * perPage + perPage);

  return (
    <div className={`componente-carrossel-wrapper ${styles.wrapper}`}>
      <h2 className={styles.title}>Equipe do PET</h2>

      {/* Cards */}
      <div
        key={animKey}
        className={`${styles.cardsContainer} ${
          direction === 'right' ? styles.slideRight : styles.slideLeft
        }`}
      >
        {visible.map((slide, i) => (
          <div key={safePage * perPage + i} className={styles.card} suppressHydrationWarning>
            <div className={styles.avatarWrapper}>
              <Image className={styles.avatarImage} src={slide.imgSrc} key={slide.imgSrc} alt={slide.altText} width={130} height={130} />
            </div>
            <p className={styles.name}>{slide.description}</p>
            <p className={styles.course}>{slide.course}</p>
            {slide.ingresso && (
              <p className={styles.ingresso}>Ingresso: {slide.ingresso}</p>
            )}
            {slide.position && (
              <p className={styles.position}>{slide.position}</p>
            )}
            <div className={styles.socialLinks}>
              {slide.social1 && slide.social1 !== '#' && slide.social1Icon && (
                <a href={slide.social1} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  {React.createElement(slide.social1Icon, { size: 30 })}
                </a>
              )}
              {slide.social2 && slide.social2 !== '#' && slide.social2Icon && (
                <a href={slide.social2} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  {React.createElement(slide.social2Icon, { size: 30 })}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navegação */}
      <div className={styles.nav}>
        <button
          onClick={() => navigate((safePage - 1 + totalPages) % totalPages, 'left')}
          className={styles.navBtn}
          aria-label="Página anterior"
        >
          ← Anterior
        </button>

        {/* Dots */}
        <div className={styles.dots}>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => navigate(idx, idx > safePage ? 'right' : 'left')}
              className={`${styles.dot} ${idx === safePage ? styles.dotActive : ''}`}
              aria-label={`Página ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => navigate((safePage + 1) % totalPages, 'right')}
          className={styles.navBtn}
          aria-label="Próxima página"
        >
          Próxima →
        </button>
      </div>

      <p className={styles.counter} suppressHydrationWarning>
        {safePage + 1} / {totalPages}
      </p>
    </div>
  );
}
