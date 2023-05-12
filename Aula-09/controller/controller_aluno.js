/******************************************************************************************
 * Objetivo: Implementa a regra de negócio entre o app e a model
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Data: 24/04/2023
 * Versão: 1.0
 ******************************************************************************************/

// Import do arquivo de acesso ao BD
var alunoDAO = require('../model/DAO/alunoDAO.js');

// Import do arquivo global de configurações do projeto
var message = require('./modulo/config.js')

// Função para receber os dados do app e enviar para a Model para inserir um novo item
const inserirAluno = async function(dadosAluno){
     

    if(dadosAluno.nome == ''            || dadosAluno.nome == undefined            || dadosAluno.nome.length > 100            ||
       dadosAluno.cpf == ''             || dadosAluno.cpf == undefined             || dadosAluno.cpf.length > 18              ||
       dadosAluno.rg == ''              || dadosAluno.rg == undefined              || dadosAluno.rg.length > 15               ||
       dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10  ||
       dadosAluno.email == ''           || dadosAluno.email == undefined           || dadosAluno.email.length > 255
       
      ){
        return message.ERRO_REQUIRED_DATA;
       }else{
            // Envia os dados para model a serem inseridos no BD
           let status = await alunoDAO.insertAluno(dadosAluno);

           if(status){
               return  message.CREATED_ITEM;
           }else{
               return message.ERROR_INTERNAL_SERVER;
           }
       }

};

// Função para receber os dados do app e enviar para a Model para atualizar um item existente
const atualizarAluno = async function(dadosAluno, idAluno){
    
    // Validação de dados
 if(dadosAluno.nome == ''            || dadosAluno.nome == undefined            || dadosAluno.nome.length > 100            ||
    dadosAluno.cpf == ''             || dadosAluno.cpf == undefined             || dadosAluno.cpf.length > 18              ||
    dadosAluno.rg == ''              || dadosAluno.rg == undefined              || dadosAluno.rg.length > 15               ||
    dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10  ||
    dadosAluno.email == ''           || dadosAluno.email == undefined           || dadosAluno.email.length > 255
    
   ){
     return message.ERRO_REQUIRED_DATA;
    //  Validação para o ID
    }else if(idAluno == '' || idAluno == undefined || idAluno == isNaN(idAluno)){
        return message.ERRO_REQUIRED_ID;
    }else{
        // Adiciona o ID no JSON com todos os dados
        dadosAluno.id = idAluno;
        // Encaminha para o DAO os dados para serem alterados
        let status = await alunoDAO.updateAluno(dadosAluno);

        if(status){
            return message.UPDATED_ITEM;
        }else{
            return message.ERROR_INTERNAL_SERVER;
        }
    }
};

// Função para excluir um aluno filtrado pelo ID, será encaminhado para a model
const deletarAluno = async function(idAluno){
     // Validação de dados
 if(idAluno == '' || idAluno == undefined || idAluno == isNaN(idAluno)){
     return message.ERRO_REQUIRED_ID;
 }else{
     
     // Encaminha para o DAO os dados para serem alterados
     let status = await alunoDAO.deleteAluno(idAluno);

     if(status){
         return message.DELETED_ITEM;
     }else{
         return message.ERROR_INTERNAL_SERVER;
     }
 }
};

// Função para retornar todos os itens da tabela recebidos da model
const selecionarTodosAlunos = async function(){

    // Solicita ao DAO todos os alunos do BD
    let dadosAluno = await alunoDAO.selectAllAluno();

    // Cria um objeto do tipo JSON
    let dadosJSON = {};

    // Valida se o BD teve registros
    if(dadosAluno){

        // Adiciona o array de alunos e um JSON para retornar ao app
        dadosJSON.status = 200;
        dadosJSON.count = dadosAluno.length;
        dadosJSON.alunos = dadosAluno;
        return dadosJSON;
    }else {
        return message.ERROR_NOT_FOUND;
    }
};

// Função para buscar um item filtrando pelo ID, que será encaminhado para a model
const buscarIdAluno = async function(id){

    if(id == '' || id == undefined || isNaN(id)){
        return message.ERRO_REQUIRED_ID
    }else{
        // Solicita ao DAO todos os alunos do BD
        let dadosAluno = await alunoDAO.selectByIdAluno(id);

        // Cria um objeto do tipo JSON
        let dadosJSON = {};

        // Valida se o BD teve registros
        if(dadosAluno){

        // Adiciona o array de alunos e um JSON para retornar ao app
        dadosJSON.status = 200;
        dadosJSON.alunos = dadosAluno;
            return dadosJSON;
        }else {
            return message.ERROR_NOT_FOUND;
        }    
    }

    
};

module.exports = {
    selecionarTodosAlunos,
    inserirAluno,
    atualizarAluno,
    deletarAluno,
    buscarIdAluno
}