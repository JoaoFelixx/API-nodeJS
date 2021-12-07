# API-with-nodeJS || API COM node.js

Muito bem vindos a mais um "novo" projeto ! Oque é esse projeto ? Essa é uma `API RESTFUL` cujo a intenção é criar artigos, independente do tema ! Essa `api `é com integração ao MongoDB usando a plataforma `MongoDB atlas` que é uma ferramenta muito legal e interresante ! eu gostei bastante !

## Como usar o `MongoDB atlas` ? 

Primeiramente você tem que criar uma conta no site: 

[Site MongoDB Registrar](https://account.mongodb.com/account/register)

Logo após ir para 

[Site MongoDB Logar](https://account.mongodb.com/account/login)

Depois você cria uma `cluster` compartilhada para não ter despesas. 

[Video no YouTube que ensina como fazer](https://www.youtube.com/watch?v=6hYXX4A1cyY)

## Instalação: 

Você primeiramente baixa os arquivos usando 
``` 
git clone https://github.com/JoaoFelixx/API-nodeJS.git
```

Logo após, use o comando: 
``` 
npm install
```

Atenção, por questões de segurança, eu não fiz upload da pasta ***connections***, mas no video do YouTube ensina exatamente como fazer 

mas caso não queira ver o código ficaria: 
``` JS
const mongoose = require('mongoose');
const URL_FOR_MONGO = "<link recebido>";
const options = {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true
}

async function startMongoConnection() {
try {
await mongoose.connect(URL_FOR_MONGO, options);

console.log('Successful connection');
} catch (error) {
console.error('Error connection');
}
}
```

depois de tudo é só usar o comando: 

``` 
npm start // para node
npm dev // para nodemon
```

## ***and happy hacking !!!*** 

## Consumindo API **Sistema de rota**

## /articles

| HTTP | ROUTE | BODY | DESCRIÇÃO |
| --- | ------ | ------ | ------ |
| GET | /articles/?id | | Rota para consulta de Artigos.
| POST | /articles | JSON (title: string, content: string) | Rota de criação de artigos.
| PUT | /articles/id | JSON (title: string, power: string) | Esta rota é a de edição de artigos.
| DELETE | /articles/id | | Rota de exclusão de artigos.

## ***Glossário***

> `APi`: ***Serviço Back-end que faz parte lógica com banco de dados, serviços ou afins que gera um JSON para o Front-end***

>`RESTFUL`: ***Termo usado na criação de APIS com protocolo REST, Os mais importantes são: `status` e `methods`***.

> `MongoDB Atlas`: ***Uma plataforma para de banco de dados não relacional (Mongo) nela você pode criar `collections` para fazer projetos sem gastar nada por isso, e ainda não precisa instalar nada na sua máquina***
