<script lang="ts">
  import Navbar from '$lib/components/Navbar/Navbar.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';
  import './Selecao.css'
  import { base } from '$app/paths';  
  import { faqs, toggleFAQ } from './Selecao';

  import { pageTitle } from '../../stores';
  pageTitle.set('Seleção | PET - Informática');
</script>

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
    {#each $faqs as faq, i}
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
