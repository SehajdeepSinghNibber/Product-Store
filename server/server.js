import app from './src/app.js';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js'
import cors from 'cors';

app.use(cors());

dotenv.config({ quiet: true });

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

startServer();
