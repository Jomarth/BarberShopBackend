"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ventaController_1 = __importDefault(require("../controllers/ventaController"));
const route = express_1.default.Router();
route.get('/ver-venta/:id', ventaController_1.default.getVenta);
route.post('/agregar-venta', ventaController_1.default.createVenta);
route.put('/actualizar-venta/:id', ventaController_1.default.updateVenta);
route.delete('/eliminar-venta/:id', ventaController_1.default.deleteVenta);
exports.default = route;
