import express from 'express';
import ventaController from "../controllers/ventaController";


const route = express.Router();

route.get('/ver-venta/:id', ventaController.getVenta)
route.post('/agregar-venta', ventaController.createVenta);
route.put('/actualizar-venta/:id', ventaController.updateVenta);
route.delete('/eliminar-venta/:id', ventaController.deleteVenta);

export default route;

