/******************************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Data: 13/02/2023
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Versão: 1.0
 ******************************************************************************************/

var funMediasEscolares = require('./modulo/medias-escolares');

//Import da biblioteca para entrada de dados
var readline = require('readline');
const { mediaescolar } = require('./modulo/medias-escolares');

//Cria um objeto para receber os dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



entradaDados.question('Qual é o genero do Estudante? [Feminino, Masculino] \n', function(generoEstudante) {
    let generodoestudante = generoEstudante.toUpperCase();

    if (generodoestudante == 'FEMININO') {
        entradaDados.question('Qual é o nome da Aluna? \n', function(nomeAluno) {
            let nomedoaluno = nomeAluno;

            entradaDados.question('Qual é o genero do Professor? [Feminino, Masculino] \n', function(generoProfessor) {
                let generoprofessor = generoProfessor.toUpperCase();


                if (generoprofessor == 'FEMININO') {
                    entradaDados.question('Qual é o nome da Professora? \n', function(nomeProfessor) {

                        entradaDados.question('Qual é o nome do curso? \n', function(nomeCurso) {
                            let nomedocurso = nomeCurso.toUpperCase();

                            entradaDados.question('Qual é o nome da disciplina? \n', function(nomeDisciplina) {
                                let nomedadisciplina = nomeDisciplina.toUpperCase();

                                entradaDados.question('Qual a primeira nota? \n', function(nota1) {

                                    entradaDados.question('Qual a segunda nota? \n', function(nota2) {

                                        entradaDados.question('Qual a terceira nota? \n', function(nota3) {

                                            entradaDados.question('Qual a quarta nota? \n', function(nota4) {
                                                let resultado = funMediasEscolares.mediaescolar(nota1, nota2, nota3, nota4);
                                                entradaDados.close();
                                            });
                                        });
                                    });
                                });
                            });

                        });

                    });
                } else if (generoprofessor == 'MASCULINO')
                    entradaDados.question('Qual é o nome da Professor? \n', function(nomeProfessor) {

                        entradaDados.question('Qual é o nome do curso? \n', function(nomeCurso) {
                            let nomedocurso = nomeCurso.toUpperCase();

                            entradaDados.question('Qual é o nome da disciplina? \n', function(nomeDisciplina) {
                                let nomedadisciplina = nomeDisciplina.toUpperCase();

                                entradaDados.question('Qual a primeira nota? \n', function(nota1) {

                                    entradaDados.question('Qual a segunda nota? \n', function(nota2) {

                                        entradaDados.question('Qual a terceira nota? \n', function(nota3) {

                                            entradaDados.question('Qual a quarta nota? \n', function(nota4) {
                                                let resultado = funMediasEscolares.mediaescolar(nota1, nota2, nota3, nota4);
                                                entradaDados.close();
                                            });
                                        });
                                    });
                                });
                            });

                        });


                    });

            });

        });
    } else if (generodoestudante == 'MASCULINO')
        entradaDados.question('Qual é o nome do Aluno? \n', function(nomeAluno) {
            let nomedoaluno = nomeAluno;

            entradaDados.question('Qual é o genero do Professor? [Feminino, Masculino] \n', function(generoProfessor) {
                let generoprofessor = generoProfessor.toUpperCase();


                if (generoprofessor == 'FEMININO') {
                    entradaDados.question('Qual é o nome da Professora? \n', function(nomeProfessor) {

                        entradaDados.question('Qual é o nome do curso? \n', function(nomeCurso) {
                            let nomedocurso = nomeCurso.toUpperCase();

                            entradaDados.question('Qual é o nome da disciplina? \n', function(nomeDisciplina) {
                                let nomedadisciplina = nomeDisciplina.toUpperCase();

                                entradaDados.question('Qual a primeira nota? \n', function(nota1) {

                                    entradaDados.question('Qual a segunda nota? \n', function(nota2) {

                                        entradaDados.question('Qual a terceira nota? \n', function(nota3) {

                                            entradaDados.question('Qual a quarta nota? \n', function(nota4) {
                                                let resultado = funMediasEscolares.mediaescolar(nota1, nota2, nota3, nota4);
                                                entradaDados.close();
                                            });
                                        });
                                    });
                                });
                            });

                        });

                    });
                } else if (generoprofessor == 'MASCULINO')
                    entradaDados.question('Qual é o nome da Professor? \n', function(nomeProfessor) {

                        entradaDados.question('Qual é o nome do curso? \n', function(nomeCurso) {
                            let nomedocurso = nomeCurso.toUpperCase();

                            entradaDados.question('Qual é o nome da disciplina? \n', function(nomeDisciplina) {
                                let nomedadisciplina = nomeDisciplina.toUpperCase();

                                entradaDados.question('Qual a primeira nota? \n', function(nota1) {

                                    entradaDados.question('Qual a segunda nota? \n', function(nota2) {

                                        entradaDados.question('Qual a terceira nota? \n', function(nota3) {

                                            entradaDados.question('Qual a quarta nota? \n', function(nota4) {
                                                let resultado = funMediasEscolares.mediaescolar(nota1, nota2, nota3, nota4);
                                            });
                                            entradaDados.close();
                                        });
                                    });
                                });
                            });

                        });


                    });

            });
        });
});