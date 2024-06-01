import { Request, Response } from 'express';
import Tarjeta from "../models/tarjetaSchema";

const getTarjetas = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const tarjetas = await Tarjeta.findById(id);
        console.log(tarjetas);
        res.status(200).json(tarjetas);
    }catch(err) {
        res.status(500).json({ message: "Error al traer las tarjetas" });
    }
}

const createTarjeta = async (req: Request, res: Response) => {
    try{
        const body = req.body;
        const existingTarjeta = await Tarjeta.findOne({ body });

        if (existingTarjeta) {
            return res.status(200).json(existingTarjeta);
        }
        const newTarjeta = new Tarjeta(req.body);
        await newTarjeta.save();

        res.status(201).json(newTarjeta.toObject());

    } catch (error){
        console.error(error);
        res.status(500)
            .json({error: "Error al crear la tarjeta"});
    }
}

const updateTarjeta = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await Tarjeta.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Se actualizó la tarjeta" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la tarjeta" });
    }
}

const deleteTarjeta = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await Tarjeta.findByIdAndDelete(id);
        res.status(200).json({ message: "Se eliminó correctamente la tarjeta" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la tarjeta" });
    }
}

export default {
    getTarjetas,
    createTarjeta,
    updateTarjeta,
    deleteTarjeta
}