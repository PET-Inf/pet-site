<script lang="ts">
  import { base } from '$app/paths';
  import { onMount, tick } from 'svelte';
  import Fa from 'svelte-fa';
  import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
  import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
  import { pageTitle } from '../../stores'; 
  
  pageTitle.set('PET - Informática');

  const slides = [
    { 
      imgSrc: "/equipe/milene.png", 
      altText: "Foto da Milene", 
      description: "Milene Silveira",
      position: "Tutora",
      course: "Doutora em Informática",
      social1: "http://lattes.cnpq.br/0483707899231728",
      social1Icon: faGraduationCap,
      social2: "https://www.linkedin.com/in/milene-silveira-50a914a8/",
      social2Icon: faLinkedinIn
    },

    { 
      imgSrc: "/equipe/amanda.jpg", 
      altText: "Foto da Amanda", 
      description: "Amanda Luiz",
      position: null,
      course: "Sistemas da Informação",
      ingresso: "11/2023",
      social1: "http://github.com/mattsue",
      social1Icon: faGithub,
      social2: "https://www.linkedin.com/in/amannda",
      social2Icon: faLinkedinIn
    },

    { 
      imgSrc: "/equipe/ana.png", 
      altText: "Foto da Ana", 
      description: "Ana Schmitt",
      position: null,
      course: "Ciência da Computação",
      ingresso: "05/2023",
      social1: null,
      social1Icon: null,
      social2: "https://www.linkedin.com/in/ana-schmitt",
      social2Icon: faLinkedinIn
    },

    { 
      imgSrc: "/equipe/eduardo.jpg", 
      altText: "Foto do Eduardo", 
      description: "Eduardo Traunig",
      position: null,
      course: "Ciência da Computação",
      ingresso: "09/2024",
      social1: "https://github.com/etraunig",
      social1Icon: faGithub,
      social2: "https://www.linkedin.com/in/eduardo-traunig-a105652b8/",
      social2Icon: faLinkedinIn
    },

    { 
      imgSrc: "/equipe/erick.jpg", 
      altText: "Foto do Erick", 
      description: "Erick Machado",
      position: null,
      course: "Ciência da Computação",
      ingresso: "04/2025",
      social1: "https://github.com/Erick080",
      social1Icon: faGithub,
      social2: "https://www.linkedin.com/in/erick-branquinho-9a90a72b4",
      social2Icon: faLinkedinIn
    },

    { 
      imgSrc: "/equipe/francine.jpg", 
      altText: "Foto da Francine", 
      description: "Francine Delanni",
      position: null,
      course: "Engenharia de Software",
      ingresso: "04/2025",
      social1: "https://github.com/FrancineDelanni",
      social1Icon: faGithub,
      social2: "https://www.linkedin.com/in/francine-delanni-89204a244",
      social2Icon: faLinkedinIn
    },

    { 
      imgSrc: "/equipe/gabriel.jpg", 
      altText: "Foto do Gabriel Bremm", 
      description: "Gabriel Bremm",
      position: null,
      course: "Ciência da Computação",
      ingresso: "04/2025",
      social1: "https://github.com/gbremm",
      social1Icon: faGithub,
      social2: "https://www.linkedin.com/in/gabriel-bremm-2993a1360/",
      social2Icon: faLinkedinIn
    },

    { 
      imgSrc: "/equipe/gabrieltomaz.jpg", 
      altText: "Foto do Gabriel Tomaz", 
      description: "Gabriel Tomaz",
      position: null,
      course: "Ciência da Computação",
      ingresso: "04/2025",
      social1: "https://github.com/Gaeltomaz123",
      social1Icon: faGithub,
      social2: "https://www.linkedin.com/in/gabriel-de-cezaro-tomaz-2618b5241/",
      social2Icon: faLinkedinIn
    },

    { 
      imgSrc: "/equipe/george.jpg", 
      altText: "Foto do George",
      description: "George Rother",
      position: null,
      course: "Ciência da Computação",
      ingresso: "06/2025",
      social1: "#",
      social1Icon: faGithub,
      social2: "#",
      social2Icon: faLinkedinIn
    },

    { 
      imgSrc: "/equipe/gustavo.png", 
      altText: "Foto do Gustavo", 
      description: "Gustavo Gallo",
      position: null,
      course: "Engenharia da Computação",
      ingresso: "09/2024",
      social1: "https://github.com/gustavgallo",
      social1Icon: faGithub,
      social2: "https://www.linkedin.com/in/gustavo-tibolla-gallo/",
      social2Icon: faLinkedinIn
    },

    { 
      imgSrc: "/equipe/joaogabriel.jpg", 
      altText: "Foto do Joao Gabriel", 
      description: "João Gabriel",
      position: null,
      course: "Ciência da Computação",
      ingresso: "04/2025",
      social1: "http://github.com/JhanosC",
      social1Icon: faGithub,
      social2: "https://br.linkedin.com/in/jo%C3%A3o-sbardelotto",
      social2Icon: faLinkedinIn
    },

    { 
      imgSrc: "/equipe/mauricio.jpg", 
      altText: "Foto do Mauricio", 
      description: "Maurício Alcântara",
      position: null,
      course: "Ciência da Computação",
      ingresso: "04/2025",
      social1: "https://github.com/RockyRickaby",
      social1Icon: faGithub,
      social2: "https://www.linkedin.com/in/mauricio-alcantara-da-luz-204060292/",
      social2Icon: faLinkedinIn
    },

    { 
      imgSrc: "/equipe/stefano.png", 
      altText: "Foto do Stefano", 
      description: "Stéfano Carraro",
      position: null,
      course: "Engenharia de Software",
      ingresso: "11/2023",
      social1: "https://github.com/StefanoDPCarraro",
      social1Icon: faGithub,
      social2: "https://www.linkedin.com/in/stefano-carraro-739326318/",
      social2Icon: faLinkedinIn
    },

    { 
      imgSrc: "/equipe/vinicius.jpg", 
      altText: "Foto do Vinicius", 
      description: "Vinícius Ross",
      position: null,
      course: "Ciência da Computação",
      ingresso: "04/2025",
      social1: "https://github.com/viniross",
      social1Icon: faGithub,
      social2: "https://www.linkedin.com/in/vinicius-ross/",
      social2Icon: faLinkedinIn
    }
  ];

  let perView = 3;
  let startIndex = 0; 
  let trackIndex = 0; 
  let isInitialized = false;
  let suppressTransition = false;
  
  const BASE_TRANSITION_MS = 500;
  let transitionMs = BASE_TRANSITION_MS;
  
  let containerEl: HTMLElement;
  let slidesEl: HTMLElement;
  let stepPx = 0;

  // Variáveis para a funcionalidade de arrastar
  let isDragging = false;
  let dragStart = 0;
  let dragOffset = 0;
  let animationFrameId: number;
  let isClick = true;
  const clickThreshold = 10; // pixels

  function onDragStart(e: MouseEvent | TouchEvent) {
    isClick = true;
    isDragging = true;
    dragStart = e.type === 'touchstart' ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    suppressTransition = true; // Desativa a transição suave durante o arraste

    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('touchmove', onDragMove);
    window.addEventListener('mouseup', onDragEnd);
    window.addEventListener('touchend', onDragEnd);
  }

  function onDragMove(e: MouseEvent | TouchEvent) {
    if (!isDragging) return;
    const currentX = e.type === 'touchmove' ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    dragOffset = currentX - dragStart;

    if (Math.abs(dragOffset) > clickThreshold) {
      isClick = false;
    }

    // Otimiza a atualização da UI com requestAnimationFrame
    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(() => {
      if (slidesEl) {
        const newTransform = -(trackIndex * stepPx) + dragOffset;
        slidesEl.style.transform = `translate3d(${newTransform}px, 0, 0)`;
      }
    });
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    suppressTransition = false; // Reativa a transição suave

    window.removeEventListener('mousemove', onDragMove);
    window.removeEventListener('touchmove', onDragMove);
    window.removeEventListener('mouseup', onDragEnd);
    window.removeEventListener('touchend', onDragEnd);

    // Limpa o estilo inline para que a transição CSS funcione
    slidesEl.style.transform = '';

    if (!isClick) {
      // Se foi um arrasto, previne o próximo evento de clique na fase de captura.
      const preventClick = (e: MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
      };
      window.addEventListener('click', preventClick, { capture: true, once: true });
    }

    const dragThreshold = stepPx / 4; // Define um limiar para mudar de slide

    if (Math.abs(dragOffset) > dragThreshold) {
      const slidesToMove = -Math.round(dragOffset / stepPx);
      const newIndex = wrapIndex(startIndex + slidesToMove, slides.length);
      irPara(newIndex);
    }

    // Reseta o offset do arraste
    dragOffset = 0;
  }

  function calcPerView(width: number) {
    if (width <= 480) return 1;
    if (width <= 768) return 2;
    return 3;
  }

  $: cloneCount = Math.max(perView, 1);

  function getRenderedSlides() {
    if (slides.length === 0) return [];
    const head = slides.slice(0, cloneCount); 
    const tail = slides.slice(slides.length - cloneCount); 
    return [...tail, ...slides, ...head];
  }

  $: renderedSlides = getRenderedSlides();
  $: indicatorIndexes = slides.map((_, i) => i);

  async function updatePerView() {
    if (!containerEl) return;
    const next = calcPerView(window.innerWidth);

    if (!isInitialized || next !== perView) {
      perView = next;
      
      suppressTransition = true;
      
      trackIndex = cloneCount + startIndex; 
      
      await tick();
      updateStep();
      
      if (slidesEl) { const _ = slidesEl.clientWidth; }
      
      suppressTransition = false;
      isInitialized = true;
    }
  }

  function updateStep() {
    if (!slidesEl) return;
    const firstItem = slidesEl.querySelector('.carrossel-item');
    if (firstItem) {
      stepPx = firstItem.getBoundingClientRect().width;
    }
  }

  onMount(() => {
    updatePerView();
    window.addEventListener('resize', updatePerView);
    
    const ro = new ResizeObserver(() => updateStep());
    if (containerEl) ro.observe(containerEl);

    return () => {
      window.removeEventListener('resize', updatePerView);
      ro.disconnect();
    };
  });

  function wrapIndex(n: number, length: number) {
    return ((n % length) + length) % length;
  }

  async function handleTransitionEnd(event: TransitionEvent) {
    if (event?.propertyName && event.propertyName !== 'transform') return;

    const length = slides.length;
    const startOfOriginal = cloneCount;
    const endOfOriginal = cloneCount + length - 1;

    if (trackIndex < startOfOriginal || trackIndex > endOfOriginal) {
      suppressTransition = true; 
      
      const currentLogicalIndex = wrapIndex(trackIndex - cloneCount, length);
      trackIndex = startOfOriginal + currentLogicalIndex;
      
      await tick();
      
      if (slidesEl) { const _ = slidesEl.getBoundingClientRect().width; }
      
      suppressTransition = false; 
    }
    
    transitionMs = BASE_TRANSITION_MS;
  }

  function mudarSlide(direction: number) {
    trackIndex += direction;
    startIndex = wrapIndex(startIndex + direction, slides.length);
    transitionMs = BASE_TRANSITION_MS;
  }

  function irPara(targetIndex: number) {
    const length = slides.length;
    
    const diffDirect = targetIndex - startIndex;

    const diffWrapLeft = (targetIndex - length) - startIndex;
    
    const diffWrapRight = (targetIndex + length) - startIndex;

    let bestDiff = diffDirect;
    if (Math.abs(diffWrapLeft) < Math.abs(bestDiff)) bestDiff = diffWrapLeft;
    if (Math.abs(diffWrapRight) < Math.abs(bestDiff)) bestDiff = diffWrapRight;

    startIndex = targetIndex;
    trackIndex += bestDiff;
    
    transitionMs = BASE_TRANSITION_MS * Math.max(1, Math.abs(bestDiff) * 0.6); 
  }
