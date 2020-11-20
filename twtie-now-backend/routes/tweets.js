// const authLogin = require('../middlewares/authLogin')

module.exports = (app) => {
    const tweetsController = app.controllers.TweetsController
    const middleware = app.middlewares.authLogin.middleware

    app.get('/tweets', middleware, tweetsController.listar)
    app.get('/tweets/:id', middleware, tweetsController.listarUm)
    app.post('/tweets/', middleware, tweetsController.adicionar)
    app.del('/tweets/:id', middleware, tweetsController.deletar) // implementar o deletar
    app.post('/tweets/:id/like', middleware, tweetsController.like) // ver o que retornar
}