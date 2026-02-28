const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const noteRoutes = require("./routes/noteRoutes");

const app = express();


// middleware

app.use(cors());

app.use(express.json());


// DB connect

connectDB();


// routes

app.use("/api",noteRoutes);


app.listen(5000,()=>{

console.log("Server running");

});