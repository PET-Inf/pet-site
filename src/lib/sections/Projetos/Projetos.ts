    import { base } from '$app/paths';
import { writable } from 'svelte/store';

// Define a type for a project for better type safety
export type Project = {
    id: number;
    title: string;
    image: string;
    description: string;
    technologies?: string[];
    status: string;
};

// Writable stores for reactive state
export const selectedProject = writable<Project | null>(null);
export const showModal = writable(false);

export const projects: Project[] = [
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
        title: "InterPET",
        image: `${base}/projetos/interpet.jpeg`,
        description: `O InterPET da PUCRS é um evento de integração e extensão extracurricular que reúne os diferentes Grupos do Programa de Educação Tutorial (PET) da Universidade e, frequentemente, envolve a comunidade interna e externa. Ele é uma das atividades promovidas pelos Grupos PET (PET Informática, Letras, Biologia e Psicologia) para complementar a formação dos alunos.`,
        status: "Recorrente"
    },
    {
        id: 4,
        title: "PET-Talks",
        image: `${base}/projetos/pet-talks.jpeg`,
        description: `O PET Talks é um projeto específico do PET-Informática da PUCRS focado em compartilhar conhecimento técnico, profissional e de carreira com a comunidade acadêmica, principalmente os estudantes da área. Ele se configura como um ciclo de palestras e eventos que geralmente traz convidados de destaque.`,
        status: "Recorrente"
    }
];

// Function to open the modal, updates the stores
export function openModal(project: Project) {
    selectedProject.set(project);
    showModal.set(true);
}

// Function to close the modal, resets the stores
export function closeModal() {
    showModal.set(false);
    selectedProject.set(null);
}