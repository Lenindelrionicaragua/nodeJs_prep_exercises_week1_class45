/**
 * Exercise 3: Create an HTTP web server
 */

const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal server error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/index.js") {
    fs.readFile("index.js", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal server error");
      } else {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(data);
      }
    });
  } else if (req.url === "/style.css") {
    fs.readFile("style.css", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal server error");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
