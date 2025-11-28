import mongoose from 'mongoose';
// import { useRuntimeConfig } from 'nuxt/app';

export async function connectDB() {
    if (mongoose.connection.readyState === 1) return;
    console.log({'process.env.MONGO_URI': process.env.MONGO_URI})

    await mongoose.connect(process.env.MONGO_URI);
}
