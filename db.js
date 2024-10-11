const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://meownekoid:uk2Xc5KGgBHRTdau@naba.uskxi.mongodb.net/?retryWrites=true&w=majority&appName=naba"

async function getconnection(){
    mongoose.connect(mongoURI, {
        serverSelectionTimeoutMS: 30000 // Increase the timeout to 30 seconds
    })
    .then(()=>{
        console.log(`connected to DB `)
    })
    .catch((err)=>{
        console.error('Error connecting to MongoDB:', err)
    });

    // Add event listeners for connection errors and timeouts
    mongoose.connection.on('error', (error) => {
        console.error('MongoDB connection error:', error);
    });

    mongoose.connection.on('timeout', () => {
        console.error('MongoDB connection timed out');
    });
}

module.exports = getconnection;