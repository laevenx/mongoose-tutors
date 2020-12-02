require("dotenv").config();

const express = require('express');
const app = express()
const cors = require("cors");
const PORT = process.env.PORT || 3005;
const server = require('http').createServer(app);

require("./config/db-connect")();

//app.use
app.set("trust proxy", 1);
app.use(cors({credentials: true, origin: true}));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


//app.use Router
var router = require("./routes");
app.use('/', router);

//app.use error handler
// app.use(require("./middlewares/errHandler"));


server.listen(PORT, () => console.log("Server started on " + PORT));