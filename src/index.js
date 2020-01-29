//REQUIRED
const express = require("express");
engine = require("ejs-mate");
const path = require("path");

//INITILIZATIONS
const app = express();
const port = 3001;

//CONFIG VIEWS WITH ESJ
app.engine("ejs",engine);

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views")); 

//ROUTES
app.use(require("./routes"));

//CONFIG FILES STATICS
app.use(express.static(path.join(__dirname,"public")));

//STARTING THE SERVER
app.listen(port,() => console.log(`App run port ${port}`));