import Inicio from '@/components/sections/Inicio';
import Sobre from '@/components/sections/Sobre';
import Projetos from '@/components/sections/Projetos';
import Historia from '@/components/sections/Historia';
// import Talks from '@/components/Talks';
import Equipe from '@/components/sections/Equipe';
import Galeria from '@/components/sections/Galeria';
import Contato from '@/components/sections/Contato';

export default function Page() {
  return (
    <main>
      <section id="inicio">
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
      {/* <section id="talks">
        <Talks />
      </section> */}
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
  );
}