const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
require("dotenv").config()

const key=process.env.API_KEY;

app.get("/videos", (req, res) => {
  axios.get(`https://www.googleapis.com/youtube/v3/search&part=snippet$type=video&maxResults=5&q=${req.query.streamer}&key=${key}`)
.then((response) => {
  console.log(response.data)
  res.send(response.data);
})
.catch((err) => console.log(err))
})


app.listen(port, () => {
  console.log(`Listening on ${port}`)
});