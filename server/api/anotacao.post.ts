import { connectDB } from '../utils/mongoose';
import { defineEventHandler, readBody } from 'h3'
import Anotacao from '../schemas/Anotacao';


export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    await connectDB();

    const nova = await Anotacao.create({ texto: body.texto });

    return {
        id: nova._id
    };
});
