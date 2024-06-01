"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const direccionRoute_1 = __importDefault(require("./routes/direccionRoute"));
const tarjetaRoute_1 = __importDefault(require("./routes/tarjetaRoute"));
const usuariosRoute_1 = __importDefault(require("./routes/usuariosRoute"));
const ventaRoute_1 = __importDefault(require("./routes/ventaRoute"));
const productoRoute_1 = __importDefault(require("./routes/productoRoute"));
mongoose_1.default.connect(process.env.DB_CONNECTION_STRING)
    .then(() => {
    console.log("Base de datos conectada");
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/direcciones/', direccionRoute_1.default);
app.use('/api/tarjetas/', tarjetaRoute_1.default);
app.use('/api/usuarios/', usuariosRoute_1.default);
app.use('/api/ventas/', ventaRoute_1.default);
app.use('/api/productos/', productoRoute_1.default);
app.listen(3000, () => {
    console.log("App corriendo en el puerto 3000");
});
