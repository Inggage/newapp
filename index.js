const express = require('express');
const moment = require('moment');

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    const currentDateTime = Date.now();
    const formattedDate = moment(currentDateTime).format('dddd, MMMM Do YYYY, h:mm:ss a');
    
    console.log(`Example app listening on port ${PORT}, started\n${formattedDate}.`);
});

app.use("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API Status</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          color: #333;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #4CAF50;
        }
      </style>
    </head>
    <body>
      <h1>API is working fine</h1>
      <p>Status Code: 200</p>
    </body>
    </html>
  `);
});
