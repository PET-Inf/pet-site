<script lang="ts">
	import '../../../app.css';

  import { base } from '$app/paths';

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
        <a href="{base}/#sobre" on:click={closeMenu}>Sobre</a>
        <a href="{base}/#projetos" on:click={closeMenu}>Projetos</a>
        <a href="{base}/#historia" on:click={closeMenu}>História</a>
        <a href="{base}/#equipe" on:click={closeMenu}>Nossa Equipe</a>
        <!--<a href="{base}/#galeria" on:click={closeMenu}>Galeria</a>-->
        <!--<a href="{base}/#talks" on:click={closeMenu}>Talks</a>-->
        <a href="{base}/selecao" on:click={closeMenu}>Seleção</a>
        <a href="{base}/#contato" on:click={closeMenu}>Contato</a>
      </div>
    {/if}
  </div>

  <a href="{base}/#inicio" class = "logo-link">
    <img src="{base}/logo_PET.png" alt="Logo" class="logo" />
  </a>

  <!-- Menu horizontal desktop -->
  <ul class="menu">
    <a href="{base}/#sobre">Sobre</a>
    <a href="{base}/#projetos">Projetos</a>
    <a href="{base}/#historia">História</a>
    <a href="{base}/#equipe">Nossa Equipe</a>
    <!-- <a href="{base}/#galeria">Galeria</a>-->
    <!--<a href="{base}/#talks">Talks</a>-->
    <a href="{base}/selecao">Seleção</a>
    <a href="{base}/#contato">Contato</a>
  </ul>
</nav>