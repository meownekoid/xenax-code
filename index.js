const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");


const app = express();
app.use(cors());
const Port = 3000;

app.use('/api/User' , require('./Routes/api'));


connectToMongo();
app.listen(Port, () => console.log("Server is running on " + Port));