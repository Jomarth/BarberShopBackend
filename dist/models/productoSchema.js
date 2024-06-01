"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productoSchema = new mongoose_1.default.Schema({
    id_producto: {
        type: Number,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    nombre_producto: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    cantidad: {
        type: String,
        required: true,
    }
});
exports.default = mongoose_1.default.model("Productos", productoSchema);
