/******************************************************************************************
 * Objetivo: Realizar a interação do aluno com o Banco de Dados 
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Data: 14/04/2023
 * Versão: 1.0
 ******************************************************************************************/

const { Prisma } = require('@prisma/client');

 //Inserir um novo registro no Banco de Dados
 const insertAluno = function(dadosAluno){

 }

 //Atualizar um registro existente no Banco de Dados
 const updateAluno = function(dadosAluno){

}

//Ecluir um registro do Banco de Dados
const deleteAluno = function(id){

}

//Retorna todos os registro do Banco de Dados
const selectAllAluno = async function(){

    // Import da biblioteca do prisma client (responsável por manipular dados no BD)
    let { PrismaClient } = require('@prisma/client');

    // Instancia da classe do PrismaClient
    let prisma = new PrismaClient();

    // Variavel com o scriptSQL para executar no BD
    let sql = 'select * from tbl_aluno';

    // Executa no BD o scriptSQL
        // $queryRawUnsafe() é utilizado quando o scriptSQL esta em uma variavel
        // $queryRaw() é utilizado quando passar o script direto no metodo (Ex: $queryRaw(select * from tbl_aluno))
    let rsAluno = await prisma.$queryRawUnsafe(sql);


    // Valida se o BD retornou algum registro
    if(rsAluno.length > 0){
        return rsAluno;
    }else{
        return false;
    }
        

}

//Retorna um registro filtrado pelo ID do Banco de Dados
const selectByIdAluno = function(id){

}

module.exports = {
    selectAllAluno
}