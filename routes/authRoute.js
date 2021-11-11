/*
Rutas de usuarios / Auth
host + /api/auth


db user: mern_user
db pass: LC0oQwZ9uE72LxsB
*/

const { Router } = require('express');
const { check } = require('express-validator')
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/authController');
const { validarCampos } = require('../middlewares/validar-campos');
const { validateJWT } = require('../middlewares/validate-jwt');


router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El nombre es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    createUser );

router.post(
    '/',
    [
        check('email', 'El formato del email debe ser correcto y debe estar en minúsculas aweonao').isEmail().isLength({min: 6}),
        check('password', 'La contrasñea debe poseer 6 caracteres al menos').isLength({min:6}),
        validarCampos
    ],
    loginUser)

router.get('/renew', validateJWT, renewToken)




module.exports = router;