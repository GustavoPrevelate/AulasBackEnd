/**************************************************************************************************
 * Objetivo: Realizar uma calculadora
 * Data: 30/01/2023 
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Versão 1.0
 ***************************************************************************************************/


//import da biblioteca para a entrada de dados
var readline = require('readline');
const { parse } = require('path');

//Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout



});
entradaDados.question('Por favor escolha uma calculadora: 1 = Soma,\n 2 = Subtração,\n 3 = Multiplicação\n 4= Divisão', function(tipo) {
    var tipoDeCalculadora = parseFloat(tipo);
    let resultado = 0;

    if (isNaN(tipoDeCalculadora)) {
        console.log('Erro: Digit o numero de acordo com a operação!')
    } else if (tipoDeCalculadora == '') {
        console.log('Erro: Por favor digite um número válido')
    } else if (Number(tipoDeCalculadora) != 1 && Number(tipoDeCalculadora) != 2 && Number(tipoDeCalculadora) != 3 && Number(tipoDeCalculadora) != 4) {
        console.log('Erro: Selecione uma calculadora válida, sendo as opções: 1, 2, 3 ou 4')
    } else if (tipoDeCalculadora == '1') {
        console.log('------------------------------Calculadora de Adição------------------------------')
        entradaDados.question('Digite o Primeiro Valor: \n', function(primeiroValor) {

            let primeiroNumero = parseFloat(primeiroValor.replace(',', '.'))
            entradaDados.question('Digite o Segundo Valor: \n', function(segundoValor) {
                let segundoNumero = parseFloat(segundoValor.replace(',', '.'))
                if (isNaN(primeiroValor) || isNaN(segundoValor)) {
                    console.log('Erro: O caracter digitado não é um numero.')
                } else if (primeiroValor == '' || segundoValor == '') {
                    console.log('Erro: não é possivel fazer o calculo se estiver vazio.')

                } else {
                    resultado = (primeiroNumero) + (segundoNumero)
                    console.log('O valor da Soma é: ' + resultado)
                }


            })

        })
    }
})