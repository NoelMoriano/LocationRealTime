//REQUIRE
const express = require("express");
engine = require("ejs-mate");
const path = require("path");
const socketIO = require("socket.io");
const http = require("http");

//INITILIZATIONS
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3001;

//CONFIG VIEWS WITH ESJ
app.engine("ejs",engine);

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views")); 

//ROUTES
app.use(require("./routes"));

//SOCKETS
require("./sockets")(io);

//CONFIG FILES STATICS
app.use(express.static(path.join(__dirname,"public")));

//STARTING THE SERVER
server.listen(port,() => console.log(`App run port ${port}`));