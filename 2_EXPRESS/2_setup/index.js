const express = require('express')

const app = express()

app.get('/',(requsicao, resposta) => {
    resposta.send('caguei um giganotossauro de bosta que rasgou meu bozo eu me chamo eduardo pinto')
}) 
 
 app.listen(3000, () => {
    console.log('App rodando na porta 3000')
 })