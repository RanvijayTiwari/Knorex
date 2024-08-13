const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            
        });
        console.log('Mongo connected successfully');
    } catch (error) {
        console.error('Mongo failed');
        
    }
};

module.exports = connectDB;
