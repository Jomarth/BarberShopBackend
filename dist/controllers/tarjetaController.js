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
const tarjetaSchema_1 = __importDefault(require("../models/tarjetaSchema"));
const getTarjetas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const tarjetas = yield tarjetaSchema_1.default.findById(id);
        console.log(tarjetas);
        res.status(200).json(tarjetas);
    }
    catch (err) {
        res.status(500).json({ message: "Error al traer las tarjetas" });
    }
});
const createTarjeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const existingTarjeta = yield tarjetaSchema_1.default.findOne({ body });
        if (existingTarjeta) {
            return res.status(200).json(existingTarjeta);
        }
        const newTarjeta = new tarjetaSchema_1.default(req.body);
        yield newTarjeta.save();
        res.status(201).json(newTarjeta.toObject());
    }
    catch (error) {
        console.error(error);
        res.status(500)
            .json({ error: "Error al crear la tarjeta" });
    }
});
const updateTarjeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield tarjetaSchema_1.default.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Se actualizó la tarjeta" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar la tarjeta" });
    }
});
const deleteTarjeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield tarjetaSchema_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: "Se eliminó correctamente la tarjeta" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al eliminar la tarjeta" });
    }
});
exports.default = {
    getTarjetas,
    createTarjeta,
    updateTarjeta,
    deleteTarjeta
};
