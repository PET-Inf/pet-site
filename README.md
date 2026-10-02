# Site do PET-Informática PUCRS

Este é o repositório do site institucional do grupo PET-Informática da PUCRS. O projeto foi desenvolvido para modernizar a presença online do grupo, facilitar a divulgação de suas atividades e fortalecer a comunicação com a comunidade.

## 📜 Sobre o Projeto

O Programa de Educação Tutorial (PET) é uma iniciativa do governo federal que busca proporcionar uma formação acadêmica integrada através de atividades de ensino, pesquisa e extensão. O PET-Informática da PUCRS, inserido nesse contexto, reúne estudantes da área de tecnologia para desenvolver projetos que vão além do currículo formal.

A necessidade de um novo site surgiu devido às dificuldades de manutenção da versão anterior. Este projeto foi desenvolvido de forma colaborativa pelos membros do grupo, com o objetivo de criar uma plataforma digital moderna, de fácil acesso e que amplie a visibilidade das ações do PET-Informática.

## 🛠️ Arquitetura e Tecnologias

O site foi construído utilizando tecnologias modernas de desenvolvimento web, com foco em performance, manutenibilidade e uma boa experiência de usuário.

### Tecnologias Principais

- ⚡ **Next.js 16**: Framework React que fornece roteamento pelo App Router, renderização de páginas e ferramentas de desenvolvimento e build.
- ⚛️ **React 19**: Biblioteca utilizada para construir a interface a partir de componentes.
- 📘 **TypeScript**: Adiciona tipagem estática ao JavaScript e ajuda a detectar problemas durante o desenvolvimento.
- 🎨 **Tailwind CSS 4**: Framework _utility-first_ utilizado para estilizar elementos diretamente pelas classes.
- 🧩 **CSS Modules**: Mantém os estilos específicos de componentes isolados em arquivos `.module.css`.
- 🖼️ **React Icons**: Biblioteca de ícones utilizada nos componentes da interface.
- 🛠️ **PostCSS**: Processa os estilos e integra o Tailwind CSS ao build.

### Estrutura do Projeto

A estrutura de pastas do projeto está organizada da seguinte forma:

```text
/
├── app/                  # Rotas e layout raiz do App Router
│   ├── selecao/          # Página de seleção
│   ├── globals.css       # Estilos globais e configuração do Tailwind
│   ├── layout.tsx        # Layout raiz da aplicação
│   └── page.tsx          # Página inicial
├── components/
│   ├── layout/           # Navbar e rodapé
│   └── sections/         # Seções e componentes da página
├── data/                 # Dados utilizados pelos componentes
├── hooks/                # Hooks React reutilizáveis
├── public/               # Imagens e outros arquivos estáticos
├── next.config.ts        # Configuração do Next.js
├── package.json          # Dependências e scripts do projeto
├── postcss.config.mjs    # Configuração do PostCSS e Tailwind CSS
└── tsconfig.json         # Configuração do TypeScript
```

## ⚙️ Qualidade e Manutenibilidade

O projeto utiliza TypeScript para verificação estática e ESLint para análise do código. O build de produção também valida a compilação da aplicação.

## 🚀 Como Rodar o Projeto

Para executar o projeto em seu ambiente de desenvolvimento, siga os passos abaixo:

1. **Pré-requisitos**: Certifique-se de ter o [Node.js](https://nodejs.org/) (**versão 20.9 ou superior**) e o [npm](https://www.npmjs.com/) instalados em sua máquina.

2. **Clonar o Repositório**:

   ```bash
   git clone https://github.com/pet-inf/pet-site.git
   cd pet-site
   ```

3. **Instalar as Dependências**:

   ```bash
   npm install
   ```

4. **Executar o Servidor de Desenvolvimento**:

   ```bash
   npm run dev
   ```

   Após executar o comando, o site estará disponível localmente em `http://localhost:3000`.

## ⌨️ Scripts Disponíveis

Este projeto inclui vários scripts para facilitar o desenvolvimento e a manutenção:

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera o build de produção do Next.js.
- `npm run start`: Inicia o servidor com o build de produção. Execute `npm run build` antes.
- `npm run lint`: Executa o ESLint.
- `npm run lint:fix`: Executa o ESLint e aplica correções automáticas quando possível.
