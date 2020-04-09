const fs = require("fs");
const http = require("http");
const url = require("url");
// const fetch = require("./fetch");

const startPage = fs.readFileSync(`${__dirname}/index.html`, "UTF-8");

const js = fs.readFileSync(`${__dirname}/fetch.js`, "UTF-8");

const server = http.createServer((req, res) => {
  let { pathname } = url.parse(req.url, true);
  console.log(pathname);

  res.writeHead(200, {
    "content-type": "text/html"
    // "content-type": "text/script"
  });
  if (pathname == "/") {
    res.end(startPage);

    //js file
  } else if (pathname == "/fetch") {
    res.end(js);
  } else if (pathname == "/logo.jpg") {
    res.writeHead(200, {
      "content-type": "image/jpeg"
    });
  }
});

server.listen(5500, "localhost", () => {
  console.log("server up and running on 5500");
});
