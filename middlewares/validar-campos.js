const {response} = require('express')
const {validationResult} = require('express-validator')

const validarCampos = (req, res = response, next) => {

    //manejo de errores
    const errors = validationResult(req)

    if( !errors.isEmpty() ){
        console.log(errors.mapped())
        return res.status(400).json({
            ok: false,
            msg: 'contraseña o mail incorrectos, revise bien por favor. Recuerde que la contraseña debe ser de por lo menos 6 caracteres'
        })
    }

    next();


}

module.exports = {
    validarCampos
}