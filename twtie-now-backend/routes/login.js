const errors = require('restify-errors');

module.exports = (app) => {
    app.post('/rota', (req, res, next) => {
            // res.status(200)
            // res.json({})
            // ou 
            // return next(new errors.NotImplementedError())
        }
    )

}