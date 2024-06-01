import mongoose from "mongoose";

const tarjetaSchema = new mongoose.Schema({
    titular: {
        type: String,
        required: true,
    },
    numero: {
        type: Number,
        required: true,
    },
    fecha: {
        type: String,
        required: true,
    }

})

export default mongoose.model("Tarjetas", tarjetaSchema);
