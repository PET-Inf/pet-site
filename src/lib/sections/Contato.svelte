<script lang="ts">
    import Fa from 'svelte-fa';
    import {faGithub, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
    import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
    import { pageTitle } from '../../stores';
    pageTitle.set('PET - Informática');
</script>

<style>
.contato-section {
  width: 100%;
  padding: 4rem 1rem;
  background-color: #f2f2f2;
  box-sizing: border-box;
  text-align: center;
}

.contato-title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .contato-title {
    font-size: 2.25rem;
    margin-bottom: 3rem;
  }
}

.redes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;
  width: 100%;
  max-width: 800px; 
  box-sizing: border-box;
}

.rede-link {
  flex: 1 1 300px; 
  max-width: 45%; 
  display: block; 
  text-decoration: none;
  color: inherit;
}

.rede-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;
  color: #333;
  padding: 0.25rem;
  min-width: 0; 
}

.rede-item :global(svg) {
  color: #1A447C;
  width: 50px;
  height: 50px;
  flex: 0 0 auto; /* imagem não encolhe além do definido */
}

/* Permite que o texto quebre em várias linhas em telas pequenas */
.rede-item span {
  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
}

/* Layout responsivo para telas menores */
@media (max-width: 600px) {
  .redes-container {
    flex-direction: column;
    align-items: flex-start; 
    gap: 1.5rem;
    padding: 0 1rem; 
  }

  .rede-link {
    max-width: 100%; 
    flex-basis: auto; 
  }

  .rede-item {
    font-size: 1rem;
  }
}
</style>

<svelte:head>
  <title>{$pageTitle}</title>
</svelte:head>

<section class="contato-section">
  <div class="contato-title">Contatos e Redes Sociais</div>
  <div class="redes-container">
    <a class="rede-link" href="https://www.instagram.com/petinfpucrs" target="_blank" rel="noopener noreferrer">
      <div class="rede-item">
        <Fa icon = {faInstagram}/>
        <span>@petinfpucrs</span>
      </div>
    </a>
    <a class="rede-link" href="https://www.youtube.com/@petinfpucrs" target="_blank" rel="noopener noreferrer">
      <div class="rede-item">
        <Fa icon = {faYoutube}/>
        <span>PET Informática PUCRS</span>
      </div>
    </a>
    <a class="rede-link" href="https://github.com/PET-Inf" target="_blank" rel="noopener noreferrer">
      <div class="rede-item">
        <Fa icon = {faGithub}/>
        <span>PET Inf</span>
      </div>
    </a>
    <a class="rede-link" href="mailto:petinf.pucrs@gmail.com" rel="noopener noreferrer">
      <div class="rede-item">
        <Fa icon = {faEnvelope}/>
        <span>petinf.pucrs@gmail.com</span>
      </div>
    </a>
  </div>
</section>
