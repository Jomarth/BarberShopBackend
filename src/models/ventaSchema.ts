import mongoose from "mongoose";

const ventaSchema = new mongoose.Schema({
    id_venta: {
        type: Number,
        required: true
    },
    total_venta: {
        type: Number,
        required: true,
    },
    fecha_venta: {
        type: String,
        required: true,
    },
    lista_productos: {
        type: String,
        required: true,
    }

})

export default mongoose.model("Ventas", ventaSchema);