import { writable, get, derived } from 'svelte/store';
import { tick } from 'svelte';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type Slide = {
    imgSrc: string;
    altText: string;
    description: string;
    position: string | null;
    course: string;
    ingresso?: string;
    social1: string | null;
    social1Icon: IconDefinition | null;
    social2: string | null;
    social2Icon: IconDefinition | null;
};

export const slides: Slide[] = [
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
        imgSrc: "/equipe/joao.jpeg", 
        altText: "Foto do João Gabriel", 
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
        imgSrc: "/equipe/lucas.jpeg", 
        altText: "Foto do Lucas", 
        description: "Lucas Gomes",
        position: null,
        course: "Engenharia da Computação",
        ingresso: "04/2025",
        social1: "https://github.com/LucasGonGo",
        social1Icon: faGithub,
        social2: "https://www.linkedin.com/in/lucas-gongo/",
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
    },

    { 
        imgSrc: "/equipe/george.jpeg", 
        altText: "Foto do George",
        description: "George Rother",
        position: null,
        course: "Ciência da Computação",
        ingresso: "06/2025",
        social1: "https://github.com/George-Rot",
        social1Icon: faGithub,
        social2: "https://www.linkedin.com/in/george-rother-4a0602272/", 
        social2Icon: faLinkedinIn
    },

    { 
        imgSrc: "/equipe/henrique.jpeg", 
        altText: "Foto do Henrique",
        description: "Henrique Horch",
        position: null,
        course: "Ciência da Computação",
        ingresso: "12/2025",
        social1: "https://github.com/HorcHenrique",
        social1Icon: faGithub,
        social2: "https://www.linkedin.com/in/henrique-carlesso-pereira-horch-4a42b8378/",
        social2Icon: faLinkedinIn
    },

    { 
        imgSrc: "/equipe/lara.jpeg", 
        altText: "Foto da Lara",
        description: "Lara Volpato",
        position: null,
        course: "Ciência da Computação",
        ingresso: "12/2025",
        social1: "https://github.com/laravolpato",
        social1Icon: faGithub,
        social2: "https://www.linkedin.com/in/laravolpato/",
        social2Icon: faLinkedinIn
    },

    { 
        imgSrc: "/equipe/leonardo.jpeg", 
        altText: "Foto do Leonardo",
        description: "Leonardo Soares",
        position: null,
        course: "Engenharia de Software",
        ingresso: "12/2025",
        social1: "https://github.com/LeonardoSoares09",
        social1Icon: faGithub,
        social2: "https://www.linkedin.com/in/leonardo-soares-da-silva-063741290/",
        social2Icon: faLinkedinIn
    },

    { 
        imgSrc: "/equipe/marco.jpeg", 
        altText: "Foto do Marco",
        description: "Marco Rodegheri",
        position: null,
        course: "Ciência da Computação",
        ingresso: "12/2025",
        social1: "https://github.com/MarcoRodegheri",
        social1Icon: faGithub,
        social2: "https://www.linkedin.com/in/marco-rodegheri/",
        social2Icon: faLinkedinIn
    },

    { 
        imgSrc: "/equipe/milena.jpeg", 
        altText: "Foto da Milena",
        description: "Milena Bregalda",
        position: null,
        course: "Ciência da Computação",
        ingresso: "12/2025",
        social1: "https://github.com/milenabregalda",
        social1Icon: faGithub,
        social2: "https://br.linkedin.com/in/milenabregalda",
        social2Icon: faLinkedinIn
    },

    { 
        imgSrc: "/equipe/vanessa.jpeg", 
        altText: "Foto da Vanessa",
        description: "Vanessa Rutkoski",
        position: null,
        course: "Engenharia de Software",
        ingresso: "12/2025",
        social1: "https://github.com/nessartk",
        social1Icon: faGithub,
        social2: "https://www.linkedin.com/in/nessartk/",
        social2Icon: faLinkedinIn
    },

    { 
        imgSrc: "/equipe/arthur.jpeg", 
        altText: "Foto do Arthur",
        description: "Arthur Pascual",
        position: null,
        course: "Engenharia de Software",
        ingresso: "03/2026",
        social1: "https://github.com/ArthurPascual",
        social1Icon: faGithub,
        social2: "https://www.linkedin.com/in/arthur-vinhas-pascual-1000a8215/",
        social2Icon: faLinkedinIn
    },

    { 
        imgSrc: "/equipe/gustavosaul.jpeg", 
        altText: "Foto do Gustavo Saul",
        description: "Gustavo Saul",
        position: null,
        course: "Ciência da Computação",
        ingresso: "03/2026",
        social1: "https://github.com/gustavorsaul",
        social1Icon: faGithub,
        social2: "https://github.com/gustavorsaul",
        social2Icon: faLinkedinIn
    },

    { 
        imgSrc: "/equipe/rafael.jpeg", 
        altText: "Foto do Rafael",
        description: "Rafael Urbani",
        position: null,
        course: "Ciência da Computação",
        ingresso: "03/2026",
        social1: "github.com/rafaurbani",
        social1Icon: faGithub,
        social2: "linkedin.com/in/rafaelurbani",
        social2Icon: faLinkedinIn
    },

    { 
        imgSrc: "/equipe/roger.jpeg", 
        altText: "Foto do Roger",
        description: "Roger Ehlert",
        position: null,
        course: "Ciência da Computação",
        ingresso: "03/2026",
        social1: "https://github.com/RogerEhlert",
        social1Icon: faGithub,
        social2: "https://www.linkedin.com/in/roger-ehlert/",
        social2Icon: faLinkedinIn
    },
 ];


