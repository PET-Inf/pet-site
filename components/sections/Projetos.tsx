"use client";

import React, { useState } from 'react';
import { projetos } from '@/data/ProjetosData';
import styles from './Projetos.module.css';

type Project = (typeof projetos)[number];

const statusClassMap: Record<string, string> = {
  'Em desenvolvimento': styles.statusEmDesenvolvimento,
  'Em andamento':       styles.statusEmDesenvolvimento,
  'Concluído':          styles.statusConcluido,
  'Planejamento':       styles.statusPlanejamento,
  'Recorrente':         styles.statusRecorrente,
};

/* 
  Os projetos estão na pasta @/data
  Qualquer adição ou alteração em um projeto deve ser feito lá
*/

export default function Projetos() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className={styles.projectsSection}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Projetos</h2>
      <p className="text-lg mb-2 text-center">Veja os trabalhos em desenvolvimento!</p>
      <div className={styles.container}>
        {projetos.map((project) => (
          <div
            key={project.id}
            className={styles.card}
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
            tabIndex={0}
            role="button"
          >
            <p className={styles.cardText}>{project.title}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className={styles.modalOverlay}
          role="button"
          tabIndex={0}
          aria-label="Fechar modal"
          onClick={() => setSelectedProject(null)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedProject(null)}
        >
          <div
            className={styles.modalContent}
            role="dialog"
            aria-modal="true"
            tabIndex={0}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
              <button className={styles.closeButton} onClick={() => setSelectedProject(null)}>×</button>
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalDescription}>{selectedProject.description}</p>

              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className={styles.modalTechnologies}>
                  <h4>Tecnologias:</h4>
                  <ul className={styles.techList}>
                    {selectedProject.technologies.map((tech) => (
                      <li key={tech} className={styles.techItem}>{tech}</li>
                    ))}
                  </ul>
                </div>
              )}

              <p>
                <strong>Status:</strong>{' '}
                <span className={`${styles.modalStatus} ${statusClassMap[selectedProject.status] ?? ''}`}>
                  {selectedProject.status}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
