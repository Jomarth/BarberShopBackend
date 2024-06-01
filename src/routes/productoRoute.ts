import express from 'express';
import productoController from "../controllers/productoController";

const route = express.Router();


route.get('/ver-producto/:id', productoController.getProducto)
route.post('/agregar-producto', productoController.createProducto);
route.put('/actualizar-producto/:id', productoController.updateProducto);
route.delete('/eliminar-producto/:id', productoController.deleteProducto);

export default route;

