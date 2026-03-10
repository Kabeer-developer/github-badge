const express = require("express");

const app = express();

app.use(express.json());



PORT = 5000;
app.listen(PORT,()=>console.log("server is running"));