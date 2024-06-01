import express from 'express';
import tarjetaController from "../controllers/tarjetaController";

const route = express.Router();

route.get('/ver-tarjetas/:id', tarjetaController.getTarjetas)
route.post('/agregar-tarjeta', tarjetaController.createTarjeta);
route.put('/actualizar-tarjeta/:id', tarjetaController.updateTarjeta);
route.delete('/eliminar-tarjeta/:id', tarjetaController.deleteTarjeta);

export default route;

