"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productoController_1 = __importDefault(require("../controllers/productoController"));
const route = express_1.default.Router();
route.get('/ver-producto/:id', productoController_1.default.getProducto);
route.post('/agregar-producto', productoController_1.default.createProducto);
route.put('/actualizar-producto/:id', productoController_1.default.updateProducto);
route.delete('/eliminar-producto/:id', productoController_1.default.deleteProducto);
exports.default = route;
