// const authLogin = require('../middlewares/authLogin')

module.exports = (app) => {
    const tweetsController = app.controllers.TweetsController

    app.get('/tweets', tweetsController.listar)
    app.get('/tweets/:id', tweetsController.listarUm)
    app.post('/tweets/', tweetsController.adicionar)
    app.del('/tweets/:id', tweetsController.deletar) // implementar o deletar
    app.post('/tweets/:id/like', tweetsController.like) // ver o que retornar
}