"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DireccionSchema = new mongoose_1.default.Schema({
    id_usuario: {
        type: Number,
        required: true,
    },
    calle: {
        type: String,
        required: true,
    },
    colonia: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    pais: {
        type: String,
        required: true,
    },
    codigo_postal: {
        type: Number,
        required: true,
    }
});
exports.default = mongoose_1.default.model("Direccion", DireccionSchema);
