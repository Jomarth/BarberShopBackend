import mongoose from "mongoose";

const DireccionSchema = new mongoose.Schema({
    id_usuario: {
        type: Number,
        required: true,
    },
    calle: {
        type: String,
        required: true,
    },
    colonia: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    pais: {
        type: String,
        required: true,
    },
    codigo_postal: {
        type: Number,
        required: true,
    }
})

export default mongoose.model("Direccion", DireccionSchema);
