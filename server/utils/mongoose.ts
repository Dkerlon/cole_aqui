import mongoose from 'mongoose';

const config = useRuntimeConfig();

export async function connectDB() {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(config.MONGO_URI);
}
