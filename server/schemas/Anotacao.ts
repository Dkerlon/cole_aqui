import mongoose from 'mongoose';

const AnotacaoSchema = new mongoose.Schema({
    texto: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Anotacao', AnotacaoSchema);
