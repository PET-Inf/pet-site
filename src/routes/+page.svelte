<script lang="ts">
	import '../app.css';
  import Navbar from '$lib/components/Navbar/Navbar.svelte';
  import Inicio from '$lib/sections/Inicio/Inicio.svelte';
	import Sobre from '$lib/sections/Sobre/Sobre.svelte';
	import Historia from '$lib/sections/Historia/Historia.svelte';
	import Projetos from '$lib/sections/Projetos/Projetos.svelte';
	import Talks from '$lib/sections/Talks/Talks.svelte';
	import Equipe from '$lib/sections/Equipe/Equipe.svelte';
	import Galeria from '$lib/sections/Galeria/Galeria.svelte';
	import Contato from '$lib/sections/Contato/Contato.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';

  let menuOpen = false

  const toggleMenu = () => menuOpen = !menuOpen;
  const closeMenu = () => menuOpen = false;
</script>

<Navbar />
<main>
  <section id = "inicio">
    <Inicio />
  </section>
  <section id="sobre">
    <Sobre />
  </section>
   <section id="projetos">
    <Projetos />
  </section>
  <section id="historia">
    <Historia />
  </section>
  <section id="talks">
    <Talks />
  </section>
  <section id="equipe">
    <Equipe />
  </section>
  <section id="galeria">
    <Galeria />
  </section>
  <section id="contato">
    <Contato />
  </section>
</main>

<Footer />



