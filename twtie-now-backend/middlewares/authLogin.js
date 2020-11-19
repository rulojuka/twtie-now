const jwt = require('jsonwebtoken')
const moment = require('moment')
const errors = require('restify-errors')

function geraToken(login, senha, olderToken) {
    const loginToken = {
        login,
        senha
    }
    const token = jwt.sign(
        loginToken,
        process.env.JWTSECRET,
        { expiresIn: moment().add(14, 'days').valueOf() }
    );
    return token
}

function decodificaToken(token) {
    var tokenDecodificado = jwt.verify(token, process.env.JWTSECRET);
    return tokenDecodificado // Retorna um objeto do tipo loginToken, como na função acima
}

module.exports = function(app) {
    return {
        geraToken,
        decodificaToken,
        middleware: function authLoginMiddleware(req,res, next) {
            return next()
        }
    }
}