//REQUIRED
const express = require ("express");

//INITILIZATIONS
const app = express();
const port = 3000;


//ROUTES
app.get("/",(req,res) => res.send("Mi primer hello word with nodejs and express"));

//STARTING THE SERVER
app.listen(port,() => console.log(`App run port ${port}`));