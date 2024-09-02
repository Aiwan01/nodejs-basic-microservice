const express = require("express");
const axios = require("axios")
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const port = process.env.PORT || 5000

app.get("/get-users", async(req, res)=>{
    const response = await axios.get("http://localhost:8000/get-users");
    res.json(response.data);
})

app.get("/get-products", async(req, res)=>{
    const response = await axios.get("http://localhost:8000/get-products");
    res.json(response.data);
})



app.listen(port, ()=>{
    console.log("server running on port "+port)
})