/******************************************************************************************
 * Objetivo: Implementa a regra de negócio entre o app e a model
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Data: 24/04/2023
 * Versão: 1.0
 ******************************************************************************************/

// Função para receber os dados do app e enviar para a Model para inserir um novo item
const inserirAluno = function(dadosAluno){
     
};

// Função para receber os dados do app e enviar para a Model para atualizar um item existente
const atualizarAluno = function(dadosAluno){
     
};

// Função para excluir um aluno filtrado pelo ID, será encaminhado para a model
const deletarAluno = function(id){
     
};

// Função para retornar todos os itens da tabela recebidos da model
const selecionarTodosAlunos = async function(){

    // Import do arquivo de acesso ao BD
    let alunoDAO = require('../model/DAO/alunoDAO.js');

    // Solicita ao DAO todos os alunos do BD
    let dadosAluno = await alunoDAO.selectAllAluno();

    // Cria um objeto do tipo JSON
    let dadosJSON = {};

    // Valida se o BD teve registros
    if(dadosAluno){

        // Adiciona o array de alunos e um JSON para retornar ao app
        dadosJSON.alunos = dadosAluno;
        return dadosJSON;
    }else {
        return false;
    }
};

// Função para buscar um item filtrando pelo ID, que será encaminhado para a model
const buscarIdAluno = function(id){
     
};

module.exports = {
    selecionarTodosAlunos
}