<script lang="ts">
  import './Equipe.css';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import Fa from 'svelte-fa';
  import {
    slides,
    perView,
    startIndex,
    trackIndex,
    suppressTransition,
    transitionMs,
    stepPx,
    containerEl,
    slidesEl,
    renderedSlides,
    initializeCarousel,
    handleTransitionEnd,
    onDragStart,
    mudarSlide,
    irPara
  } from './Equipe';

  $: indicatorIndexes = Array.from({ length: slides.length }, (_, i) => i);

  import { pageTitle } from '../../../stores'; 
  pageTitle.set('PET - Informática');

  onMount(() => {
    const cleanup = initializeCarousel();
    return cleanup;
  });
</script>

<svelte:head>
  <title>{$pageTitle}</title>
</svelte:head>

<div class="componente-carrossel-wrapper">
  
  <h2 class="carrossel-titulo">Equipe do PET</h2>

  <div class="carrossel-container" bind:this={$containerEl}>
    <div
      class="carrossel-slides"
      role="listbox"
      tabindex="0"
      on:transitionend={handleTransitionEnd}
      bind:this={$slidesEl}
      style:--per-view={$perView}
      style:transform="translate3d(-{$trackIndex * $stepPx}px, 0, 0)"
      style:transition={$suppressTransition ? 'none' : `transform ${$transitionMs}ms ease-out`}
      on:mousedown={onDragStart}
      on:touchstart={onDragStart}
    >
      {#each $renderedSlides as slide, i (slide.description + i)}
        <div class="carrossel-item"> 
          <div class="avatar-frame">
            <img class="avatar" src="{base + slide.imgSrc}" alt={slide.altText}>
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
            {#if slide.social1 && slide.social1 !== '#' && slide.social1Icon}
              <a href={slide.social1} target="_blank" rel="noopener noreferrer">
                <Fa icon={slide.social1Icon} size="1.5x" />
              </a>
            {/if}
            {#if slide.social2 && slide.social2 !== '#' && slide.social2Icon}
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
        class:active={i === $startIndex}
        aria-label={`Ir para a posição ${i + 1}`}
        aria-current={i === $startIndex ? 'true' : 'false'}
        on:click={() => irPara(i)}
      ></button>
    {/each}
  </div>
</div>