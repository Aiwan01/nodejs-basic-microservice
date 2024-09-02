const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();


app.get("/get-products", (req, res)=>{
    res.json({"status":200, data: [{name : "Mac book " }, {name: "asus notebook"}, {name : "samsumg s24 ultra"} ]})
})




app.listen(8100, ()=>{
    console.log("server running on port 8100...")
})