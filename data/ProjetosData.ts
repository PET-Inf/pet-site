export type Project = {
    id: number;
    title: string;
    image: string;
    description: string;
    technologies?: string[];
    status: string;
};

export const projetos: Project[] = [
    {
        id: 1,
        title: "Matriz Curricular",
        image: `/projetos/matriz_curricular_icone.png`,
        description: `Atualmente, a PUCRS disponibiliza as matrizes curriculares de forma estática em arquivos PDFs no moodle de cada curso, dificultando o acesso de outros alunos as cadeiras de cursos diferentes.
                        Inicialmente, a solução deve funcionar como um site estático com as matrizes curriculares dos cursos de computação da Escola Politécnica.`,
        technologies: ["Java", "SpringBoot", "MySQL", "React", "TypeScript"],
        status: "Em desenvolvimento"
    },
    {
        id: 2,
        title: "Site do PET",
        image: `/projetos/site_PET_2.png`,
        description: "O site que você está acessando agora!",
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        status: "Em desenvolvimento"
    },
    {
        id: 3,
        title: "InterPET",
        image: `/projetos/interpet_2.jpeg`,
        description: `O InterPET da PUCRS é um evento de integração e extensão extracurricular que reúne os diferentes Grupos do Programa de Educação Tutorial (PET) da Universidade e, frequentemente, envolve a comunidade interna e externa. Ele é uma das atividades promovidas pelos Grupos PET (PET Informática, Letras, Biologia e Psicologia) para complementar a formação dos alunos.`,
        status: "Recorrente"
    },
    {
        id: 4,
        title: "PET-Talks",
        image: `/projetos/pet_talks.jpeg`,
        description: `O PET Talks é um projeto específico do PET-Informática da PUCRS focado em compartilhar conhecimento técnico, profissional e de carreira com a comunidade acadêmica, principalmente os estudantes da área. Ele se configura como um ciclo de palestras e eventos que geralmente traz convidados de destaque.`,
        status: "Recorrente"
    },
    {
        id: 5,
        title: "Letramento Digital",
        image: "/projetos/letramento_digital.jpeg",
        description: "O Letramento Digital visa o ensino sobre o uso básico de computadores para pessoas idosas. Temos 3 turmas com aulas semanais!",
        status: "Em andamento"
    },
    {
        id: 6,
        title: "Ensino de IA com o CESMAR",
        image: "/projetos/cesmar.jpeg",
        description: "Este projeto com o Centro Social Marista (CESMAR) visa ensinar aos seus integrantes sobre o uso correto de inteligência artificial. São três encontros que irão ocorrem no segundo semestre de 2026.",
        status: "Em andamento"
    }
];


