const fs = require ('fs') // fs- ile system


fs.readFile('texto.txt', 'utf-8', (erro, dados) => {
    if (erro) {
        console.log(erro)
        return
    }

    console.log(dados)
} )