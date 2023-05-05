/******************************************************************************************
 * Objetivo: Arquivo responsável pelas váriaveis, constantes e funções globais do projeto
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Data: 28/04/2023
 * Versão: 1.0
 ******************************************************************************************/

/*************************************Constantes de ERROS**********************************/
const ERRO_REQUIRED_DATA = {stauts: 400, message: 'Existem dados obrigatórios que não foram preenchidos.'};

const ERRO_REQUIRED_ID = {stauts: 400, message: 'O atributo ID é obrigatório na requisição.'};

const ERROR_INTERNAL_SERVER = {stauts: 500, message: 'Erro interno no servidor de Bando de Dados.'};



/*************************************Constantes de SUCESSO**********************************/
const CREATED_ITEM = {status: 201, message: 'Registro criado com sucesso.'};

const UPDATED_ITEM = {status: 200, message: 'Registro Atualizado com sucesso.'};

const DELETED_ITEM = {status: 200, message: 'Registro Deletado com sucesso.'};

module.exports = {
    ERRO_REQUIRED_DATA,
    ERROR_INTERNAL_SERVER,
    ERRO_REQUIRED_ID,
    CREATED_ITEM,
    UPDATED_ITEM,
    DELETED_ITEM 
}