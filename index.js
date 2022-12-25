const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// Creates server
app.use(express.static("public"));

server.listen(8080, () => {
  console.log("Listening on 8080");
})
