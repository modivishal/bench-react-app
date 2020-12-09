const express = require("express");
const axios = require("axios");
const cors = require("cors");
const port = 3000;
const baseUrl = "https://resttest.bench.co/transactions";

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  let pageCount = 1;
  let transactionData = []
  let totalCount;

  //This code fetches all transactions from all pages
  const fetchTrasnsactions = async () => {
    try {
      do {
        const res = await axios.get(`${baseUrl}/${pageCount}.json`);
        if (res.status === 200) {
          totalCount = Math.round(res.data.totalCount / 10);
          pageCount++;
          transactionData = transactionData.concat(res.data.transactions);
        }
      } while (pageCount <= totalCount);
      return transactionData;
    } catch (error) {
      console.log("error", error);
    }
  };

  const finalResponse = await fetchTrasnsactions();

  res.send(finalResponse);
});

app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
