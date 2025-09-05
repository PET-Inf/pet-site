<script lang="ts">
    import { pageTitle } from '../../stores';
    pageTitle.set('PET - Informática');
</script>

<style>
.projects-section {
    text-align: center;
    padding-top: 2vw;    
    padding-bottom: 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: center; 
}

.container {
    display: flex;
    flex-wrap: wrap;          
    justify-content: center;  
    gap: 20px;                
    margin-top: 20px;
}

.card {
    width: 400px;
    aspect-ratio: 400 / 220;
    background: #000000;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    color: #F2F2F2;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 10px;
}

.card-text {
    background: #1E1E1E; 
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    margin: 0;
    border-radius: none;
}

/* Responsividade */
@media (max-width: 768px) {
  
    .card {
        width: 45%; 
    }
}

@media (max-width: 480px) {
    .projects-section {
        padding-top: 6vw;    
        padding-bottom: 6vw; 
    }

    .container {
        padding: 0 24px;
    }
    .card {
        width: 100%; 
    }
}

</style>

<svelte:head>
  <title>{$pageTitle}</title>
</svelte:head>

<div class="projects-section">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Projetos</h2>
    <p class="text-lg mb-2">Veja os trabalhos em desenvolvimento!</p>
    <div class="container">
        <div class="card">
            <p class="card-text">Projeto 1</p>
        </div>
        <div class="card">
            <p class="card-text">Projeto 2</p>
        </div>
        <div class="card">
            <p class="card-text">Projeto 3</p>
        </div>
        <div class="card">
            <p class="card-text">Projeto 4</p>
        </div>
        <div class="card">
            <p class="card-text">Projeto 5</p>
        </div>
        <div class="card">
            <p class="card-text">Projeto 6</p>
        </div>
    </div>
</div>
