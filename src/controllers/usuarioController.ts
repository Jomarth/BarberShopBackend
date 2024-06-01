import { Request, Response } from 'express';
import Usuario from "../models/usuarioSchema";


const getUsuario = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const usuario = await Usuario.findById(id);
        console.log(usuario);
        res.status(200).json(usuario);
    }catch(err) {
        res.status(500).json({ message: "Error al traer el usuario" });
    }
}

const createUsuario = async (req: Request, res: Response) => {
    try{
        const body = req.body;
        const existingUsuario = await Usuario.findOne({ body });

        if (existingUsuario) {
            return res.status(200).json(existingUsuario);
        }
        const newUsuario = new Usuario(req.body);
        await newUsuario.save();

        res.status(201).json(newUsuario.toObject());

    } catch (error){
        console.error(error);
        res.status(500)
            .json({error: "Error al crear el usuario"});
    }
}

const updateUsuario = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await Usuario.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Se actualizó el usuario" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el usuario" });
    }
}

const deleteUsuario = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await Usuario.findByIdAndDelete(id);
        res.status(200).json({ message: "Se eliminó correctamente el usuario" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el usuario" });
    }
}

export default {
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
}