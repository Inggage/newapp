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
    res.json({
      status: "APi is working fine",
      code: 200,
    });
  });