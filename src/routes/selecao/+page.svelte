<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  type FAQ = {
    question: string;
    answer: string;
    open: boolean;
  };

  let faqs: FAQ[] = [
    { question: "Estou no início do curso, posso participar do processo seletivo?", answer: "Sim! Nosso grupo é formado por alunos de diferentes cursos e níveis, portanto, o PET-Informática é um ambiente de aprendizagem, não importa o semestre que esteja.", open: false },
    { question: "Bolsistas pelo PROUNI podem participar?", answer: "Sim! Você só não pode estar recebendo outros tipos de bolsa (monitoria, IC, etc) ou estar vinculado a qualquer tipo de estágio.", open: false },
    { question: "Como funciona a rotina de atividades no PET-Informática?", answer: "Nossa carga horária é de 20h semanais (4h diárias - Tarde). O PET-Informática possui uma sala localizada no prédio 32 para realização das atividades diárias.", open: false },
    { question: "Estou com dificuldades com a inscrição, como entrar em contato?", answer: "Você pode enviar um email para petinf.pucrs@gmail.com, vamos te atender o mais breve possível.", open: false }
  ];

  function toggleFAQ(index : number) {
    faqs[index].open = !faqs[index].open;
  }
</script>

<style>
  #capa {
    background-image: url('/pet_sala_selecao.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 90vh;
    display: flex;
    flex-direction: column;  
    justify-content: center; 
    align-items: center;     
    text-align: center;      
    color: white;        
  }
  
  #capa h1 {
    font-size: x-large;
    font-weight: bolder;
  }

  #capa h2 {
    font-size: larger;
    font-weight: 600;
  }

  #FAQ {
    max-width: 600px;
    margin: 4rem auto;
  }

  #FAQ h2 {
    text-align: center;
    font-weight: 600;
    font-size: larger;
    margin-bottom: 2rem;
  }

  .faq-item {
    padding: 0.5rem 0;
    position: relative;
  }

  .question {
    display: flex;
    flex-direction: column; 
    align-items: flex-start; 
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 0;
    font: inherit;
  }

  .question::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    border: solid black;
    border-width: 0 2px 2px 0;
    padding: 5px;
    transition: transform 0.3s;
  }

  .question.active::after {
    transform: translateY(-50%) rotate(-135deg);
  }

  .bar {
    display: block;          
    width: 600px;             
    height: 4px;             
    background-color: black; 
    border-radius: 3px;      
    margin-top: 0.5rem;     
  }

  .answer {
    padding: 0.5rem 0 0.5rem 1rem;
  } 
</style>

<Navbar />

<main>
  <section id = "capa">
    <h1>Seleção PET - Informática</h1>
    <h2>Faça parte do nosso time!</h2>
  </section>

  <section id = "descricao">
    <h5>Descrição</h5>
    <p>No PET-Informática, com a orientação de um professor tutor, temos a oportunidade de desenvolver atividades de ensino, pesquisa e extensão com estudantes de diferentes cursos da área da informática, além disso, já desenvolvemos projetos em parceria com empresas do TECNOPUC e grupos de pesquisa dos programas de pós-graduação da PUCRS. Inscreva-se!</p>
    <ul>
      <li>Bolsa: R$ 700,00</li>
      <li> Carga horária: 4 horas diárias durante a tarde - 20 horas semanais</li>
    </ul>
  </section>
  
  <section id = "requisitos">
    <h5>Requisitos:</h5>
    <ul>
      <li>Ser aluno de:</li>
      <ul>
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

  <section id = "Botões">
    <a href="https://drive.google.com/file/d/1u7Za-UogMTfvVt7gZWn_Iw0OWSxTftKf/view">Edital Completo</a>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSclq8yLzKJFDFoJHNJWtzLTCsW15EYA1xiyQV7_XErCCobYrw/closedform">Inscreva-se</a>
  </section>

  <section id="FAQ">
  <h2>Perguntas Frequentes</h2>
  {#each faqs as faq, i}
    <div class="faq-item">
      <button type="button" class="question {faq.open ? 'active' : ''}" on:click={() => toggleFAQ(i)}>
        <span class="text">{faq.question}</span>
        <!-- seta ainda com ::after -->
        <span class="bar"></span>
      </button>

      {#if faq.open}
        <div class="answer">
          {faq.answer}
        </div>
      {/if}
    </div>
  {/each}
</section>

</main>

<Footer />