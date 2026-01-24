import { writable } from 'svelte/store';
import { tick } from 'svelte';

export const showMore = writable(false);

export const topEl = writable<HTMLElement | null>(null);

// Variáveis para obter os valores dos stores
let showMoreValue = false;
let topElValue: HTMLElement | null = null;

showMore.subscribe(value => {
    showMoreValue = value;
});

topEl.subscribe(value => {
    topElValue = value;
});

export async function toggleShowMore() {
    showMore.update(n => !n);
    // se acabamos de recolher, esperamos a atualização do DOM e então rolamos para o topo
    if (!showMoreValue) {
        await tick();
        topElValue?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}