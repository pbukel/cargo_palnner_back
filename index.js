const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data/shipments.json");

app.listen(4000);
app.use(cors());

app.use(express.json());

app.get("/addUser", (req, res) => {
  res.send({ data });
});
