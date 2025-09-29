<script lang="ts">
    import { pageTitle } from '../../stores';
    import { base } from '$app/paths'; 
    pageTitle.set('PET - Informática');
    
    let selectedProject: { title: any; description: any; technologies: any; status: string; } | null = null;
    let showModal = false;
    
    const projects = [
        {
            id: 1,
            title: "Matriz Curricular",
            image: `${base}/projetos/matriz_curricular_icone.png`,
            description: `Atualmente, a PUCRS disponibiliza as matrizes curriculares de forma estática em arquivos PDFs no moodle de cada curso, dificultando o acesso de outros alunos as cadeiras de cursos diferentes.
                            Inicialmente, a solução deve funcionar como um site estático com as matrizes curriculares dos cursos de computação da Escola Politécnica.`,
            technologies: ["Java", "SpringBoot", "MySQL", "React", "TypeScript"],
            status: "Em desenvolvimento"
        },
        {
            id: 2,
            title: "Site do PET",
            image: `${base}/logo_PET.png`,
            description: "O site que você está acessando agora!",
            technologies: ["Svelte", "TypeScript", "Tailwind"],
            status: "Em desenvolvimento"
        },
        {
            id: 3,
            title: "Enade App",
            image: `${base}/projetos/enade.jpg`,
            description: `O Exame Nacional de Desempenho dos Estudantes (ENADE) é aplicado pelo INEP desde 2004, o objetivo é avaliar o rendimento dos concluintes dos cursos de graduação em relação aos conteúdos programáticos previstos nas diretrizes curriculares dos cursos, o desenvolvimento de competências e habilidades necessárias ao aprofundamento da formação geral e profissional, e o nível de atualização dos estudantes com relação à realidade brasileira e mundial.

                        Os resultados do ENADE, aliados às respostas do Questionário do Estudante, são insumos para o cálculo dos Indicadores de Qualidade da Educação Superior. Conforme o site oficial do INEP, a inscrição é obrigatória para estudantes ingressantes e concluintes habilitados de cursos de bacharelado e superiores de tecnologia vinculados às áreas de avaliação da edição.

                        O ENADEApp é um aplicativo similar aos oferecidos como forma de estudo para o ENEM, ou seja, além de manter as principais informações a respeito do simulado (datas, horário, locais, etc), o foco principal da aplicação é um banco de questões de edições passadas das provas.

                        Os estudantes podem utilizar o aplicativo como uma competição de perguntas e respostas, portanto, o indivíduo que responder corretamente as questões propostas irá somar pontos para ser adicionado ao ranking dos utilizadores do ENADEApp, questões estas que serão divididas em diferentes áreas do conhecimento e cursos.

                        O ENADEApp está em fase de desenvolvimento para Android e IOS com as ferramentas/linguagens a seguir: `,
            technologies: ["Unity", "SQL", "C#"],
            status: "Congelado"
        }
    ];
    
    function openModal(project: { id: number; title: string; image: string; description: string; technologies: string[]; status: string; }) {
        selectedProject = project;
        showModal = true;
    }
    
    function closeModal() {
        showModal = false;
        selectedProject = null;
    }
</script>

<style>
.projects-section {
    text-align: center;
    padding-top: 2vw;    
    padding-bottom: 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: center; 
}

.container {
    display: flex;
    flex-wrap: wrap;          
    justify-content: center;  
    gap: 20px;                
    margin-top: 20px;
}

.card {
    width: 400px;
    aspect-ratio: 400 / 220;
    background: #000000;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    color: #F2F2F2;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
    z-index: 1;
}

.card-text {
    background: rgba(30, 30, 30, 0.9);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 15px 0;
    margin: 0;
    font-weight: bold;
    font-size: 1.1rem;
    z-index: 2;
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
}

.modal-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin: 0;
}

.close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
    padding: 0.5rem;
}

.close-button:hover {
    color: #333;
}

.modal-body {
    color: #333;
}

.modal-description {
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.modal-technologies {
    margin-bottom: 1rem;
}

.modal-technologies h4 {
    margin-bottom: 0.5rem;
    color: #1A447C;
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
}

.tech-item {
    background: #f0f0f0;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.9rem;
    color: #666;
}

.modal-status {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: bold;
    display: inline-block;
}

.status-desenvolvimento {
    background: #fff3cd;
    color: #856404;
}

.status-concluido {
    background: #d4edda;
    color: #155724;
}

.status-planejamento {
    background: #d1ecf1;
    color: #0c5460;
}

/* Responsividade */
@media (max-width: 768px) {
    .card {
        width: 45%; 
    }
    
    .modal-content {
        width: 95%;
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    .projects-section {
        padding-top: 6vw;    
        padding-bottom: 6vw; 
    }

    .container {
        padding: 0 24px;
    }
    
    .card {
        width: 100%; 
    }
    
    .modal-content {
        width: 95%;
        padding: 1rem;
    }
    
    .modal-title {
        font-size: 1.25rem;
    }
}
</style>

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
{#if showModal && selectedProject}
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
                <h3 class="modal-title">{selectedProject.title}</h3>
                <button class="close-button" on:click={closeModal}>×</button>
            </div>
            <div class="modal-body">
                <p class="modal-description">{selectedProject.description}</p>
                
                <div class="modal-technologies">
                    <h4>Tecnologias:</h4>
                    <ul class="tech-list">
                        {#each selectedProject.technologies as tech}
                            <li class="tech-item">{tech}</li>
                        {/each}
                    </ul>
                </div>
                
                <p>
                    <strong>Status:</strong> 
                    <span class="modal-status status-{selectedProject.status.toLowerCase().replace(' ', '-')}">
                        {selectedProject.status}
                    </span>
                </p>
            </div>
        </div>
    </div>
{/if}