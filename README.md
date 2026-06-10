# Site do PET-Informática PUCRS

Este é o repositório do site institucional do grupo PET-Informática da PUCRS. O projeto foi desenvolvido para modernizar a presença online do grupo, facilitar a divulgação de suas atividades e fortalecer a comunicação com a comunidade.

## 📜 Sobre o Projeto

O Programa de Educação Tutorial (PET) é uma iniciativa do governo federal que busca proporcionar uma formação acadêmica integrada através de atividades de ensino, pesquisa e extensão. O PET-Informática da PUCRS, inserido nesse contexto, reúne estudantes da área de tecnologia para desenvolver projetos que vão além do currículo formal.

A necessidade de um novo site surgiu devido às dificuldades de manutenção da versão anterior. Este projeto foi desenvolvido de forma colaborativa pelos membros do grupo, com o objetivo de criar uma plataforma digital moderna, de fácil acesso e que amplie a visibilidade das ações do PET-Informática.

## 🛠️ Arquitetura e Tecnologias

O site foi construído utilizando tecnologias modernas de desenvolvimento web, com foco em performance, manutenibilidade e uma boa experiência de usuário.

### Tecnologias Principais

- ⚡ **SvelteKit**: O framework oficial para Svelte que fornece roteamento baseado em arquivos, geração de sites estáticos (SSG) e gerenciamento global da aplicação.
- 🎨 **Svelte**: Um compilador que transforma componentes em código JavaScript altamente eficiente e sem runtime, resultando em uma aplicação extremamente rápida.
- 📘 **TypeScript**: Adiciona tipagem estática ao JavaScript, o que ajuda a prevenir bugs em tempo de desenvolvimento e melhora a manutenibilidade do código.
- 🚀 **Vite**: Uma ferramenta de build ultrarrápida que oferece uma experiência de desenvolvimento ágil com Hot Module Replacement (HMR).
- 💨 **Tailwind CSS**: Um framework CSS *utility-first* utilizado para construir designs responsivos e customizados diretamente nas classes dos elementos.
- 🌐 **GitHub Pages**: Plataforma onde o site é hospedado de forma estática e gratuita, simplificando o processo de deploy.

### Estrutura do Projeto

A estrutura de pastas do projeto está organizada da seguinte forma:

```text
/
├── .github/
│   ├── workflows/        # Workflows do GitHub Actions (Deploy e CI)
│   └── dependabot.yml    # Configuração de atualizações automáticas de dependências
├── src/
│   ├── lib/
│   │   ├── components/   # Componentes reutilizáveis (Navbar, Footer, etc.)
│   │   └── sections/     # Seções da página principal (Início, Sobre, Projetos, etc.)
│   ├── routes/           # Sistema de rotas baseado em arquivos do SvelteKit
│   └── app.html          # Template HTML principal da aplicação
├── static/               # Arquivos estáticos públicos (imagens, ícones, fontes, etc.)
├── package.json          # Dependências e scripts do projeto
└── svelte.config.js      # Configurações de adapters e pré-processadores do SvelteKit
```

## ⚙️ Integração Contínua e Manutenibilidade

Para garantir a qualidade, a segurança e a automação do projeto, o repositório conta com:

- 🔄 **Deploy Automatizado (CI/CD)**: Configurado via GitHub Actions (`deploy.yml`), que realiza o build e publica a versão estável automaticamente no GitHub Pages sempre que um push é feito na branch `main` ou um Pull Request é integrado.
- 🛡️ **Dependabot**: Configuração ativa (`dependabot.yml`) que monitora semanalmente as dependências do ecossistema NPM e do GitHub Actions, abrindo Pull Requests automáticos para corrigir vulnerabilidades de segurança e manter os pacotes atualizados.

## 🚀 Como Rodar o Projeto

Para executar o projeto em seu ambiente de desenvolvimento, siga os passos abaixo:

1. **Pré-requisitos**: Certifique-se de ter o [Node.js](https://nodejs.org/) (**versão 20 ou superior**) e o [npm](https://www.npmjs.com/) instalados em sua máquina.

2. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/pet-inf/pet-site.git
   cd pet-site
   ```

3.  **Instalar as Dependências**:
    ```bash
    npm install
    ```

4.  **Executar o Servidor de Desenvolvimento**:
    ```bash
    npm run dev
    ```

    Após executar o comando, o site estará disponível localmente em `http://localhost:5173`.

## ⌨️ Scripts Disponíveis

Este projeto inclui vários scripts para facilitar o desenvolvimento e a manutenção:

-   `npm run dev`: Inicia o servidor de desenvolvimento com hot-reload.
-   `npm run build`: Gera a versão de produção do site na pasta `build/`.
-   `npm run preview`: Inicia um servidor local para visualizar a versão de produção.
-   `npm run check`: Executa o Svelte-check para verificar erros de tipo e outros problemas no código.
-   `npm run lint`: Executa o ESLint para analisar o código e encontrar problemas.
-   `npm run format`: Formata todo o código do projeto utilizando o Prettier.
-   `npm run test`: Executa os testes unitários com o Vitest.
-   `npm run test:unit`: Executa os testes unitários em modo de observação (watch mode).
