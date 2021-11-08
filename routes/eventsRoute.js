const { Router } = require("express");
const { getEvent, createEvent, updateEvent, deleteEvent } = require("../controllers/eventsController");
const { validateJWT } = require("../middlewares/validate-jwt");


//Aca crearemos el CRUD

const router = Router();

//Todas deben pasar por la validacion del JWT
router.use( validateJWT );
//como todas tienen que usar este middleware lo podemos declarar así también 


//Obtener eventos
router.get('/', getEvent);

// //Crear nuevo evento
router.post('/new', createEvent)

// //Actualizar evento
router.post('/:id', updateEvent)

// //Borrar event
router.delete('/:id', deleteEvent)


module.exports = router;