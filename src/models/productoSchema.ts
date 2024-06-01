import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    id_producto: {
        type: Number,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    nombre_producto: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    cantidad: {
        type: String,
        required: true,
    }

});

export default mongoose.model("Productos", productoSchema);