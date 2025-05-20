<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>


<nav class="navbar">
  <a href="/">
    <img src="/logo_PET.png" alt="Logo" class="logo" />
  </a>
  <ul class="menu">
    <a href="/about">Sobre</a>
    <a href="/about">História</a>
    <a href="/projects">Projetos</a>
    <a href="/talks">Talks</a>
    <a href="/Members">Nossa Equipe</a>
    <a href="/gallery">Galeria</a>
    <a href="/contact">Contato</a>
    <div class="underline"></div>
  <ul>
</nav>

{@render children()}