const {response} = require('express')
const {validationResult} = require('express-validator')

const validarCampos = (req, res = response, next) => {

    //manejo de errores
    const errors = validationResult(req)

    if( !errors.isEmpty() ){
        console.log(errors.mapped())
        return res.status(400).json({
            ok: false,
            errors: 'contraseña o mail incorrectos, revise bien por favor.'
        })
    }

    next();


}

module.exports = {
    validarCampos
}