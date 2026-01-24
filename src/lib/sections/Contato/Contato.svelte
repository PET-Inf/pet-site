<script lang="ts">
    import './Contato.css'
    import Fa from 'svelte-fa';
    import {faGithub, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
    import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
    import { pageTitle } from '../../../stores';
    pageTitle.set('PET - Informática');
</script>

<svelte:head>
  <title>{$pageTitle}</title>
</svelte:head>

<section class="contato-section">
  <div class="contato-title">Contatos e Redes Sociais</div>
  <div class="redes-container">
    <a class="rede-link" href="https://www.instagram.com/petinfpucrs" target="_blank" rel="noopener noreferrer">
      <div class="rede-item">
        <Fa icon = {faInstagram} class="icone-rede"/>
        <span>@petinfpucrs</span>
      </div>
    </a>
    <a class="rede-link" href="https://www.youtube.com/@petinfpucrs" target="_blank" rel="noopener noreferrer">
      <div class="rede-item">
        <Fa icon = {faYoutube} class="icone-rede"/>
        <span>PET Informática PUCRS</span>
      </div>
    </a>
    <a class="rede-link" href="https://github.com/PET-Inf" target="_blank" rel="noopener noreferrer">
      <div class="rede-item">
        <Fa icon = {faGithub} class="icone-rede"/>
        <span>PET Inf</span>
      </div>
    </a>
    <a class="rede-link" href="mailto:petinf.pucrs@gmail.com" rel="noopener noreferrer">
      <div class="rede-item">
        <Fa icon = {faEnvelope} class="icone-rede"/>
        <span>petinf.pucrs@gmail.com</span>
      </div>
    </a>
  </div>
</section>
