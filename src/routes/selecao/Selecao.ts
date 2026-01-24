import { writable } from 'svelte/store';

type FAQ = {
    question: string;
    answer: string;
    open: boolean;
};

const initialFaqs: FAQ[] = [
    { question: "Estou no início do curso, posso participar do processo seletivo?", answer: "Sim! Nosso grupo é formado por alunos de diferentes cursos e níveis, portanto, o PET-Informática é um ambiente de aprendizagem, não importa o semestre que esteja.", open: false },
    { question: "Bolsistas pelo PROUNI podem participar?", answer: "Sim! Você só não pode estar recebendo outros tipos de bolsa (monitoria, IC, etc) ou estar vinculado a qualquer tipo de estágio.", open: false },
    { question: "Como funciona a rotina de atividades no PET-Informática?", answer: "Nossa carga horária é de 20h semanais (4h diárias). O PET-Informática possui uma sala localizada no prédio 32 para realização das atividades diárias.", open: false },
    { question: "Estou com dificuldades com a inscrição, como entrar em contato?", answer: "Você pode enviar um email para petinf.pucrs@gmail.com, vamos te atender o mais breve possível.", open: false }
];

export const faqs = writable<FAQ[]>(initialFaqs);

export function toggleFAQ(index : number) {
    faqs.update(currentFaqs => {
        currentFaqs[index].open = !currentFaqs[index].open;
        return currentFaqs;
    })
}