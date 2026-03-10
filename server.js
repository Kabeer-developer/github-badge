const express = require("express");

const app = express();

app.use(express.json());

app.get("/",(req,res)=> {
    res.send("Health Status OK");
});


PORT = 5000;
app.listen(PORT,()=>console.log("server is running"));
