import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config'
import mongoose from 'mongoose';
import direccionRoute from "./routes/direccionRoute";
import tarjetaRoute from "./routes/tarjetaRoute";
import usuariosRoute from "./routes/usuariosRoute";
import ventaRoute from "./routes/ventaRoute";
import productoRoute from "./routes/productoRoute";

mongoose.connect(process.env.DB_CONNECTION_STRING as string)
    .then(() => {
        console.log("Base de datos conectada")
    })

const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', async (req: Request, res: Response) => {
    res.send({ message: 'servidor OK' })
})

app.use('/api/direcciones/', direccionRoute);
app.use('/api/tarjetas/', tarjetaRoute);
app.use('/api/usuarios/', usuariosRoute);
app.use('/api/ventas/', ventaRoute);
app.use('/api/productos/', productoRoute);

app.listen(3000, () =>{
    console.log("App corriendo en el puerto 3000");
})