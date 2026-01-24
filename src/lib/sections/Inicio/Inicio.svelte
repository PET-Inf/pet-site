<script>
  import './Inicio.css'
  import { base } from '$app/paths';  
  import { pageTitle } from '../../../stores';
  pageTitle.set('PET - Informática');
</script>

<svelte:head>
  <title>{$pageTitle}</title>
</svelte:head>

<div class="banner" style="background-image: url({base}/pet_sala.png)">
  <h2>Desde 1991 realizando projetos inovadores!</h2>
</div>
