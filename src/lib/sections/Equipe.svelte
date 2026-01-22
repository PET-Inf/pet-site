<script lang="ts">
  import { base } from '$app/paths';
  import { onMount, tick } from 'svelte';
  import { pageTitle } from '../../stores'; 
  
  pageTitle.set('PET - Informática');

  const slides = [
    { 
      imgSrc: "/equipe/milene.png", 
      altText: "Foto da Milene", 
      description: "Tutora - Milene Silveira" 
    },

    { 
      imgSrc: "/equipe/amanda.jpg", 
      altText: "Foto da Amanda", 
      description: "Amanda Luiz" 
    },

    { 
      imgSrc: "/equipe/ana.png", 
      altText: "Foto da Ana", 
      description: "Ana Schmitt" 
    },

    { 
      imgSrc: "/equipe/eduardo.jpg", 
      altText: "Foto do Eduardo", 
      description: "Eduardo Traunig" 
    },

    { 
      imgSrc: "/equipe/erick.jpg", 
      altText: "Foto do Erick", 
      description: "Erick Machado" 
    },

    { 
      imgSrc: "/equipe/francine.jpg", 
      altText: "Foto da Francine", 
      description: "Francine Delanni" 
    },

    { 
      imgSrc: "/equipe/gabriel.jpg", 
      altText: "Foto do Gabriel Bremm", 
      description: "Gabriel Bremm" 
    },

    { 
      imgSrc: "/equipe/gabrieltomaz.jpg", 
      altText: "Foto do Gabriel Tomaz", 
      description: "Gabriel Tomaz" 
    },

    { 
      imgSrc: "/equipe/george.jpg", 
      altText: "Foto do George", 
      description: "George Rother" 
    },

    { 
      imgSrc: "/equipe/gustavo.png", 
      altText: "Foto do Gustavo", 
      description: "Gustavo Gallo" 
    },

    { 
      imgSrc: "/equipe/joaogabriel.jpg", 
      altText: "Foto do Joao Gabriel", 
      description: "João Gabriel" 
    },

    { 
      imgSrc: "/equipe/mauricio.jpg", 
      altText: "Foto do Mauricio", 
      description: "Maurício Alcântara" 
    },

    { 
      imgSrc: "/equipe/stefano.png", 
      altText: "Foto do Stefano", 
      description: "Stéfano Carraro" 
    },

    { 
      imgSrc: "/equipe/vinicius.jpg", 
      altText: "Foto do Vinicius", 
      description: "Vinícius Ross" 
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
      on:transitionend={handleTransitionEnd}
      bind:this={slidesEl}
      style="
        --per-view: {perView}; 
        transform: translate3d(-{trackIndex * stepPx}px, 0, 0); 
        transition: {suppressTransition ? 'none' : `transform ${transitionMs}ms ease-out`};
      "
    >
      {#each renderedSlides as slide}
        <div class="carrossel-item"> 
          <div class="avatar-frame">
            <img class="avatar" src={base + slide.imgSrc} alt={slide.altText}>
          </div>
          <p>{slide.description}</p>
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
    padding: 15px;
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color: #334155;
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