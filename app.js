//importar a database.js
//console.log(livros)
//pegar um input do usuario se ela quer escolher um livro por categoria
//Se for SIM, mostra as categorias disponiveis, pergunta qual categoria ela escolhe
//Se for NÃO, mostra todos os livros em ordem crescente pela qtde de pgs


const livros = require('./database')
const readline = require('readline-sync') //consigo acessar tudo que a biblioteca dispobiliza com o objeto criado

const entradaInicial = readline.question('Deseja buscar um livro?S/N') //propriedade .question permite fazer perguntas pro usuario


if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis:')
    console.log('Literatura', '/Artigo', '/DC Comics', '/Quadrinhos', '/Marvel','/Produtivade' )


    const entradaCategoria = readline.question('Qual categoria vc escolhe:')

    const retorno = livros.filter(livros => livros.categoria  === entradaCategoria)

    console.table(retorno)

}else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponiveis:')
    console.table(livrosOrdenados)
}


