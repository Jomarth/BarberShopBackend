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
const direccionSchema_1 = __importDefault(require("../models/direccionSchema"));
const getDirecciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const direccion = yield direccionSchema_1.default.findById(id);
        console.log(direccion);
        res.json(direccion);
    }
    catch (error) {
        res.json({ message: "Error al traer la dirección" });
    }
});
const createDireccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const existingDireccion = yield direccionSchema_1.default.findOne({ body });
        if (existingDireccion) {
            return res.status(200).json(existingDireccion);
        }
        const newDireccion = new direccionSchema_1.default(req.body);
        yield newDireccion.save();
        res.status(201).json(newDireccion.toObject());
    }
    catch (error) {
        console.error(error);
        res.status(500)
            .json({ error: "Error al crear la direccion" });
    }
});
const updateDireccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield direccionSchema_1.default.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Wuuu se actualizo" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar la dirección" });
    }
});
const deleteDireccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield direccionSchema_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: "Se eliminó correctamente la dirección" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al eliminar la dirección" });
    }
});
exports.default = {
    getDirecciones,
    createDireccion,
    updateDireccion,
    deleteDireccion
};
