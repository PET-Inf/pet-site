"use client";

import React, { useState } from 'react';

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
      <section id="capa" style={{ backgroundImage: "url(/fotos_sala/PET_sala.jpeg)" }}>
        <div className="capa-overlay">
          <h1>Seleção PET - Informática</h1>
          <h2>Faça parte do nosso time!</h2>
        </div>
      </section>

      <div className="container mx-auto max-w-[1500px] px-4 py-8">
        <section id="descricao" className="mb-8">
          <h5 className="font-bold text-xl mb-4">Descrição:</h5>
          <p className="mb-4">No PET-Informática, com a orientação de um professor tutor, temos a oportunidade de desenvolver atividades de ensino, pesquisa e extensão com estudantes de diferentes cursos da área da informática, além disso, já desenvolvemos projetos em parceria com empresas do TECNOPUC e grupos de pesquisa dos programas de pós-graduação da PUCRS. Inscreva-se!</p>
          <ul className="list-disc pl-6">
            <li>Bolsa: R$ 700,00</li>
            <li> Carga horária: 4 horas diárias - 20 horas semanais</li>
          </ul>
        </section>
        
        <section id="requisitos" className="mb-8">
          <h5 className="font-bold text-xl mb-4">Requisitos:</h5>
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

        <section id="botoes" className="flex gap-4 mb-12">
          <a className="bg-[#1A447C] text-white px-6 py-2 rounded font-bold hover:bg-[#417FA6] transition" href="/EditalSelecao_PETInformatica_jun2026.pdf" target="_blank">Edital Completo</a>
          <a className="bg-[#1A447C] text-white px-6 py-2 rounded font-bold hover:bg-[#417FA6] transition" href="https://forms.gle/oCou8drHesQQN8nC6" target="_blank">Inscreva-se</a>
        </section>

        <section id="FAQ" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes</h2>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item border-b border-gray-300 py-4">
              <button 
                type="button" 
                className={`question w-full text-left font-bold text-lg flex justify-between items-center ${faq.open ? 'active text-[#417FA6]' : ''}`} 
                onClick={() => toggleFAQ(i)}
              >
                <span className="text">{faq.question}</span>
                <span className="text-2xl">{faq.open ? '-' : '+'}</span>
              </button>

              {faq.open && (
                <div className="answer mt-4 text-gray-700">
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
