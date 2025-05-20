<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>


<nav class="navbar">
  <a href="/">
    <img src="/logo_PET.png" alt="Logo" class="logo" />
  </a>
  <ul class="menu">
    <a href="/sobre">Sobre</a>
    <a href="/historia">História</a>
    <a href="/projetos">Projetos</a>
    <a href="/talks">Talks</a>
    <a href="/equipe">Nossa Equipe</a>
    <a href="/galeria">Galeria</a>
    <a href="/contato">Contato</a>
    <div class="underline"></div>
  <ul>
</nav>

{@render children()}
