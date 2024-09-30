# Open-Coding Injeção de dependência com TSyringe

# Getting started

## Dependências e Instalação

**Node.js**
Primeiro, para rodar o projeto na sua máquina, vamos precisar utilizar o Node.js. Para instalar o node, basta ir neste [site aqui](https://nodejs.org/en). Caso você não saiba como instalar o Node.js, acesse [esse conteúdo](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=111087461203&hsa_ad=687448474447&hsa_src=s&hsa_tgt=aud-527303763294:dsa-2276348409543&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=2&gclid=Cj0KCQiAz8GuBhCxARIsAOpzk8zVvzeTv3NsGA8_-Wm4cxUL2KAHY9VNJIc4YJBQx39r3qC79C8Jh_4aAsTjEALw_wcB) e instale de acordo com seu sistema operational (Windows, Linux, MacOS).

**Dependências do projeto**

Para instalar as dependências do projeto, acesse a pasta do projeto no terminal. Depois acesse qual dos subprojetos você quer instalar as dependências, entrando na pasta `concepts` ou na pasta `calculator-dip`. Dentro de uma dessas pastas, rode o comando:

```bash
npm install
```

Ou utilize o gerenciador de pacotes que preferir como `yarn`, `pnpm`, etc.

## Rodando o projeto

Para rodar o projeto em sua máquina, basta digitar o script:

```bash
npm run start:dev
```

## Modificando o projeto

Você pode brincar com este projeto como quiser em sua máquina. O arquivo `src/main` é quem inicializa todos os serviços, você pode criar novas classes utilizando os decorators do TSyringe e depois importar e instanciar estas classes com o `container.resolve` dentro da função `main`.

# Links

- [Docs do TSyringe](https://github.com/microsoft/tsyringe?tab=readme-ov-file#scoped)