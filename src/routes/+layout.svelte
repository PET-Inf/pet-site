<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<img src="/logo_PET.png" alt="Logo" class="logo" />

<nav class="navbar">
	<a href="/">Home</a>
	<a href="/about">Sobre</a>
	<a href="/members">Membros</a>
	<a href="/projects">Projetos</a>

</nav>

{@render children()}
