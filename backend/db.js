const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI ||"mongodb+srv://ayushi:ruby123@cluster0.m1bjogi.mongodb.net/tecomed?retryWrites=true&w=majority&appName=Cluster0";


const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 30000, 
        });
        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    }
};

module.exports = connectToMongo;
