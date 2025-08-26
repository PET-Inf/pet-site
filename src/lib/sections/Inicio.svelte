<script>
import { base } from '$app/paths';  
</script>

<style>
.banner {
  position: relative;
  width: 100%;
  height: 65vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding-top: 6rem;
}

.banner h2 {
  font-size: 2.5rem;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.2);
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.8),
    0 4px 10px rgba(0, 0, 0, 0.7);
  text-align: center;
}

@media (max-width: 768px) {
  .banner {
    height: 65vh;
    padding-top: 4rem;
  }

  .banner h2 {
    font-size: 1.8rem;
  }
}
</style>

<div class="banner" style="background-image: url({base}/pet_sala.png)">
  <h2>Desde 1991 realizando projetos inovadores!</h2>
</div>
