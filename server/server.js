import app from './src/app.js';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js'

dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});