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
  display: grid;
  grid-template-columns: repeat(2, auto); /* força duas colunas com largura do conteúdo */
  gap: 2rem 5rem; /* espaçamento vertical e horizontal */
  justify-content: center;
  margin: 0 auto;
}

.rede-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;
  color: #333;
}

.rede-item img {
  width: 45px;
  height: 45px;
}

/* Layout responsivo para telas menores */
@media (max-width: 600px) {
  .redes-container {
    gap: 1.5rem 2rem; /* menos espaço em mobile */
  }

  .rede-item {
    font-size: 1rem;
  }
}
</style>

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
