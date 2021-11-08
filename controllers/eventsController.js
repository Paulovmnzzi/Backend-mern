const {response} = require('express')

const getEvent = (req, res = response) => {

    res.status(200).json({
        ok:true,
        msg: 'evento obtenido'
    })
}

const createEvent = (req, res = response) => {

    console.log(req.body)

    res.status(200).json({
        ok:true,
        msg: 'evento creado'
    })
}

const updateEvent = (req, res = response) => {

    res.status(200).json({
        ok:true,
        msg: 'evento actualizado'
    })
}

const deleteEvent = (req, res = response) => {

    const {id} = req.params;

    res.status(200).json({
        ok:true,
        msg: 'evento eliminado',
        id
        
    })
}

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}