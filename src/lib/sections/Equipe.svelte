<script>
  import { base } from '$app/paths';

  // Mudar aqui quando for preciso atualizar a lista de membros
  const slides = [
    {
      imgSrc: "/equipe/milene.png",
      altText: "Foto da Milene",
      description: "Coordenadora - Milene Silveira"
    },
    {
      imgSrc: "/equipe/amanda.jpg",
      altText: "Foto da Amanda",
      description: "Amanda Luiz"
    },
    {
      imgSrc: "/equipe/ana.png",
      altText: "Foto da Ana",
      description: "Ana Schmitt"
    },
    {
      imgSrc: "/equipe/eduardo.jpg",
      altText: "Foto do Eduardo",
      description: "Eduardo Traunig"
    },
    {
      imgSrc: "/equipe/erickmachado.jpg",
      altText: "Foto do Erick",
      description: "Erick Machado"
    },
    {
      imgSrc: "/equipe/francine.jpg",
      altText: "Foto da Francine",
      description: "Francine Delanni"
    },
    {
      imgSrc: "/equipe/gabriel.jpg",
      altText: "Foto do Gabriel Bremm",
      description: "Gabriel Bremm"
    },
    {
      imgSrc: "/equipe/gabrieltomaz.jpg",
      altText: "Foto do Gabriel Tomaz",
      description: "Gabriel Tomaz"
    },
    {
      imgSrc: "/equipe/gustavo.png",
      altText: "Foto do Gustavo",
      description: "Gustavo Gallo"
    },
    {
      imgSrc: "/equipe/joaogabriel.jpg",
      altText: "Foto do Joao Gabriel",
      description: "João Gabriel"
    },
    {
      imgSrc: "/equipe/mauricio.jpg",
      altText: "Foto do Mauricio",
      description: "Maurício Alcântara"
    },
    {
      imgSrc: "/equipe/stefano.png",
      altText: "Foto do Stefano",
      description: "Stéfano Carraro"
    },
    {
      imgSrc: "/equipe/vinicius.jpg",
      altText: "Foto do Vinicius",
      description: "Vinícius Ross"
    }
  ];

  let slideIndex = 0;

  /**
	 * @param {number} n
	 */
  function mudarSlide(n) {
    let novoIndex = slideIndex + n;
    if (novoIndex >= slides.length) {
      novoIndex = 0; 
    } else if (novoIndex < 0) {
      novoIndex = slides.length - 1;
    }
    slideIndex = novoIndex;
  }
</script>

<div class="componente-carrossel-wrapper">
  
  <h2 class="carrossel-titulo">Equipe do PET</h2>

  <div class="carrossel-container">
    <div class="carrossel-slides" style="transform: translateX(-{slideIndex * 100}%)">
      {#each slides as slide}
        <div class="carrossel-item">
          <img src={base}{slide.imgSrc} alt={slide.altText}>
          <p>{slide.description}</p>
        </div>
      {/each}
    </div>

    <button class="prev" on:click={() => mudarSlide(-1)}>&#10094;</button>
    <button class="next" on:click={() => mudarSlide(1)}>&#10095;</button>
  </div>
</div>


<style>
  .componente-carrossel-wrapper {
    width: 100%;
    padding: 1rem 0;
  }

  .carrossel-titulo {
    text-align: center;
    color: #1e293b; 
    font-size: 2.25rem;
    margin-bottom: 1.5rem; /* Espaço entre o título e o carrossel */
    font-weight: 600;
  }

  .carrossel-container {
    position: relative;
    max-width: 500px;
    width: 95%; 
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0 auto; 
  }

  .carrossel-slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carrossel-item {
    min-width: 100%;
    box-sizing: border-box;
  }

  .carrossel-item img {
    width: 100%;
    display: block;
    max-height: 450px;
    object-fit: contain;
  }

  .carrossel-item p {
    text-align: center;
    padding: 15px;
    margin: 0;
    background-color: #fff;
    font-size: 1rem;
    font-weight: 500;
    color: #334155;
  }

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -30px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    z-index: 2;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    /* Adicionado ajuste no tamanho do título para telas menores */
    .carrossel-titulo {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    .carrossel-item p {
        font-size: 0.9rem;
        padding: 12px;
    }

    .prev, .next {
        font-size: 18px;
        padding: 12px;
        top: 45%; 
        transform: translateY(-50%);
        margin-top: 0;
    }

    .carrossel-item img {
        max-height: 250px;
    }
  }

  @media (max-width: 480px) {
    .carrossel-container {
        width: 100%; 
        border-radius: 0;
    }

    .prev, .next {
        font-size: 16px;
        padding: 10px;
    }

    .carrossel-item p {
        font-size: 0.8rem;
    }
  }
</style>