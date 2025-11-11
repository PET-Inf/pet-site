<script lang="ts">
    import { base } from '$app/paths';
        import { pageTitle } from '../../stores';
    import { tick } from 'svelte';
  pageTitle.set('PET - Informática');
  
    // controla se a parte posterior da timeline aparece
    let showMore = false;
    let topEl: HTMLElement | null = null;

    async function toggleShowMore() {
        showMore = !showMore;
        // if we just collapsed, wait for DOM update then scroll to top of the section
        if (!showMore) {
            await tick();
            topEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
</script>

<style>
    /* Este é o container que ocupa 100% da largura com o fundo azul */
    .timeline-section {
        background-color: #1A447C;
        color: #FFFFFF;
        padding: 3rem 0;
    }

    /* Este container centraliza o conteúdo da timeline */
    .content-container {
        max-width: 1100px;  
        margin: 0 auto;      /* Centraliza horizontalmente */
        padding: 0 1rem;     /* Evita que o conteúdo cole nas bordas em telas menores */
    }

    /* Estilos adicionais para uma timeline funcional (baseado na estrutura) */
    .timeline {
        position: relative;
        padding: 2rem 0;
        transition: --line-height 0.2s ease;
        /* altura fixa para a linha colapsada; ajuste se necessário */
        --line-height-collapsed: 380px; /* aumentada para alcançar o botão 'Ver mais' */
    }

    .timeline::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 4px;
        height: 100%;
        background-color: #FFFFFF;
        z-index: 0;
        transform: translateX(-50%);
        transition: height .28s ease;
    }

    /* Quando a timeline estiver 'colapsada' encurta a linha branca para ficar
       apenas até o botão 'Ver mais'. Ajuste o valor de height conforme o layout */
    .timeline.collapsed::before {
        height: var(--line-height-collapsed);
    }

    .timeline-item {
        position: relative;
        width: 50%;
        margin-bottom: 50px;
        display: flex; /* Adicionado para alinhar conteúdo e círculo */
        align-items: center; /* Adicionado para alinhar conteúdo e círculo */
    }

    .timeline-item.left {
        left: 0;
        padding-right: 50px;
        justify-content: flex-end; /* Alinha o conteúdo à direita */
    }

    .timeline-item.right {
        left: 50%;
        padding-left: 50px;
    }

    .timeline-content {
        width: 100%;
        text-align: left; /* Garante alinhamento padrão */
    }

    .timeline-item.left .timeline-content {
        text-align: right; /* Alinha texto para a esquerda */
    }

    .timeline-content h3 {
        font-size: 1.25rem;
    }
    .timeline-content h4 {
        font-size: 1.1rem;
        font-weight: bold;
    }
    .timeline-content ul {
        list-style-type: none;
        padding: 0;
        margin-top: 0.5rem;
    }

    .timeline-circle {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #ddd; /* Cor de placeholder */
        background-size: cover;
        background-position: center;
        z-index: 10;
    }

    .timeline-item.left .timeline-circle {
        right: -25px;
    }

    .timeline-item.right .timeline-circle {
        left: -25px;
    }
    
    .timeline-bottom-circle {
        position: absolute;
        bottom: -25px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        color: #1A447C;
        padding: 0.5rem 1.5rem;
        border-radius: 20px;
        font-weight: bold;
        text-align: center;
        z-index: 10;
    }

    .timeline-bottom-circle:hover {
        background-color: #045bac;
        color: #fff;
        transition: background .3s;
        text-decoration: none;
        cursor: pointer;
    }

    /* Botão 'Ver mais' estilizado para combinar com 'Faça parte da nossa história' */
    .ver-mais {
        /* Tornar o botão visível por padrão: fundo branco com texto azul */
        background: #fff;
        color: #1A447C; /* letra azul */
        padding: 0.5rem 2rem;
        border-radius: 20px;
        font-weight: bold; /* mesma ênfase */
        cursor: pointer;
        transition: background .12s, color .12s, transform .08s;
        position: relative; /* garante stacking acima da linha */
        z-index: 20;
    }

    .ver-mais:hover,
    .ver-mais:focus {
        background-color: #045bac;
        color: #fff;
        transition: background .3s;
        text-decoration: none;
        cursor: pointer;
        outline: none;
        transform: translateY(-2px);
    }

    .ver-mais:focus {
        box-shadow: 0 0 0 3px rgba(26,68,124,0.12);
    }

    /* Quando colapsada, levanta o botão acima da linha para que fique visualmente
       sobre o eixo central. Ajuste -18px conforme necessário para seu layout. */
    .timeline.collapsed .ver-mais {
        margin-top: -18px;
        padding-top: 0.45rem; /* ajustar visualmente se necessário */
    }
    
    /* Classes de utilidade que podem estar faltando, como as do Tailwind */
    .text-3xl { font-size: 1.875rem; }
    .md\:text-4xl { @media (min-width: 768px) { font-size: 2.25rem; } }
    .font-bold { font-weight: 700; }
    .text-center { text-align: center; }
    .mb-8 { margin-bottom: 2rem; }
    .md\:mb-12 { @media (min-width: 768px) { margin-bottom: 3rem; } }

</style>

<svelte:head>
  <title>{$pageTitle}</title>
</svelte:head>

<div class="timeline-section">

    <div class="content-container" bind:this={topEl}>

        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">História</h2>

    <div class="timeline" class:collapsed={!showMore}>
            <div class="timeline-item left">
                <div class="timeline-content">
                    <h3>Novembro de 1991</h3>
                    <h4>Criação do PET-Informática</h4>
                    <p>O PET-Inf foi criado na PUCRS ao final de 1991</p>
                </div>
                <div class="timeline-circle image-1"></div>
            </div>

            <div class="timeline-item right">
                <div class="timeline-content">
                    <h3>1991</h3>
                    <h4>Prof. Dr. Álvaro Guarda</h4>
                </div>
                <div class="timeline-circle image-1"></div>
            </div>

           
            <div class="timeline-item left">
                <div class="timeline-circle image-2"></div>
                    <div class="timeline-content">
                        <h3>1993</h3>
                        <h4>Prof. Dr. Afonso Orth</h4>
                    </div>
                </div>

                    <!-- Botão 'Ver mais' mostrado apenas quando colapsado -->
                    {#if !showMore}
                        <div style="width:100%; display:flex; justify-content:center; margin: 0 0 1rem 0;">
                            <button
                                class="ver-mais"
                                on:click={toggleShowMore}
                                aria-expanded={showMore}
                                aria-controls="timeline-more"
                            >
                                Ver mais
                            </button>
                        </div>
                    {/if}

            {#if showMore}
                <div id="timeline-more">

                    <div class="timeline-item right">
                        <div class="timeline-content">
                            <h3>1996</h3>
                            <h4>Prof. Dr. Celso Maciel</h4>
                        </div>
                        <div class="timeline-circle image-1"></div>
                    </div>

                    <div class="timeline-item left">
                        <div class="timeline-circle image-2"></div>
                        <div class="timeline-content">
                            <h3>2001</h3>
                            <h4>Prof. Dr. Fabiano Hessel</h4>
                        </div>
                    </div>
                    
                    <div class="timeline-item right">
                        <div class="timeline-circle image-2"></div>
                        <div class="timeline-content">
                            <h3>2002</h3>
                            <h4>Prof. Dr. Luís Lamb</h4>
                        </div>
                    </div>

                    <div class="timeline-item left">
                        <div class="timeline-circle image-2"></div>
                        <div class="timeline-content">
                            <h3>2002</h3>
                            <h4>Profa. Dra. Lúcia Giraffa</h4>
                        </div>
                    </div>

                    <div class="timeline-item right">
                        <div class="timeline-circle image-2"></div>
                        <div class="timeline-content">
                            <h3>2005</h3>
                            <h4>Prof. Dr. Alfio Martini</h4>
                        </div>
                    </div>

                    <div class="timeline-item left">
                        <div class="timeline-circle image-2"></div>
                        <div class="timeline-content">
                            <h3>2010</h3>
                            <h4>Prof. Dr. Celso Maciel</h4>
                        </div>
                    </div>

                    <div class="timeline-item right">
                        <div class="timeline-circle image-2"></div>
                        <div class="timeline-content">
                            <h3>2011</h3>
                            <h4>Prof. Dr. Tiago Ferreto</h4>
                        </div>
                    </div>

                    <div class="timeline-item left">
                        <div class="timeline-circle image-2"></div>
                        <div class="timeline-content">
                            <h3>2018</h3>
                            <h4>Prof. Dr. Alfio Martini</h4>
                        </div>
                    </div>

                    <div class="timeline-item right">
                        <div class="timeline-circle image-2"></div>
                        <div class="timeline-content">
                            <h3>2019</h3>
                            <h4>Prof. Dr. Rafael Garibotti</h4>
                        </div>
                    </div>

                    <div class="timeline-item left">
                        <div class="timeline-circle image-2"></div>
                        <div class="timeline-content">
                            <h3>2020</h3>
                            <h4>Prof. Dr. Tiago Ferreto</h4>
                        </div>
                    </div>

                    <div class="timeline-item right">
                        <div class="timeline-circle image-2"></div>
                        <div class="timeline-content">
                            <h3>2023 - Atualmente</h3>
                            <h4>Profa. Dra. Milene Silveira</h4>
                        </div>
                    </div>
                </div>

                <div class="timeline-bottom-circle">
                    <a href="{base}/selecao">Faça parte da nossa história!</a>
                </div>

                <!-- 'Ver menos' exibido abaixo do CTA quando expandido -->
                <div style="width:100%; display:flex; justify-content:center; margin-top: 1rem;">
                    <button
                        class="ver-mais"
                        on:click={toggleShowMore}
                        aria-expanded={showMore}
                        aria-controls="timeline-more"
                    >
                        Ver menos
                    </button>
                </div>
            {/if}
        </div>
        
    </div>
</div>