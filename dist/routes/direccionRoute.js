"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const direccionController_1 = __importDefault(require("../controllers/direccionController"));
const route = express_1.default.Router();
route.get('/ver-direccion/:id', direccionController_1.default.getDirecciones);
route.post('/agregar-direccion', direccionController_1.default.createDireccion);
route.put('/actualizar-direccion/:id', direccionController_1.default.updateDireccion);
route.delete('/eliminar-direccion/:id', direccionController_1.default.deleteDireccion);
exports.default = route;
