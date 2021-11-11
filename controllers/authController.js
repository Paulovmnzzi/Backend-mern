const { response } = require('express');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/UserModel');
const { generarJWT } = require('../helpers/jwt');


const createUser = async (req, res = response) => {

    const {name, email, password} = req.body
    try {
        
        let user = await User.findOne({ email });

        if(user){
            res.status(400).json({
                ok: false,
                msg: 'El usuario sha existe'
            })
        }


        user = new User(req.body)
    
        //Encryptar pass
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt );

        await user.save(); //grabación base de datos

        //Generar JWT
        const token = await generarJWT( user.id, user.name );
    
        res.status(201).json({
            ok: true,
            msg: 'registro',
            pass: user.password,
            token
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'por favor hable con el administrador'
        })
    }

};

const loginUser = async(req, res = response) => {

    const { email, password } = req.body;

    try {
        
        let user = await User.findOne(email);

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
            })
        }

        //confirmar passwords
        const validPassword = bcrypt.compareSync(password, user.password);

        if( !validPassword) {
            return res.status(400).json({
                ok:false,
                msg: 'Password incorrecto'
            })
        }

        //generar JWT
        const token = await generarJWT( user.id, user.name );

        return res.status(200).json({
            ok: true,
            msg: `El usuario ${user.name} se ha logueado correctamente`,
            token,
            uid: user.id,
            name: user.name
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'error fatal, aborte !! aborte !! '
        })
    }

    // res.status(200).json({
    //     ok: true,
    //     msg: 'login',
    //     email,
    //     pass,
        
    // })
}

const renewToken = async(req, res) => {

    const uid = req.uid;
    const name = req.name;

    const token = await generarJWT(uid, name);

    res.json({
        ok: true,
        token,
        uid,
        name
    })
}

module.exports = {
    createUser,
    loginUser,
    renewToken
}