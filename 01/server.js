const http = require("http");

let requestCount = 1;

const favicon = require("serve-favicon");
const express = require("express");
const app = express();

app.use(favicon(__dirname + "/favicon.ico"));

const server = http.createServer(function (request, response) {
  switch (request.url) {
    case "/students":
      response.write("Students " + requestCount++);
      response.end();
      break;
    case "/admin":
      response.write("Tukhtayeva Roziya " + requestCount++);
      response.end();
      break;

    default:
      response.write(
        "404 not found. Pages: /students , /admin " + requestCount++
      );
      response.end();
      break;
  }
});

server.listen(3003);