</script>

<svelte:head>
  <title>{$pageTitle}</title>
</svelte:head>

<div class="componente-carrossel-wrapper">
  
  <h2 class="carrossel-titulo">Equipe do PET</h2>

  <div class="carrossel-container" bind:this={containerEl}>
    <div
      class="carrossel-slides"
      role="listbox"
      tabindex="0"
      on:transitionend={handleTransitionEnd}
      bind:this={slidesEl}
      style="
        --per-view: {perView}; 
        transform: translate3d(-{trackIndex * stepPx}px, 0, 0); 
        transition: {suppressTransition ? 'none' : `transform ${transitionMs}ms ease-out`};
      "
      on:mousedown={onDragStart}
      on:touchstart={onDragStart}
    >
      {#each renderedSlides as slide}
        <div class="carrossel-item"> 
          <div class="avatar-frame">
            <img class="avatar" src={base + slide.imgSrc} alt={slide.altText}>
          </div>
          <p class="nome">{slide.description}</p>
          <p class="curso">{slide.course}</p>
          {#if slide.ingresso}
            <p class="ingresso">Ingresso: {slide.ingresso}</p>
          {/if}
          {#if slide.position}
            <p class="posicao">{slide.position}</p>
          {/if}
          <div class="social-links">
            {#if slide.social1 && slide.social1 !== '#'}
              <a href={slide.social1} target="_blank" rel="noopener noreferrer">
                <Fa icon={slide.social1Icon} size="1.5x" />
              </a>
            {/if}
            {#if slide.social2 && slide.social2 !== '#'}
              <a href={slide.social2} target="_blank" rel="noopener noreferrer">
                <Fa icon={slide.social2Icon} size="1.5x" />
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <button class="prev" on:click={() => mudarSlide(-1)} aria-label="Anterior">&#10094;</button>
    <button class="next" on:click={() => mudarSlide(1)} aria-label="Próximo">&#10095;</button>
  </div>

  <div class="carrossel-indicadores" aria-label="Indicadores do carrossel">
    {#each indicatorIndexes as i}
      <button
        type="button"
        class="dot"
        class:active={i === startIndex}
        aria-label={`Ir para a posição ${i + 1}`}
        aria-current={i === startIndex ? 'true' : 'false'}
        on:click={() => irPara(i)}
      ></button>
    {/each}
  </div>
</div>


<style>
  .componente-carrossel-wrapper {
    width: 100%;
    padding: 1rem 0;
  }

  .carrossel-titulo {
    text-align: center;
    color: #1e293b; 
    font-size: 2.25rem;
    margin-bottom: 1.5rem; /* Espaço entre o título e o carrossel */
    font-weight: 600;
  }

  .carrossel-container {
    position: relative;
    max-width: 980px;
    width: 95%; 
    overflow: hidden;
    margin: 0 auto; 
  }

  .carrossel-slides {
    display: flex;
    transition: transform var(--transition-ms, 500ms) ease-in-out;
    will-change: transform;
  }

  .carrossel-item {
    flex: 0 0 calc(100% / var(--per-view, 1));
    box-sizing: border-box;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .avatar-frame {
    --avatar-size: 180px;
    width: var(--avatar-size);
    height: var(--avatar-size);
    border-radius: 50%;
    background: #c1c1c1e3;
    border: 6px solid #c1c1c1e3;
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.12);
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    display: block;
  }

  .carrossel-item p {
    text-align: center;
    padding: 0.2rem 0.5rem;
    margin: 0;
    font-size: 1rem;
    color: #334155;
  }

  .carrossel-item .nome {
    font-weight: 600;
    font-size: 1.3rem;
    margin-top: 15px;
    padding-bottom: 0;
  }

  .carrossel-item .posicao {
    font-style: italic;
    color: #555;
  }

  .carrossel-item .curso {
    font-weight: 500;
    font-size: 1.05rem;
  }

  .carrossel-item .ingresso {
    font-size: 0.9rem;
    color: #64748b;
  }

  .social-links {
    display: flex;
    gap: 1rem; /* Adjust gap between icons as needed */
  }

  .social-links a {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #1e293b;
    color: #F0F0F0;
    transition: all 0.2s ease-in-out;
    margin-top: 10px;
  }

  .social-links a:hover, .social-links a:focus {
    background-color: #1A447C;
    transition: background .3s;
    transform: translateY(-2px);
  }

  .social-links a:focus {
    box-shadow: 0 0 0 3px rgba(26,68,124,0.12);
  }

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -30px;
    color: #1e293b;
    font-weight: bold;
    font-size: 20px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    border: none;
    z-index: 2;
  }

  .prev:disabled, .next:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev:hover, .next:hover {
    color: #1e293bc6;
  }

  .carrossel-indicadores {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 14px 0 0;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    border: none;
    background: #cbd5e1;
    cursor: pointer;
  }

  .dot.active {
    background: #1e293b;
  }

  @media (max-width: 768px) {
    /* Adicionado ajuste no tamanho do título para telas menores */
    .carrossel-titulo {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    .carrossel-item p {
        font-size: 0.9rem;
        padding: 12px;
    }

    .prev, .next {
        font-size: 18px;
        padding: 12px;
        top: 45%; 
        transform: translateY(-50%);
        margin-top: 0;
    }

    .avatar-frame {
      --avatar-size: 150px;
      border-width: 5px;
    }
  }

  @media (max-width: 480px) {
    .carrossel-container {
        width: 100%; 
        border-radius: 0;
    }

    .prev, .next {
        font-size: 16px;
        padding: 10px;
    }

    .carrossel-item p {
        font-size: 0.8rem;
    }

    .avatar-frame {
      --avatar-size: 170px;
      border-width: 5px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .carrossel-slides {
      transition: none !important;
    }
  }
</style>