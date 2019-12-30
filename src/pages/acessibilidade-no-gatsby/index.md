---
title: 'Acessibilidade no gatsby'
date: '2019-12-30'
description: 'Criando páginas acessíveis com gatsby'
---

Quando decidi trazer as minhas postagens para minha propria plataforma, então Gatsby foi a primeira opção que veio na minha mente, mesmo sabendo que teria alguns obstaculos de acessibilidade pela natureza de SPA do Gatsby.

Pra quem nunca utilizou ou procurou sobre o Gatsby, ele é um gerador de páginas estáticas, que utiliza React e que no momento de compilação pré-renderiza todas as rotas para HTML, o que faz ser parecido com SSR, mas tudo acontece em tempo de compilação e não de execução. Então se você tem `pages/blog.js`, `pages/index.js`, sua pasta `public` vai ter `blog.html`, `index.html` e vários bundles JavaScript. Assim, todas as páginas funcionarão mesmo se o usuário esstiver com o JavaScript desabilitado.
Então qual a diferença de outros geradores estáticos?
Se JavaScript estiver habilitado, o site ganha um 'boost' e agora é uma aplicação React e um SPA completo. Se o usuário está em `gustavoporto.dev` e clica no link para o blog, em vez de buscar pelo `blog.html` a aplicação continua montada e busca os arquivos necessários para renderizar `blog.js`.

WIP.
