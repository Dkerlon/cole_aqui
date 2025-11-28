import Anotacao from '../../schemas/Anotacao';
import { connectDB } from '../../utils/mongoose';
import { defineEventHandler, createError } from 'h3'


export default defineEventHandler(async (event) => {
    await connectDB();

    const id = event.context.params!.id;

    const nota = await Anotacao.findById(id);
    if (!nota) throw createError({ statusCode: 404, message: "Not found" });

    return { texto: nota.texto };
});

