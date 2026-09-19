import app from './src/app.js'
import config from './src/config/config.js'
import connectDB from './src/db/db.js';

const PORT = config.PORT || 8000;

const start = async ()=>{
    try {
        await connectDB();
        await app.listen({ port:PORT });
        console.log(`Server is listening at PORT: ${PORT}`)
    } catch (error) {
        process.exit(1)
    }
}

start();