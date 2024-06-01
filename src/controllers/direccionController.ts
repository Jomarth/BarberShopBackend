import { Request, Response } from 'express';
import Direccion from "../models/direccionSchema";

const getDirecciones = async (req: Request,res: Response) => {

    try {
        const id = req.params.id;
        const direccion = await Direccion.findById(id);
        console.log(direccion);
        res.json(direccion);

    } catch (error) {
        res.json({ message: "Error al traer la dirección" });
    }
}

const createDireccion = async (req: Request, res: Response) => {
    try{
        const body = req.body;
        const existingDireccion = await Direccion.findOne({ body });

        if (existingDireccion) {
            return res.status(200).json(existingDireccion);
        }
        const newDireccion = new Direccion(req.body);
        await newDireccion.save();

        res.status(201).json(newDireccion.toObject());

    } catch (error){
        console.error(error);
        res.status(500)
            .json({error: "Error al crear la direccion"});
    }
}

const updateDireccion = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await Direccion.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Wuuu se actualizo" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la dirección" });
    }
}

const deleteDireccion = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await Direccion.findByIdAndDelete(id);
        res.status(200).json({ message: "Se eliminó correctamente la dirección" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la dirección" });
    }
}

export default {
    getDirecciones,
    createDireccion,
    updateDireccion,
    deleteDireccion
}