<script lang="ts">
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

/* Redes: layout responsivo e quebra de texto segura */
.redes-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /* ajusta automaticamente colunas */
  gap: 2rem 2rem; /* espaçamento vertical e horizontal mais uniforme */
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.rede-link {
  display: block; /* garante que o link ocupe o espaço da célula */
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
  min-width: 0; /* permite que o item flex encolha corretamente em containers pequenos */
}

.rede-item img {
  width: 45px;
  height: 45px;
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
    gap: 1.5rem 1rem;
    grid-template-columns: 1fr; /* uma coluna em mobile para evitar cortes */
    padding: 0 0.5rem;
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
    <a class="rede-link" href="https://www.instagram.com/petinfpucrs" target="_blank">
      <div class="rede-item">
        <img src="instagram_icon.png" alt="Instagram">
        <span>@petinfpucrs</span>
      </div>
    </a>
    <a class="rede-link" href="https://www.youtube.com/@petinfpucrs" target="_blank">
      <div class="rede-item">
        <img src="youtube_icon.png" alt="YouTube">
        <span>PET Informática PUCRS</span>
      </div>
    </a>
    <a class="rede-link" href="https://github.com/PET-Inf" target="_blank">
      <div class="rede-item">
        <img src="github_icon.png" alt="Github">
        <span>PET Inf</span>
      </div>
    </a>
    <a class="rede-link" href="mailto:petinf.pucrs@gmail.com">
      <div class="rede-item">
        <img src="email_icon.png" alt="Email">
        <span>petinf.pucrs@gmail.com</span>
      </div>
    </a>
  </div>
</section>
