import express from 'express';
import direccionController from "../controllers/direccionController";

const route = express.Router();

route.get('/ver-direccion/:id', direccionController.getDirecciones)
route.post('/agregar-direccion', direccionController.createDireccion);
route.put('/actualizar-direccion/:id', direccionController.updateDireccion);
route.delete('/eliminar-direccion/:id', direccionController.deleteDireccion);

export default route;

