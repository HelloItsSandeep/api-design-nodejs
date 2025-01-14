# `http` module

NodeJS is a JavaScript runtime environment that allows JavaScript to run outside of a browser. `http` is a built-in module used to create server.

Server is a computer over a network, server process the client's request and provide a necessary response.

```js
const http = require("http");

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end();
  }

  if (req.method === "GET" && req.url === "/favicon.ico") {
    res.statusCode = 200;
    res.end();
  }
});

server.listen(3001, () => {
  console.log("Server on http://localhost:3001");
});
```

# Tech Stack

- Node.js: runtime environment (v22.13.0)
- Express: framework for creating routes
- Database: PostgreSQL, Prisma to interact with DB
- Hosting: TBA
