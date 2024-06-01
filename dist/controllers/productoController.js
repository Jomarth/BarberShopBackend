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
const productoSchema_1 = __importDefault(require("../models/productoSchema"));
const getProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const producto = yield productoSchema_1.default.findById(id);
        console.log(producto);
        res.status(200).json(producto);
    }
    catch (err) {
        res.status(500).json({ message: "Error al traer el producto" });
    }
});
const createProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const existingProducto = yield productoSchema_1.default.findOne({ body });
        if (existingProducto) {
            return res.status(200).json(existingProducto);
        }
        const newProducto = new productoSchema_1.default(req.body);
        yield newProducto.save();
        res.status(201).json(newProducto.toObject());
    }
    catch (error) {
        console.error(error);
        res.status(500)
            .json({ error: "Error al crear el producto" });
    }
});
const updateProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield productoSchema_1.default.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Se actualizó el producto" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar el producto" });
    }
});
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield productoSchema_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: "Se eliminó correctamente el producto" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al eliminar el producto" });
    }
});
exports.default = {
    getProducto,
    createProducto,
    updateProducto,
    deleteProducto
};
