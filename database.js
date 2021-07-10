//receber o json(araray de livros no caso)

const livros = [
    {
        id: 1,
        nome:"Digital Minimalista",
        autor:"Cal Newport",
        categoria:"Produtivade",
        paginas:254,
        recomenda:false,
        leu: false
    },

    {
        id: 2,
        nome:"Doutor Estranho",
        autor:"Grayson Devin",
        categoria:"Marvel",
        paginas:279,
        recomenda:false,
        leu: false
    },
    {
        id: 3,
        nome:"Guerra Civil",
        autor:"Stuart Moore",
        categoria:"Quadrinhos",
        paginas:400,
        recomenda:false,
        leu: false
    },
    {
        id: 4,
        nome:"Superman ",
        autor:"Bob Kahan",
        categoria:"DC Comics",
        paginas:240,
        recomenda:false,
        leu: false
    },
    {
        id: 5,
        nome:"Canário Negro",
        autor:"DC Comics",
        categoria:"Artigo",
        paginas:150,
        recomenda:true,
        leu: true
    },
    {
        id: 6,
        nome:"A Garota do Lago",
        autor:"Charlie Donlea",
        categoria:"Literatura",
        paginas:350,
        recomenda:true,
        leu: true
    },
    
]

//exportar as sintase para usar em outro arquivo
module.exports = livros