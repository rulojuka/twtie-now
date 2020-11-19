module.exports = (app) => {
    const usuariosController = app.controllers.UsuariosController

    app.get('/usuarios', usuariosController.listar)
    app.get('/usuarios/:login', usuariosController.listarUm)
    app.get('/usuarios/:login/tweets', usuariosController.listarTweetsDeUmUsuario)
    
}