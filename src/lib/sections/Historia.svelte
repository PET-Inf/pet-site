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
    .timeline-section {
        background-color: #1A447C;
        color: #FFFFFF;
        padding: 3rem 0;
    }

    .content-container {
        max-width: 1100px;  
        margin: 0 auto;
        padding: 0 1rem;
    }

    .timeline {
        position: relative;
        padding: 2rem 0;
    }

    .timeline::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%; 
        width: 4px;
        height: 100%; 
        background-color: #FFFFFF;
        transform: translateX(-50%);
        transition: height 0.3s ease; 
        z-index: 0;
    }

    .timeline.collapsed::before {
        height: calc(100% - 80px);
    }

    .timeline-item {
        position: relative;
        width: 50%;
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        z-index: 1; 
    }

    .timeline-item.left {
        left: 0;
        padding-right: 50px; 
        justify-content: flex-end;
    }

    .timeline-item.right {
        left: 50%;
        padding-left: 50px; 
        justify-content: flex-start;
    }

    .timeline-content {
        max-width: 100%;
    }

    .timeline-item.left .timeline-content {
        text-align: right;
    }
    
    .timeline-item.right .timeline-content {
        text-align: left;
    }

    .timeline-content h3 {
        font-size: 1.25rem;
        line-height: 1.2;
    }
    .timeline-content h4 {
        font-size: 1.1rem;
        font-weight: bold;
        margin-top: 0.2rem;
    }

    .timeline-circle {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #ddd;
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

    .timeline-bottom-circle a {
        text-decoration: none;
        color: inherit;
    }

    .timeline-bottom-circle:hover {
        background-color: #045bac;
        color: #fff;
        transition: background .3s;
        cursor: pointer;
    }

    .ver-mais-container {
        width: 100%; 
        display: flex; 
        justify-content: center; 
        margin: 2rem 0 1rem 0; 
        position: relative;
        z-index: 20;
    }

    .ver-mais {
        background: #fff;
        color: #1A447C;
        padding: 0.5rem 2rem;
        border-radius: 20px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s;
        border: none;
        transition: background .12s, color .12s, transform .08s;
        position: relative;
    }

    .ver-mais:hover, .ver-mais:focus {
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

    @media (max-width: 768px) {
        .content-container {
            padding: 0 0.5rem; 
        }

        .timeline-item {
            margin-bottom: 40px;
        }

        .timeline-item.left {
            padding-right: 35px; 
        }
        .timeline-item.right {
            padding-left: 35px; 
        }

        .timeline-content h3 {
            font-size: 1rem;
        }
        .timeline-content h4 {
            font-size: 0.95rem;
        }
        .timeline-content p {
            font-size: 0.85rem;
        }

        .timeline-circle {
            width: 40px;
            height: 40px;
        }

        .timeline-item.left .timeline-circle { 
            right: -20px; 
        }

        .timeline-item.right .timeline-circle { 
            left: -20px; 
        }

        .ver-mais {
            margin-bottom: 30px;
        }
    }

    /* Utilitários */
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