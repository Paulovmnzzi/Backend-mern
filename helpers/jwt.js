const jwt = require('jsonwebtoken');


//debe recibir lo que necesito como payload de mi token
const generarJWT = ( uid, name ) => {

    return new Promise( (resolve, reject) => {

        const payload = { uid, name };

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Cant generate token');
            }
            resolve ( token );
        } )


    })
}

module.exports = {
    generarJWT
}