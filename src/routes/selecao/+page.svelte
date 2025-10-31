<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import { base } from '$app/paths';  

  import { pageTitle } from '../../stores';
  pageTitle.set('Seleção | PET - Informática');

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
    background-size: cover;
    background-position: center;
    min-height: 90vh;
    display: flex;
    flex-direction: column;  
    justify-content: center; 
    align-items: center;    
    text-align: center;      
    color: #F0F0F0;     
    padding: 1rem;   
  }

  .capa-overlay {
    background: rgba(0, 0, 0, 0.6);
    padding: 1rem 1.25rem;
    border-radius: 8px;
    display: inline-block;
    max-width: calc(100% - 2rem);
    box-sizing: border-box;
  }

  #capa h1 {
    font-size: clamp(1rem, 3vw, 2rem);
    font-weight: bolder;
  }

  #capa h2 {
    font-size: clamp(0.75rem, 2vw, 1.5rem);
    font-weight: 600;
  }

  .container {
    max-width: 1100px;   
    margin: 0 auto;      
    padding: 0 1rem; 
  }

  #descricao, #requisitos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    padding: 2rem 2rem 1rem 2rem;
  }

  h5 {
    font-weight: bold;
    font-size: clamp(0.6rem, 4vw, 1.4rem);
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;  
    list-style-position: inside; 
    margin-left: 1.5rem;     
    padding-left: 0;     
  }

  ul li {
    font-size: clamp(0.7rem, 3.2vw, 1rem); 
  }

  section > ul ul {
    list-style-type:circle; 
  }

  #descricao p {
    margin-bottom: 1rem;
    font-size: clamp(0.75rem, 3.5vw, 1.125rem);
  }

  #descricao li {
    margin-bottom: 0.5rem;   
  }

  #botoes {
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 2rem;
  }

  #botoes a {
    color: #F0F0F0;
    background-color: #1A447C;
    padding: 1.125rem 1.85rem;
    border-radius: 10px;
    font-size: 1rem;
    text-align: center;
    min-width: 150px;
  }

  #botoes a:hover {
    background-color: #045bac;
    transition: background .3s;
  }

  #FAQ {
    max-width: 600px;
    margin: 4rem auto;
  }

  #FAQ h2 {
    text-align: center;
    font-weight: bold;
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
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
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
    width: 100%;            
    height: 4px;             
    background-color: #000000; 
    border-radius: 3px;      
    margin-top: 0.5rem;     
  }

  .answer {
    padding: 0.5rem 0 0.5rem 1rem;
  } 

  @media (max-width: 768px) {
    #descricao, #requisitos {
      padding: 1rem;
    }

    #FAQ {
      margin: 2rem 1rem;
    }

    .bar {
      width: 90%;
    }
  }

  @media (max-width: 480px) {
    h5 { 
      font-size: 1rem; 
    }

    ul { 
      margin-left: 1rem; 
    }

    #botoes a { 
      min-width: unset; 
      width: 100%; 
      margin-top: 1rem;
    }

    .bar {
      width: 100%;
    }
  }
</style>

<svelte:head>
  <title>{$pageTitle}</title>
</svelte:head>

<Navbar />

<main>  
  <section id = "capa" style="background-image: url({base}/PET_sala.jpeg)">
    <div class = "capa-overlay">
      <h1>Seleção PET - Informática</h1>
      <h2>Faça parte do nosso time!</h2>
    </div>
  </section>

  <div class = "container">
    <section id = "descricao">
      <h5>Descrição:</h5>
      <p>No PET-Informática, com a orientação de um professor tutor, temos a oportunidade de desenvolver atividades de ensino, pesquisa e extensão com estudantes de diferentes cursos da área da informática, além disso, já desenvolvemos projetos em parceria com empresas do TECNOPUC e grupos de pesquisa dos programas de pós-graduação da PUCRS. Inscreva-se!</p>
      <ul>
        <li>Bolsa: R$ 700,00</li>
        <li> Carga horária: 4 horas diárias - 20 horas semanais</li>
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

    <section id = "botoes">
      <a href="https://drive.google.com/file/d/1l66cQgCEFvoG0XDVamLEKgexj3x7Yb2u/view?usp=sharing" target="_blank">Edital Completo</a>
      <a href="https://forms.gle/pCfE5jfyNs5VKSmVA" target="_blank">Inscreva-se</a>
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
</div>

</main>

<Footer />
