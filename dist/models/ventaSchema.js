"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ventaSchema = new mongoose_1.default.Schema({
    id_venta: {
        type: Number,
        required: true
    },
    total_venta: {
        type: Number,
        required: true,
    },
    fecha_venta: {
        type: String,
        required: true,
    },
    lista_productos: {
        type: String,
        required: true,
    }
});
exports.default = mongoose_1.default.model("Ventas", ventaSchema);
