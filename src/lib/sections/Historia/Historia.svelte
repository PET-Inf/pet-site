<script lang="ts">
    import './Historia.css'
    import { showMore, topEl, toggleShowMore } from './Historia';
    import { base } from '$app/paths';
    import { pageTitle } from '../../../stores';

    pageTitle.set('PET - Informática');
</script>

<svelte:head>
  <title>{$pageTitle}</title>
</svelte:head>

<div class="timeline-section">

    <div class="content-container" bind:this={$topEl}>

        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">História</h2>

    <div class="timeline" class:collapsed={!$showMore}>
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
                    {#if !$showMore}
                        <div style="width:100%; display:flex; justify-content:center; margin: 0 0 1rem 0;">
                            <button
                                class="ver-mais"
                                on:click={toggleShowMore}
                                aria-expanded={$showMore}
                                aria-controls="timeline-more"
                            >
                                Ver mais
                            </button>
                        </div>
                    {/if}

            {#if $showMore}
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
                        aria-expanded={$showMore}
                        aria-controls="timeline-more"
                    >
                        Ver menos
                    </button>
                </div>
            {/if}
        </div>
        
    </div>
</div>