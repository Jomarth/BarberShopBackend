"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const tarjetaSchema = new mongoose_1.default.Schema({
    titular: {
        type: String,
        required: true,
    },
    numero: {
        type: Number,
        required: true,
    },
    fecha: {
        type: String,
        required: true,
    }
});
exports.default = mongoose_1.default.model("Tarjetas", tarjetaSchema);
