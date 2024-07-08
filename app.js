const express = require('express')
const mongoose = require('mongoose')
const app = express();
app.use (express.json());
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log("Failed",err);
})

const routers = require("./routes/productRoutes")

app.use("/api/products",routers);

const PORT = 5500;
app.listen(PORT, ()=>{
    console.log(`Server Started at ${PORT}`)
})
