import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    auth0Id: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    tarjeta: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tarjetas'
    },

})

export default mongoose.model("Usuarios", usuarioSchema);