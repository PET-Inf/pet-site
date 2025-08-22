<script lang="ts">
	import '../../app.css';

  let menuOpen = false

  const toggleMenu = () => menuOpen = !menuOpen;
  const closeMenu = () => menuOpen = false;
</script>


<nav class="navbar">
  <!-- Menu dropdown para mobile -->
  <div class="menu-toggle-wrapper">
    <button class="menu-toggle" on:click={toggleMenu}>☰</button>
    {#if menuOpen}
      <div class="dropdown">
        <a href="/#sobre" on:click={closeMenu}>Sobre</a>
        <a href="/#projetos" on:click={closeMenu}>Projetos</a>
        <a href="/#historia" on:click={closeMenu}>História</a>
        <a href="/#equipe" on:click={closeMenu}>Nossa Equipe</a>
        <a href="/#galeria" on:click={closeMenu}>Galeria</a>
        <a href="/#talks" on:click={closeMenu}>Talks</a>
        <a href="/#contato" on:click={closeMenu}>Contato</a>
      </div>
    {/if}
  </div>

  <a href="/#inicio">
    <img src="/logo_PET.png" alt="Logo" class="logo" />
  </a>

  <!-- Menu horizontal desktop -->
  <ul class="menu">
    <a href="/#sobre">Sobre</a>
    <a href="/#projetos">Projetos</a>
    <a href="/#historia">História</a>
    <a href="/#equipe">Nossa Equipe</a>
    <a href="/#galeria">Galeria</a>
    <a href="/#talks">Talks</a>
    <a href="/#contato">Contato</a>
  </ul>
</nav>