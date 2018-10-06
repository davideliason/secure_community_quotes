const express = require('express');
const app = express();
const port = process.env.PORT || 5000

app.use("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});

app.listen(5000, ()=>{
  console.log("server listening at " + port);
});