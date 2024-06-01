import { Request, Response } from 'express';
import Venta from "../models/ventaSchema";



const getVenta = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const venta = await Venta.findById(id);
        console.log(venta);
        res.status(200).json(venta);
    }catch(err) {
        res.status(500).json({ message: "Error al traer el venta" });
    }
}

const createVenta = async (req: Request, res: Response) => {
    try{
        const body = req.body;
        const existingVenta = await Venta.findOne({ body });

        if (existingVenta) {
            return res.status(200).json(existingVenta);
        }
        const newVenta = new Venta(req.body);
        await newVenta.save();

        res.status(201).json(newVenta.toObject());

    } catch (error){
        console.error(error);
        res.status(500)
            .json({error: "Error al crear el venta"});
    }
}

const updateVenta = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await Venta.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Se actualizó el venta" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el venta" });
    }
}

const deleteVenta = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await Venta.findByIdAndDelete(id);
        res.status(200).json({ message: "Se eliminó correctamente el venta" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el venta" });
    }
}

export default {
    getVenta,
    createVenta,
    updateVenta,
    deleteVenta
}