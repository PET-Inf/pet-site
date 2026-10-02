"use client";

import React from 'react';
import Link from 'next/link';
import { useTimeline } from '@/hooks/useTimeline';
import styles from './Historia.module.css';

export default function Historia() {
  const { showMore, topEl, toggleShowMore } = useTimeline();

  return (
    <div className={styles.timelineSection}>
      <div className={styles.contentContainer} ref={topEl}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">História</h2>

        <div className={`${styles.timeline} ${!showMore ? styles.collapsed : ''}`}>
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <h3>Novembro de 1991</h3>
              <h4>Criação do PET-Informática</h4>
              <p>O PET-Inf foi criado na PUCRS ao final de 1991</p>
            </div>
            <div className={styles.timelineCircle}></div>
          </div>

          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.timelineContent}>
              <h3>1991</h3>
              <h4>Prof. Dr. Álvaro Guarda</h4>
            </div>
            <div className={styles.timelineCircle}></div>
          </div>

          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineCircle}></div>
            <div className={styles.timelineContent}>
              <h3>1993</h3>
              <h4>Prof. Dr. Afonso Orth</h4>
            </div>
          </div>

          {!showMore && (
            <div className={styles.verMaisContainer}>
              <button
                className={styles.verMais}
                onClick={toggleShowMore}
                aria-expanded={showMore}
                aria-controls="timeline-more"
              >
                Ver mais
              </button>
            </div>
          )}

          {showMore && (
            <div id="timeline-more">
              <div className={`${styles.timelineItem} ${styles.right}`}>
                <div className={styles.timelineContent}>
                  <h3>1996</h3>
                  <h4>Prof. Dr. Celso Maciel</h4>
                </div>
                <div className={styles.timelineCircle}></div>
              </div>

              <div className={`${styles.timelineItem} ${styles.left}`}>
                <div className={styles.timelineCircle}></div>
                <div className={styles.timelineContent}>
                  <h3>2001</h3>
                  <h4>Prof. Dr. Fabiano Hessel</h4>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${styles.right}`}>
                <div className={styles.timelineCircle}></div>
                <div className={styles.timelineContent}>
                  <h3>2002</h3>
                  <h4>Prof. Dr. Luís Lamb</h4>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${styles.left}`}>
                <div className={styles.timelineCircle}></div>
                <div className={styles.timelineContent}>
                  <h3>2002</h3>
                  <h4>Profa. Dra. Lúcia Giraffa</h4>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${styles.right}`}>
                <div className={styles.timelineCircle}></div>
                <div className={styles.timelineContent}>
                  <h3>2005</h3>
                  <h4>Prof. Dr. Alfio Martini</h4>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${styles.left}`}>
                <div className={styles.timelineCircle}></div>
                <div className={styles.timelineContent}>
                  <h3>2010</h3>
                  <h4>Prof. Dr. Celso Maciel</h4>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${styles.right}`}>
                <div className={styles.timelineCircle}></div>
                <div className={styles.timelineContent}>
                  <h3>2011</h3>
                  <h4>Prof. Dr. Tiago Ferreto</h4>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${styles.left}`}>
                <div className={styles.timelineCircle}></div>
                <div className={styles.timelineContent}>
                  <h3>2018</h3>
                  <h4>Prof. Dr. Alfio Martini</h4>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${styles.right}`}>
                <div className={styles.timelineCircle}></div>
                <div className={styles.timelineContent}>
                  <h3>2019</h3>
                  <h4>Prof. Dr. Rafael Garibotti</h4>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${styles.left}`}>
                <div className={styles.timelineCircle}></div>
                <div className={styles.timelineContent}>
                  <h3>2020</h3>
                  <h4>Prof. Dr. Tiago Ferreto</h4>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${styles.right}`}>
                <div className={styles.timelineCircle}></div>
                <div className={styles.timelineContent}>
                  <h3>2023 - Atualmente</h3>
                  <h4>Profa. Dra. Milene Silveira</h4>
                </div>
              </div>
            </div>
          )}

          {showMore && (
            <>
              <div className={styles.timelineBottomCircle}>
                <Link href="/selecao">Faça parte da nossa história!</Link>
              </div>
              <div className={styles.verMaisContainer}>
                <button
                  className={styles.verMais}
                  onClick={toggleShowMore}
                  aria-expanded={showMore}
                  aria-controls="timeline-more"
                >
                  Ver menos
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
