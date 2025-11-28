import mongoose from 'mongoose';
// import { useRuntimeConfig } from 'nuxt/app';


const config = process.env;

export async function connectDB() {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(config.MONGO_URI);
}
