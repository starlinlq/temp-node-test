const http = require("http");

let server = http.createServer((req, res) => {
  if (req.url === "/") return res.end("this is home page");
  if (req.url === "/about") return res.end("this is about");

  res.end(`<h1>page not found</h1>`);
});

server.listen("5000");
