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
const ventaSchema_1 = __importDefault(require("../models/ventaSchema"));
const getVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const venta = yield ventaSchema_1.default.findById(id);
        console.log(venta);
        res.status(200).json(venta);
    }
    catch (err) {
        res.status(500).json({ message: "Error al traer el venta" });
    }
});
const createVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const existingVenta = yield ventaSchema_1.default.findOne({ body });
        if (existingVenta) {
            return res.status(200).json(existingVenta);
        }
        const newVenta = new ventaSchema_1.default(req.body);
        yield newVenta.save();
        res.status(201).json(newVenta.toObject());
    }
    catch (error) {
        console.error(error);
        res.status(500)
            .json({ error: "Error al crear el venta" });
    }
});
const updateVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield ventaSchema_1.default.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Se actualizó el venta" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar el venta" });
    }
});
const deleteVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield ventaSchema_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: "Se eliminó correctamente el venta" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al eliminar el venta" });
    }
});
exports.default = {
    getVenta,
    createVenta,
    updateVenta,
    deleteVenta
};
