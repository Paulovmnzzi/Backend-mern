const { response } = require('express');
const { update } = require('../models/EventModel');
const Events = require('../models/EventModel')


const getEvent = async (req, res = response) => {

    const eventos = await Events.find()
        .populate('user', 'name');//acá le digo que quiero toda la información del user y acto seguido que solo el name


    res.status(200).json({
        ok: true,
        eventos
    })
}

const createEvent = async (req, res = response) => {

    const evento = new Events(req.body)

    try {

        evento.user = req.uid;

        const eventoGuardado = await evento.save()

        res.json({
            ok: true,
            evento: eventoGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'error de errores',
            msg2: error
        })
    }

}

const updateEvent = async(req, res = response) => {

    const eventoId = req.params.id;
    const uid = req.uid; //recordar que esto viene del token nuestro, lo agregamos al req

    try {

        const evento = await Events.findById( eventoId );

        if(!evento) {
            res.status(404).json({
                ok: false,
                msg: 'evento no existe por ese id'
            })
        }

        if(evento.user.toString() !== uid){
            res.status(401).json({
                ok: false, 
                msg: 'No tiene privilegio de editar este evento'
            })
        }

        const updateEvent = {
            ...req.body,
            user: uid
        }

        const newEvent = await Events.findByIdAndUpdate(evento.id, updateEvent, {new: true});

        res.status(201).json({
            ok: true,
            newEvent
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'hable con el admin o fijecé'
        })
    }


}

const deleteEvent = async(req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const evento = await Events.findById(id);

        if(!evento) {
           return res.status(400).json({
               ok: false,
               msg: 'No se ha encontrado el evento'
           })
        }

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg: 'EL usuario no está autorizado a eliminar este evento',
            })
        }

        const deleteEvent = await Events.findByIdAndDelete(id);
        return res.status(200).json({
            ok: true,
            msg: 'Evento eliminado exitosamente',
            deleteEvent
        })



    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}