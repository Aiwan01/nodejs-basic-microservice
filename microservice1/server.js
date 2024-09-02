const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();


app.get("/get-users", (req, res)=>{
    return res.json({"status":200, data: [{name : "salik", age: 28, city: "araria"}]})
})




app.listen(8000, ()=>{
    console.log("server running on port 8000...")
})