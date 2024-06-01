"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioController_1 = __importDefault(require("../controllers/usuarioController"));
const route = express_1.default.Router();
route.get('/ver-usuario/:id', usuarioController_1.default.getUsuario);
route.post('/agregar-usuario', usuarioController_1.default.createUsuario);
route.put('/actualizar-usuario/:id', usuarioController_1.default.updateUsuario);
route.delete('/eliminar-usuario/:id', usuarioController_1.default.deleteUsuario);
exports.default = route;
