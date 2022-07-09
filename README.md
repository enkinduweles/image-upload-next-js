<h1 align="center">
  <img src='./public/logo.svg'/>
</h1>

<p align="center">Este projeto foi criado para o desafio do <strong> Programa Ignite da Rocketseat,</strong> através de um projeto base as atividades da aplicação foram criadas</p>

<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#rodando-o-app">Rodando o app</a> •
 <a href="#rotas">Rotas</a> •
 <a href="#autor">Autor</a>
</p>

<p align="center">
  <img src="https://media.giphy.com/media/ozhndgbfqGbVJdmu0i/giphy.gif" />
</p>

## Objetivo

Através do projeto base, criar as seguintes funcionalidades

- Configurar a aplicação para lidar com cache e sincronização de dados
- Listar imagens utilizando o conceito de infinity queries
- Cadastrar imagem utilizando a API do imgBB e com a URL salvar no banco de dados Fauna

## Tecnologias

- [NextJS](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Axios](https://axios-http.com)
- [Typescript](https://www.typescriptlang.org/)
- [React Hook-Form](https://react-hook-form.com/)
- [React Query](https://react-query-v2.tanstack.com/)
- [Yup](https://github.com/jquense/yup)

## Rodando o app

Antes de começar, você vai precisar:
- criar uma conta no [imgBB](https://imgbb.com/), serviço de upload para imagens.
- criar uma conta no [faunaDB](https://fauna.com/), serviço de banco de dados baseado em documentos

Em seguida vai precisar criar as chaves para acessar as APIs. Com as chaves geradas, crie um arquivo **.env.local** na raiz do projeto com as variáveis conforme segue exemplo no arquivo **.env.example**

Você precisa ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e .

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

Para rodar o frontend da aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/enkinduweles/image-upload-nextjs.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd image-upload-nextjs

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
# A aplicação inciará na porta:8080 - acesse <http://localhost:3000>
$ yarn start
```

Para rodar os testes

```bash
$ yarn test
```

## Rotas

### Imagens

```
GET /api/images

POST /api/images
```

## Autor

Feito com ❤️ por **Enkindú Weles** 👋 [Entre em contato](https://www.linkedin.com/in/enkindu-weles/)

**#NeverStopLearning**
