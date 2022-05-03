const http = require("http");
const fs = require("fs");

const delay = (ms) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
};

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const server = http.createServer(async (request, response) => {
  switch (request.url) {
    case "/home": {
      const data = await readFile("pages/home.html");
      response.write(data);
      response.end();
      break;
    }

    case "/about": {
      const data = await readFile("pages/about.html");

      response.write(data);
      response.end();
      break;
    }
    case "/about1": {
      await delay(3000);
      response.write("About Course");
      response.end();
      break;
    }

    default: {
      response.write("404 not found");
      response.end();
    }
  }
});

server.listen(3003);
