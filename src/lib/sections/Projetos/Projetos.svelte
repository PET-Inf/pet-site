<script lang="ts">
    import './Projetos.css'
    import {projects, openModal, showModal, closeModal, selectedProject} from './Projetos'
    import { pageTitle } from '../../../stores';
    
    pageTitle.set('PET - Informática');
    
    
</script>

<svelte:head>
  <title>{$pageTitle}</title>
</svelte:head>

<div class="projects-section">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Projetos</h2>
    <p class="text-lg mb-2">Veja os trabalhos em desenvolvimento!</p>
    <div class="container">
        {#each projects as project}
            <div 
                class="card" 
                style="background-image: url('{project.image}')"
                on:click={() => openModal(project)}
                on:keydown={(e) => e.key === 'Enter' && openModal(project)}
                tabindex="0"
                role="button"
            >
                <p class="card-text">{project.title}</p>
            </div>
        {/each}
    </div>
</div>

<!-- Modal -->
{#if $showModal && $selectedProject}
    <div
        class="modal-overlay"
        role="button"
        tabindex="0"
        aria-label="Fechar modal"
        on:click={closeModal}
        on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && closeModal()}
    >
        <div
            class="modal-content"
            role="dialog"
            aria-modal="true"
            tabindex="0"
            on:click|stopPropagation
            on:keydown={(e) => e.stopPropagation()}
        >
            <div class="modal-header">
                <h3 class="modal-title">{$selectedProject.title}</h3>
                <button class="close-button" on:click={closeModal}>×</button>
            </div>
            <div class="modal-body">
                <p class="modal-description">{$selectedProject.description}</p>
                
                {#if $selectedProject.technologies && $selectedProject.technologies.length > 0}
                    <div class="modal-technologies">
                        <h4>Tecnologias:</h4>
                        <ul class="tech-list">
                            {#each $selectedProject.technologies as tech}
                                <li class="tech-item">{tech}</li>
                            {/each}
                        </ul>
                    </div>
                {/if}
                
                <p>
                    <strong>Status:</strong> 
                    <span class="modal-status status-{$selectedProject.status.toLowerCase().replace(' ', '-')}">
                        {$selectedProject.status}
                    </span>
                </p>
            </div>
        </div>
    </div>
{/if}