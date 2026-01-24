<script>
  import { base } from '$app/paths';
  import { pageTitle } from '../../../stores';
  pageTitle.set('PET - Informática');
</script>

<svelte:head>
  <title>{$pageTitle}</title>
</svelte:head>

<div class="w-screen -ml-[calc(50vw-50%)] bg-[#1A447C] text-white px-4 md:px-8 pt-8 pb-15 box-border">
  <div class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Sobre</div>

  <div class="flex flex-col md:flex-row justify-center items-center md:items-start gap-y-12 md:gap-y-0 md:gap-x-20 max-w-[1500px] mx-auto">
    <!-- BLOCO ESQUERDO -->
    <div class="flex flex-col items-center text-center w-full md:w-[700px] px-4">
      <div class="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-white mb-2">
        <img src="{base}/pet_gov.png" alt="Imagem Esquerda" class="w-full h-full object-cover" />
      </div>
      <div class="font-bold text-lg mb-2">O Programa</div>
      <div class="text-base">
        Organizado pelo MEC, o PET - Programa de Educação Tutorial - reúne bolsistas que contam com a tutoria de docentes. 
        O objetivo é uma formação completa durante a graduação, através da realização de projetos que funcionam segundo os princípios de ensino, pesquisa e extensão.
      </div>
    </div>

    <!-- BLOCO DIREITO -->
    <div class="flex flex-col items-center text-center w-full md:w-[700px] px-4">
      <div class="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-white mb-2">
        <img src="{base}/pet_logo_pequeno.png" alt="Imagem Direita" class="w-full h-full object-cover" />
      </div>
      <div class="font-bold text-lg mb-2">O PET Informática - PUCRS</div>
      <div class="text-base">
        O PET-Inf foi criado na PUCRS em novembro de 1991, tendo como primeiro tutor o professor Álvaro Guarda.
        O grupo reúne alunos da graduação de vários cursos da área de tecnologia da universidade, desenvolvendo atividades com prioridade à diversidade de conhecimentos 
        que vão além do currículo formal.
      </div>
    </div>
  </div>
</div>
