"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuarioSchema_1 = __importDefault(require("../models/usuarioSchema"));
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const usuario = yield usuarioSchema_1.default.findById(id);
        console.log(usuario);
        res.status(200).json(usuario);
    }
    catch (err) {
        res.status(500).json({ message: "Error al traer el usuario" });
    }
});
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const existingUsuario = yield usuarioSchema_1.default.findOne({ body });
        if (existingUsuario) {
            return res.status(200).json(existingUsuario);
        }
        const newUsuario = new usuarioSchema_1.default(req.body);
        yield newUsuario.save();
        res.status(201).json(newUsuario.toObject());
    }
    catch (error) {
        console.error(error);
        res.status(500)
            .json({ error: "Error al crear el usuario" });
    }
});
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield usuarioSchema_1.default.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Se actualizó el usuario" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar el usuario" });
    }
});
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield usuarioSchema_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: "Se eliminó correctamente el usuario" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al eliminar el usuario" });
    }
});
exports.default = {
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
};
