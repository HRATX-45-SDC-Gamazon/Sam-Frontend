var express = require("express");
var cors = require("cors");
var path = require("path");
var app = express();

app.use(cors());

app.get("/", (req, res) => {});

app.use(express.static("./client/dist/"));

app.listen(3380, console.log("listening on port 3380!"));
