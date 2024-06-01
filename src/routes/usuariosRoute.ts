import express from 'express';
import usuarioController from "../controllers/usuarioController";


const route = express.Router();

route.get('/ver-usuario/:id', usuarioController.getUsuario)
route.post('/agregar-usuario', usuarioController.createUsuario);
route.put('/actualizar-usuario/:id', usuarioController.updateUsuario);
route.delete('/eliminar-usuario/:id', usuarioController.deleteUsuario);

export default route;

