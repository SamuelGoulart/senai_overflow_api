# Senai Overflow Api

## 🚀 Clone do projeto.

```bash
git clone https://github.com/SamuelGoulart/senai_overflow_api
```



Istalação da pasta node_modules

```bash
npm install
```
Criação do banco de dados
```bash
npx sequelize db:create
```
Criação das tabelas, com as migrations
```bash
npx sequelize db:migrate
```
Populando o banco de dados, com as seeders

<details>

<summary>O que são seeders</summary>

 <br>
 Os arquivos seeds servem para criar valores iniciais no banco de dados depois que ele é criado. 
Normalmente usamos seeds para popular o banco com dados que são importantes para a 
aplicação funcionar em qualquer ambiente, ou para finalidade de teste.
</details>

```bash
npx sequelize db:seed:all
```

## Informações úteis sobre o projeto.

<details>

<summary>Todos as dependências instalados no projeto </summary>
 
 #### Observação: 
 Fazendo o clone do projeto não precisa rodar esses comandos abaixo, somente da seção do clone do projeto
 #### Observação:
 Todas as dependências instalado no projeto, pode ser encontrado no arquivo package.json
 
 ### Lista das dependências instalado no projeto
 
Instalação do express 
 
 ```bash
npm install express nodemon
```
 
 
 Express.js é um mini framework para Node.js que fornece recursos para o desenvolvimento de aplicações back-end.

  O Express oferece soluções para: Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.




