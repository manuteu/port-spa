## Portfólio SPA

Aplicação de portfólio em **Single Page Application (SPA)** construída com React + Vite, com foco em apresentação profissional de perfil front-end, projetos, experiência e contato em uma única página com animações suaves.

Design de referência no Figma:  
https://www.figma.com/design/uPAeVa4rAm2fwUCW90g1u8/Portifolio

## Sobre a aplicação

O projeto é organizado em seções principais:

- **Hero**: apresentação inicial com chamada para contato e links sociais.
- **Habilidades**: cards de competências e lista de tecnologias.
- **Projetos**: grade de projetos com tags, link de código e demo.
- **Experiência**: linha do tempo de trajetória profissional.
- **Contato**: informações de contato e formulário visual.
- **Footer**: redes sociais e assinatura final.

## Tecnologias utilizadas

- React 18
- Vite 6
- TypeScript
- Tailwind CSS 4
- Motion (animações)
- Lucide React (ícones)
- Base de componentes UI com Radix/shadcn

## Pré-requisitos

- Node.js 18+ (recomendado)
- npm ou pnpm

## Como executar

1. Instale as dependências:

```bash
npm install
```

ou

```bash
pnpm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

ou

```bash
pnpm dev
```

3. Abra no navegador o endereço exibido pelo Vite (normalmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
```

ou

```bash
pnpm build
```

## Estrutura do projeto

```text
src/
  app/
    App.tsx
    components/
      Hero.tsx
      Skills.tsx
      Projects.tsx
      Experience.tsx
      Contact.tsx
      Footer.tsx
      ui/...
  styles/
    index.css
    tailwind.css
    theme.css
  main.tsx
```

## Personalização recomendada

Antes de publicar, ajuste os dados de exemplo:

- Nome e título profissional.
- Links de GitHub/LinkedIn.
- E-mail, telefone e localização.
- Projetos reais (título, descrição, links e imagens).
- Experiências profissionais e conquistas.

## Licença

Uso livre para estudo e adaptação.
  