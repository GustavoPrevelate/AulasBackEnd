/******************************************************************************************
 * Objetivo: API para interagir com o Banco de Dados (GET, POST, DELETE, PUT)
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Data: 14/04/2023
 * Versão: 1.0
 ******************************************************************************************/

 /**
 * Express --> dependencia do Node, que permite a integração entre o protocolo http com o código
 * Comando para instalação do Express --> npm install express --save
 * 
 * Cors --> Gerenciador de permissões para o protocolo HTTP
 * Comando para instalação do Cors --> npm install cors --save
 * 
 * Body-Parser --> É uma dependencia que permite manipular dados enviados pelo body da requisição
 * Comando para instalação do Body-Parser --> npm install body-parser --save
 * 
 ***/

 //import das bibliotecas do projeto
 const express = require('express');

 const cors = require('cors');

 const bodyParser = require('body-parser');

 //Cria o objeto app utilizando a classe do express
 const app = express();

 app.use((request, response, next) => {

    //Permissões de origem da requisição
    response.header('Acess-Control-Allow-Origin', '*');

    //Permissões de metodos que serão utilizados na API
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Define as permissões para o cors
    app.use(cors());

    //Continua para a leitura dos EndPoints
    next();
 });

 //CRUD (Create, Read, Update e Delete)

 /******************************************************************************************
 * EndPoint: Tabela de aluno
 * Versão: 1.0
 * Data: 14/04/2023
 ******************************************************************************************/

 //EndPoint: Retorna todos os dados de alunos
 app.get('/v1/lion-school/aluno', cors(), async function(request, response){

 })

 //EndPoint: Retorna dados do aluno pelo id
 app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){

})

 //EndPoint: Inserir um novo aluno
 app.post('/v1/lion-school/aluno/:id', cors(), async function(request, response){

})

//EndPoint: Atualiza um aluno pelo id
app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response){

})

//EndPoint: Exclui um aluno pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){

})