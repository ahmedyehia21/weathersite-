const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// projectData object to act as endpoint for all routes
projectData = {};

//main project folder
app.use(express.static("website"));
/* GET Route */
app.get("/all", (req, res) => res.send(projectData));

/* GET Route */
app.post("/add", (req, res) => {
  projectData = req.body;
  console.log(projectData);
  res.send(projectData);
});

const port = 4000;
const hostname = "127.0.0.1";

// testing the server 
const listening = () =>
console.log(`http://${hostname}:${port}/`);

app.listen(port, listening);