const BASE_TRANSITION_MS = 500;
const CLICK_THRESHOLD = 10;

export const perView = writable(3);
export const startIndex = writable(0);
export const trackIndex = writable(0);
export const isInitialized = writable(false);
export const suppressTransition = writable(false);
export const transitionMs = writable(BASE_TRANSITION_MS);
export const stepPx = writable(0);
  
export const containerEl = writable<HTMLElement | null>(null);
export const slidesEl = writable<HTMLElement | null>(null);


// Variáveis para a funcionalidade de arrastar
const isDragging = writable(false);
const dragStart = writable(0);
const dragOffset = writable(0);
const isClick = writable(true);
let animationFrameId: number;

export const cloneCount = derived(perView, $perView => Math.max($perView, 1));

  export const renderedSlides = derived(cloneCount, $cloneCount => {
    if (slides.length === 0) return [];
    const head = slides.slice(0, $cloneCount);
    const tail = slides.slice(slides.length - $cloneCount);
    return [...tail, ...slides, ...head];
});

export const indicatorIndexes = slides.map((_, i) => i);

// --- FUNÇÕES ---

function wrapIndex(n: number, length: number) {
    return ((n % length) + length) % length;
}

function calcPerView(width: number) {
    if (width <= 480) return 1;
    if (width <= 768) return 2;
    return 3;
}

export function updateStep() {
    const $slidesEl = get(slidesEl);
    if (!$slidesEl) return;
    const firstItem = $slidesEl.querySelector('.carrossel-item');
    if (firstItem) {
        stepPx.set(firstItem.getBoundingClientRect().width);
    }
}

export async function updatePerView() {
    if (typeof window === 'undefined') return;
    const next = calcPerView(window.innerWidth);
    const $isInitialized = get(isInitialized);
    const $perView = get(perView);

    if (!$isInitialized || next !== $perView) {
        perView.set(next);
        suppressTransition.set(true);
        
        const $cloneCount = get(cloneCount);
        const $startIndex = get(startIndex);
        trackIndex.set($cloneCount + $startIndex);
        
        await tick();
        updateStep();
        
        const $slidesEl = get(slidesEl);
        if ($slidesEl) {  
            void $slidesEl.clientWidth; 
        }
        
        suppressTransition.set(false);
        if (!$isInitialized) isInitialized.set(true);
    }
}

