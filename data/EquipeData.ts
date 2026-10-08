import { FaGraduationCap, FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { ElementType } from "react";


export type Slide = {
    imgSrc: string;
    altText: string;
    description: string;
    position: string | "Petiano";
    course: string;
    ingresso?: string;
    social1: string | "Petiano";
    social1Icon: ElementType | "Petiano";
    social2: string | "Petiano";
    social2Icon: ElementType | "Petiano";
};

export const slides: Slide[] = [
    { 
        imgSrc: "/fotos_equipe/milene.png", 
        altText: "Foto da Milene", 
        description: "Milene Silveira",
        position: "Tutora",
        course: "Doutora em Informática",
        social1: "http://lattes.cnpq.br/0483707899231728",
        social1Icon: FaGraduationCap,
        social2: "https://www.linkedin.com/in/milene-silveira-50a914a8/",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/amanda.jpg", 
        altText: "Foto da Amanda", 
        description: "Amanda Luiz",
        position: "Petiano",
        course: "Sistemas da Informação",
        ingresso: "11/2023",
        social1: "http://github.com/mattsue",
        social1Icon: FaGithub,
        social2: "https://www.linkedin.com/in/amannda",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/gustavo.png", 
        altText: "Foto do Gustavo", 
        description: "Gustavo Gallo",
        position: "Petiano",
        course: "Engenharia da Computação",
        ingresso: "09/2024",
        social1: "https://github.com/gustavgallo",
        social1Icon: FaGithub,
        social2: "https://www.linkedin.com/in/gustavo-tibolla-gallo/",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/gabriel.jpg", 
        altText: "Foto do Gabriel Bremm", 
        description: "Gabriel Bremm",
        position: "Petiano",
        course: "Ciência da Computação",
        ingresso: "04/2025",
        social1: "https://github.com/gbremm",
        social1Icon: FaGithub,
        social2: "https://www.linkedin.com/in/gabriel-bremm-2993a1360/",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/joao.jpeg", 
        altText: "Foto do João Gabriel", 
        description: "João Gabriel",
        position: "Petiano",
        course: "Ciência da Computação",
        ingresso: "04/2025",
        social1: "http://github.com/JhanosC",
        social1Icon: FaGithub,
        social2: "https://br.linkedin.com/in/jo%C3%A3o-sbardelotto",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/lucas.jpeg", 
        altText: "Foto do Lucas", 
        description: "Lucas Gomes",
        position: "Petiano",
        course: "Engenharia da Computação",
        ingresso: "04/2025",
        social1: "https://github.com/LucasGonGo",
        social1Icon: FaGithub,
        social2: "https://www.linkedin.com/in/lucas-gongo/",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/vinicius.jpg", 
        altText: "Foto do Vinicius", 
        description: "Vinícius Ross",
        position: "Petiano",
        course: "Ciência da Computação",
        ingresso: "04/2025",
        social1: "https://github.com/viniross",
        social1Icon: FaGithub,
        social2: "https://www.linkedin.com/in/vinicius-ross/",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/george.jpeg", 
        altText: "Foto do George",
        description: "George Rother",
        position: "Petiano",
        course: "Ciência da Computação",
        ingresso: "06/2025",
        social1: "https://github.com/George-Rot",
        social1Icon: FaGithub,
        social2: "https://www.linkedin.com/in/george-rother-4a0602272/", 
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/henrique.jpeg", 
        altText: "Foto do Henrique",
        description: "Henrique Horch",
        position: "Petiano",
        course: "Ciência da Computação",
        ingresso: "12/2025",
        social1: "https://github.com/HorcHenrique",
        social1Icon: FaGithub,
        social2: "https://www.linkedin.com/in/henrique-carlesso-pereira-horch-4a42b8378/",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/leonardo.jpeg", 
        altText: "Foto do Leonardo",
        description: "Leonardo Soares",
        position: "Petiano",
        course: "Engenharia de Software",
        ingresso: "12/2025",
        social1: "https://github.com/LeonardoSoares09",
        social1Icon: FaGithub,
        social2: "https://www.linkedin.com/in/leonardo-soares-da-silva-063741290/",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/marco.jpeg", 
        altText: "Foto do Marco",
        description: "Marco Rodegheri",
        position: "Petiano",
        course: "Ciência da Computação",
        ingresso: "12/2025",
        social1: "https://github.com/MarcoRodegheri",
        social1Icon: FaGithub,
        social2: "https://www.linkedin.com/in/marco-rodegheri/",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/milena.jpeg", 
        altText: "Foto da Milena",
        description: "Milena Bregalda",
        position: "Petiano",
        course: "Ciência da Computação",
        ingresso: "12/2025",
        social1: "https://github.com/milenabregalda",
        social1Icon: FaGithub,
        social2: "https://br.linkedin.com/in/milenabregalda",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/vanessa.jpeg", 
        altText: "Foto da Vanessa",
        description: "Vanessa Rutkoski",
        position: "Petiano",
        course: "Engenharia de Software",
        ingresso: "12/2025",
        social1: "https://github.com/nessartk",
        social1Icon: FaGithub,
        social2: "https://www.linkedin.com/in/nessartk/",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/arthur.jpeg", 
        altText: "Foto do Arthur",
        description: "Arthur Pascual",
        position: "Petiano",
        course: "Engenharia de Software",
        ingresso: "03/2026",
        social1: "https://github.com/ArthurPascual",
        social1Icon: FaGithub,
        social2: "https://www.linkedin.com/in/arthur-vinhas-pascual-1000a8215/",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/gustavosaul.jpeg", 
        altText: "Foto do Gustavo Saul",
        description: "Gustavo Saul",
        position: "Petiano",
        course: "Ciência da Computação",
        ingresso: "03/2026",
        social1: "https://github.com/gustavorsaul",
        social1Icon: FaGithub,
        social2: "https://www.linkedin.com/in/gustavo-saul/",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/rafael.jpeg", 
        altText: "Foto do Rafael",
        description: "Rafael Urbani",
        position: "Petiano",
        course: "Ciência da Computação",
        ingresso: "03/2026",
        social1: "https://github.com/rafaurbani",
        social1Icon: FaGithub,
        social2: "https://linkedin.com/in/rafaelurbani",
        social2Icon: FaLinkedinIn
    },

    { 
        imgSrc: "/fotos_equipe/roger.jpeg", 
        altText: "Foto do Roger",
        description: "Roger Ehlert",
        position: "Petiano",
        course: "Ciência da Computação",
        ingresso: "03/2026",
        social1: "https://github.com/RogerEhlert",
        social1Icon: FaGithub,
        social2: "https://www.linkedin.com/in/roger-ehlert/",
        social2Icon: FaLinkedinIn
    },
 ];


