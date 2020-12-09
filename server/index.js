const express = require("express");
const axios = require("axios");
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  axios.get("https://resttest.bench.co/transactions/1.json").then((response) => {
    res.send(response.data);
  });
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
