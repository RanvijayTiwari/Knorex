const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());


app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message);
        
    }
});
