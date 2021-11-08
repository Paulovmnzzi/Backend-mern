const { response, request } = require('express')
const jwt = require('jsonwebtoken');

const validateJWT = ( req = request, res = response, next ) => {

    //x-token headers
    //acá mandan token por header
    const token = req.header('x-token');

    if ( !token ){
        return res.status(401).json({
            ok: false,
            msg: 'No existe el token para este usuario'
        });
    }

    try {
        //esto devuelvo un payload del token, mandando el token y la clave secreta.
        const {uid, name} = jwt.verify(token, process.env.SECRET_JWT_SEED);

        //aca defino en el request, el uid, y el name. No existen, yo los estoy definiendo.
        req.uid = uid;
        req.name = name;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'token no válido'
        })
    }

    next();

}

module.exports = {
    validateJWT
}
