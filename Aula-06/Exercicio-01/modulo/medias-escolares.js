/******************************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Data: 13/02/2023
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Versão: 1.0
 ******************************************************************************************/

const mediaescolar = function(nota1, nota2, nota3, nota4) {

    let primeiraNota = Number(nota1);
    let segundaNota = Number(nota2);
    let terceiraNota = Number(nota3);
    let quartaNota = Number(nota4);

    let resultado;
    let media = 0;

    if (primeiraNota === '' || segundaNota === '' || terceiraNota === '' || quartaNota === '') {
        console.log('Error: É necessário digitar algum valor nas entrada. ');
        //Validação para entrada de dados não numerícos    
    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
        console.log('ERRO: é necessário que todos os dados digitados sejam números.');
        //Validação de entrada de valores entre 0 e 10    
    } else if (primeiraNota < 0 || primeiraNota > 100 ||
        segundaNota < 0 || segundaNota > 100 ||
        terceiraNota < 0 || terceiraNota > 100 ||
        quartaNota < 0 || quartaNota > 100) {
        console.log('ERRO: O sistema aceita somente números entre 0 até 100.');
    } else {
        media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4;

        if (media >= 70) {
            console.log('status do Aluno: Aprovado!');
        } else {
            console.log('status do Aluno: Reprovado!');
        }

        console.log('Média final: ' + media.toFixed(1));
    }
};

module.exports = {
    mediaescolar
}