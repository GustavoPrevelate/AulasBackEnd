/******************************************************************************************
 * Objetivo: Arquivo responsável pelas váriaveis, constantes e funções globais do projeto
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Data: 28/04/2023
 * Versão: 1.0
 ******************************************************************************************/

/*************************************Constantes de ERROS**********************************/
const ERRO_REQUIRED_DATA = {stauts: 400, message: 'Existem dados obrigatórios que não foram preenchidos.'};

const ERROR_INTERNAL_SERVER = {stauts: 500, message: 'Erro interno no servidor de Bando de Dados.'};

/*************************************Constantes de SUCESSO**********************************/
const CREATED_ITEM = {status: 201, message: 'Registro criado com sucesso.'};

module.exports = {
    ERRO_REQUIRED_DATA,
    ERROR_INTERNAL_SERVER,
    CREATED_ITEM 
}