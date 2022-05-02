const http = require("http");

let requestCount = 1;

const favicon = require("serve-favicon");
const express = require("express");
const app = express();

app.use(favicon(__dirname + "/favicon.ico"));

const server = http.createServer(function (request, response) {
  response.write("Tukhtayeva Roziya " + requestCount++ + " " + request.url);
  response.end();
});

server.listen(3003);
