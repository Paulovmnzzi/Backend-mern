const { Router } = require("express");
const { check } = require("express-validator");
const { getEvent, createEvent, updateEvent, deleteEvent } = require("../controllers/eventsController");
const { validateJWT } = require("../middlewares/validate-jwt");
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require("../helpers/isDate");


//Aca crearemos el CRUD

const router = Router();

//Todas deben pasar por la validacion del JWT
router.use(validateJWT);
//como todas tienen que usar este middleware lo podemos declarar así también 


//Obtener eventos
router.get('/', getEvent);

// //Crear nuevo evento
router.post(
    '/new',
    [
        check('title', 'el titulo es obligatorrrio').not().isEmpty(),
        check('start', 'la fecha de inicio debe ser obligatoria').custom(isDate),
        check('end', 'la fecha de finalizacion debe ser obligatoria').custom(isDate),
        validarCampos
    ],
    createEvent)

// //Actualizar evento
router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    updateEvent)

// //Borrar event
router.delete('/:id', deleteEvent)


module.exports = router;