export function onDragStart(e: MouseEvent | TouchEvent) {
    isClick.set(true);
    isDragging.set(true);
    const startX = e.type === 'touchstart' ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    dragStart.set(startX);
    suppressTransition.set(true);

    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('touchmove', onDragMove);
    window.addEventListener('mouseup', onDragEnd, { once: true });
    window.addEventListener('touchend', onDragEnd, { once: true });
}

function onDragMove(e: MouseEvent | TouchEvent) {
    if (!get(isDragging)) return;
    const currentX = e.type === 'touchmove' ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    const offset = currentX - get(dragStart);
    dragOffset.set(offset);

    if (Math.abs(offset) > CLICK_THRESHOLD) {
        isClick.set(false);
    }

    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(() => {
        const $slidesEl = get(slidesEl);
        if ($slidesEl) {
            const newTransform = -(get(trackIndex) * get(stepPx)) + get(dragOffset);
            $slidesEl.style.transform = `translate3d(${newTransform}px, 0, 0)`;
        }
    });
}

function onDragEnd() {
    if (!get(isDragging)) return;
    isDragging.set(false);
    suppressTransition.set(false);

    window.removeEventListener('mousemove', onDragMove);
    window.removeEventListener('touchmove', onDragMove);

    const $slidesEl = get(slidesEl);
    if ($slidesEl) $slidesEl.style.transform = '';

    if (!get(isClick)) {
        const preventClick = (e: MouseEvent) => {
            e.stopPropagation();
            e.preventDefault();
        };
        window.addEventListener('click', preventClick, { capture: true, once: true });
    }

    const dragThreshold = get(stepPx) / 4;
    const $dragOffset = get(dragOffset);

    if (Math.abs($dragOffset) > dragThreshold) {
        const slidesToMove = -Math.round($dragOffset / get(stepPx));
        const newIndex = wrapIndex(get(startIndex) + slidesToMove, slides.length);
        irPara(newIndex);
    }

    dragOffset.set(0);
}

export async function handleTransitionEnd(event: TransitionEvent) {
    if (event?.propertyName !== 'transform') return;

    const $trackIndex = get(trackIndex);
    const $cloneCount = get(cloneCount);
    const length = slides.length;
    const startOfOriginal = $cloneCount;
    const endOfOriginal = $cloneCount + length - 1;

    if ($trackIndex < startOfOriginal || $trackIndex > endOfOriginal) {
        suppressTransition.set(true);
        const currentLogicalIndex = wrapIndex($trackIndex - $cloneCount, length);
        trackIndex.set(startOfOriginal + currentLogicalIndex);
        
        await tick();
        const $slidesEl = get(slidesEl);
        if ($slidesEl) { 
            void $slidesEl.getBoundingClientRect().width; 
        }
        
        suppressTransition.set(false);
    }
    
    transitionMs.set(BASE_TRANSITION_MS);
}

export function mudarSlide(direction: number) {
    trackIndex.update(ti => ti + direction);
    startIndex.update(si => wrapIndex(si + direction, slides.length));
    transitionMs.set(BASE_TRANSITION_MS);
}

export function irPara(targetIndex: number) {
    const $startIndex = get(startIndex);
    const length = slides.length;
    
    const diffDirect = targetIndex - $startIndex;
    const diffWrapLeft = (targetIndex - length) - $startIndex;
    const diffWrapRight = (targetIndex + length) - $startIndex;

    let bestDiff = diffDirect;
    if (Math.abs(diffWrapLeft) < Math.abs(bestDiff)) bestDiff = diffWrapLeft;
    if (Math.abs(diffWrapRight) < Math.abs(bestDiff)) bestDiff = diffWrapRight;

    startIndex.set(targetIndex);
    trackIndex.update(ti => ti + bestDiff);
    transitionMs.set(BASE_TRANSITION_MS * Math.max(1, Math.abs(bestDiff) * 0.6));
}

export function initializeCarousel() {
    updatePerView();
    window.addEventListener('resize', updatePerView);
    
    const $containerEl = get(containerEl);
    const ro = new ResizeObserver(() => updateStep());
    if ($containerEl) ro.observe($containerEl);

    // Retorna a função de limpeza
    return () => {
        window.removeEventListener('resize', updatePerView);
        ro.disconnect();
    };
}