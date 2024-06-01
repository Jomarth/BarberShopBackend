"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tarjetaController_1 = __importDefault(require("../controllers/tarjetaController"));
const route = express_1.default.Router();
route.get('/ver-tarjetas/:id', tarjetaController_1.default.getTarjetas);
route.post('/agregar-tarjeta', tarjetaController_1.default.createTarjeta);
route.put('/actualizar-tarjeta/:id', tarjetaController_1.default.updateTarjeta);
route.delete('/eliminar-tarjeta/:id', tarjetaController_1.default.deleteTarjeta);
exports.default = route;
