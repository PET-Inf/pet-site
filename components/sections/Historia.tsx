"use client";

import React from 'react';
import Link from 'next/link';
import { useTimeline } from '@/hooks/useTimeline';
import styles from './Historia.module.css';
import { initialItems, extraItems, type TimelineItem } from '@/data/HistoriaData';

function TimelineEntry({
  item,
  side,
  circleFirst = false,
}: {
  item: TimelineItem;
  side: 'left' | 'right';
  circleFirst?: boolean;
}) {
  const content = (
    <div className={styles.timelineContent}>
      <h3>{item.year}</h3>
      <h4>{item.title}</h4>
      {item.description && <p>{item.description}</p>}
    </div>
  );
  const circle = <div className={styles.timelineCircle}></div>;

  return (
    <div className={`${styles.timelineItem} ${styles[side]}`}>
      {circleFirst ? (
        <>
          {circle}
          {content}
        </>
      ) : (
        <>
          {content}
          {circle}
        </>
      )}
    </div>
  );
}

export default function Historia() {
  const { showMore, topEl, toggleShowMore } = useTimeline();

  return (
    <div className={styles.timelineSection}>
      <div className={styles.contentContainer} ref={topEl}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">História</h2>

        <div className={`${styles.timeline} ${!showMore ? styles.collapsed : ''}`}>
          {initialItems.map((item, index) => {
            const side = index % 2 === 0 ? 'left' : 'right';
            const circleFirst = index >= 1 && side === 'left';
            return (
              <TimelineEntry
                key={`initial-${index}`}
                item={item}
                side={side}
                circleFirst={circleFirst}
              />
            );
          })}

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
              {extraItems.map((item, index) => {
                const overallIndex = initialItems.length + index;
                const side = overallIndex % 2 === 0 ? 'left' : 'right';
                const circleFirst = side === 'left';
                return (
                  <TimelineEntry
                    key={`extra-${index}`}
                    item={item}
                    side={side}
                    circleFirst={circleFirst}
                  />
                );
              })}
            </div>
          )}
          <div className={styles.timelineBottomCircle}>
            <Link href="/selecao">Faça parte da nossa história!</Link>
          </div>
          {showMore && (
            <>
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
