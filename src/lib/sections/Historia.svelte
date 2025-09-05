<script lang="ts">
  import { base } from '$app/paths';
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
    
    /* Classes de utilidade que podem estar faltando, como as do Tailwind */
    .text-3xl { font-size: 1.875rem; }
    .md\:text-4xl { @media (min-width: 768px) { font-size: 2.25rem; } }
    .font-bold { font-weight: 700; }
    .text-center { text-align: center; }
    .mb-8 { margin-bottom: 2rem; }
    .md\:mb-12 { @media (min-width: 768px) { margin-bottom: 3rem; } }

</style>

<div class="timeline-section">

    <div class="content-container">

        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">História</h2>

        <div class="timeline">
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
                    <p>1º tutor do PET-Inf</p>
                </div>
                <div class="timeline-circle image-1"></div>
            </div>

            <div class="timeline-item left">
                <div class="timeline-circle image-2"></div>
                <div class="timeline-content">
                    <h3>1993</h3>
                    <h4>Prof. Dr. Afonso Orth</h4>
                    <p>2º e 8º tutor do PET-Inf</p>
                </div>
            </div>

            <div class="timeline-item right">
                <div class="timeline-content">
                    <h3>1996</h3>
                    <h4>Prof. Dr. Celso Maciel</h4>
                    <p>3º tutor do PET-Inf, e novamente em 2010</p>
                </div>
                <div class="timeline-circle image-1"></div>
            </div>

            <div class="timeline-item left">
                <div class="timeline-circle image-2"></div>
                <div class="timeline-content">
                    <h3>2001</h3>
                    <h4>Prof. Dr. Fabiano Hessel</h4>
                    <p>4º tutor do PET-Inf</p>
                </div>
            </div>
            
            <div class="timeline-item right">
                <div class="timeline-circle image-2"></div>
                <div class="timeline-content">
                    <h3>2002</h3>
                    <h4>Prof. Dr. Luís Lamb</h4>
                    <p>5º tutor do PET-Inf</p>
                </div>
            </div>

            <div class="timeline-item left">
                <div class="timeline-circle image-2"></div>
                <div class="timeline-content">
                    <h3>2002</h3>
                    <h4>Profa. Dra. Lúcia Giraffa</h4>
                    <p>6ª tutora do PET-Inf</p>
                </div>
            </div>

            <div class="timeline-item right">
                <div class="timeline-circle image-2"></div>
                <div class="timeline-content">
                    <h3>2005</h3>
                    <h4>Prof. Dr. Alfio Martini</h4>
                    <p>7º tutor do PET-Inf</p>
                </div>
            </div>

            <div class="timeline-item left">
                <div class="timeline-circle image-2"></div>
                <div class="timeline-content">
                    <h3>2010</h3>
                    <h4>Prof. Dr. Celso Maciel</h4>
                    <p>2º e 8º tutor do PET-Inf</p>
                </div>
            </div>

            <div class="timeline-item right">
                <div class="timeline-circle image-2"></div>
                <div class="timeline-content">
                    <h3>2011</h3>
                    <h4>Prof. Dr. Tiago Ferreto</h4>
                    <p>9º tutor do PET-Inf</p>
                </div>
            </div>

            <div class="timeline-item left">
                <div class="timeline-circle image-2"></div>
                <div class="timeline-content">
                    <h3>2018</h3>
                    <h4>Prof. Dr. Alfio Martini</h4>
                    <p>7º e 10º tutor do PET-Inf</p>
                </div>
            </div>

            <div class="timeline-item right">
                <div class="timeline-circle image-2"></div>
                <div class="timeline-content">
                    <h3>2019</h3>
                    <h4>Prof. Dr. Rafael Garibotti</h4>
                    <p>11º tutor do PET-Inf</p>
                </div>
            </div>

            <div class="timeline-item left">
                <div class="timeline-circle image-2"></div>
                <div class="timeline-content">
                    <h3>2020</h3>
                    <h4>Prof. Dr. Tiago Ferreto</h4>
                    <p>9º e 12º tutor do PET-Inf</p>
                </div>
            </div>

            <div class="timeline-item right">
                <div class="timeline-circle image-2"></div>
                <div class="timeline-content">
                    <h3>2023</h3>
                    <h4>Profa. Dra. Milene Silveira</h4>
                    <p>13ª tutora do PET-Inf</p>
                </div>
            </div>

            <div class="timeline-bottom-circle">
                <a href="{base}/selecao">Faça parte da nossa história!</a>
            </div>
        </div>
        
    </div>
</div>