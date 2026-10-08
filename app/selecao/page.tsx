"use client";

import React, { useState } from 'react';
import styles from './Selecao.module.css';

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

export default function Selecao() {
  const [faqs, setFaqs] = useState<FAQ[]>(initialFaqs);

  const toggleFAQ = (index: number) => {
    const newFaqs = [...faqs];
    newFaqs[index].open = !newFaqs[index].open;
    setFaqs(newFaqs);
  };

  return (
    <main>
      <section id="capa" className={styles.capa} style={{ backgroundImage: "url(/fotos_sala/PET_sala.jpeg)" }}>
        <div className={styles.capaOverlay}>
          <h1>Seleção PET - Informática</h1>
          <h2>Faça parte do nosso time!</h2>
        </div>
      </section>

      <div className={styles.container}>
        <section id="descricao" className={styles.descricao}>
          <h5 className={styles.sectionTitle}>Descrição:</h5>
          <p>No PET-Informática, com a orientação de um professor tutor, temos a oportunidade de desenvolver atividades de ensino, pesquisa e extensão com estudantes de diferentes cursos da área da informática, além disso, já desenvolvemos projetos em parceria com empresas do TECNOPUC e grupos de pesquisa dos programas de pós-graduação da PUCRS. Inscreva-se!</p>
          <ul className="list-disc pl-6">
            <li>Bolsa: R$ 700,00</li>
            <li> Carga horária: 4 horas diárias - 20 horas semanais</li>
          </ul>
        </section>

        <section id="requisitos" className={styles.requisitos}>
          <h5 className={styles.sectionTitle}>Requisitos:</h5>
          <ul className="list-disc pl-6 mb-4">
            <li>Ser aluno de:</li>
            <ul className="list-disc pl-6 mt-2 mb-2">
              <li>Ciência da Computação</li>
              <li>Ciência de Dados e Inteligência Artificial</li>
              <li>Engenharia de Computação</li>
              <li>Engenharia de Software</li>
              <li>Sistemas de Informação</li>
            </ul>
            <li>Não estar vinculado a nenhuma bolsa de pesquisa ou estágio remunerado.</li>
            <li>Possuir bom rendimento acadêmico.</li>
          </ul>
        </section>

        <section id="botoes" className={styles.botoes}>
          <a href="/EditalSelecao_PETInformatica_jun2026.pdf" target="_blank">Edital Completo</a>
          <a href="https://forms.gle/oCou8drHesQQN8nC6" target="_blank">Inscreva-se</a>
        </section>

        <section id="FAQ" className={styles.faq}>
          <h2>Perguntas Frequentes</h2>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqItem}>
              <button
                type="button"
                className={styles.question}
                onClick={() => toggleFAQ(i)}
              >
                <span>{faq.question}</span>
                <span className="text-2xl">{faq.open ? '-' : '+'}</span>
              </button>
              <div className={styles.bar} />

              {faq.open && (
                <div className={styles.answer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
