"use client";

import React, { useState } from 'react';
import { projetos } from '@/data/ProjetosData';

type Project = (typeof projetos)[number];

export default function Projetos() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="projects-section">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Projetos</h2>
      <p className="text-lg mb-2 text-center">Veja os trabalhos em desenvolvimento!</p>
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        {projetos.map((project) => (
          <div 
            key={project.id}
            className="card" 
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
            tabIndex={0}
            role="button"
          >
            <p className="card-text">{project.title}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
            className="modal-overlay"
            role="button"
            tabIndex={0}
            aria-label="Fechar modal"
            onClick={() => setSelectedProject(null)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedProject(null)}
        >
            <div
                className="modal-content"
                role="dialog"
                aria-modal="true"
                tabIndex={0}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">
                    <h3 className="modal-title">{selectedProject.title}</h3>
                    <button className="close-button" onClick={() => setSelectedProject(null)}>×</button>
                </div>
                <div className="modal-body">
                    <p className="modal-description">{selectedProject.description}</p>
                    
                    {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                        <div className="modal-technologies">
                            <h4>Tecnologias:</h4>
                            <ul className="tech-list">
                                {selectedProject.technologies.map((tech) => (
                                    <li key={tech} className="tech-item">{tech}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    <p>
                        <strong>Status:</strong> 
                        <span className={`modal-status status-${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
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
