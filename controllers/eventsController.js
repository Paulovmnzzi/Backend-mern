const {response} = require('express')
const Events = require('../models/EventModel')


const getEvent = (req, res = response) => {

    res.status(200).json({
        ok:true,
        msg: 'evento obtenido'
    })
}

const createEvent = async(req, res = response) => {

    const evento = new Events(req.body)

    try {
       
        evento.user = req.uid;

        const eventoGuardado = await evento.save()

        res.json({
            ok:true,
            evento: eventoGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'error de errores'
        })
    }


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