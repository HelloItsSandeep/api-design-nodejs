# `http` module

NodeJS is a JavaScript runtime environment that allows JavaScript to run outside of a browser. `http` is a built-in module used to create server.

Server is a computer over a network (it always runs), server process the client's request and provide a necessary response.

```js
const http = require("http");

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end();
  }
});

server.listen(3001, () => {
  console.log("Server on http://localhost:3001");
});
```

## Simplicity of Express.js

Express.js is an abstraction over `http` module for handling client's http request. It supports middleware (enables the functionality of doing some task before sending response to the client).

Express.js simplify the code as compare to the built-in `http` module.

```js
const app = require("express");

app.get("/", (req, res) => {
  res.status(200);
  res.json({
    message: "hello",
  });
});

app.listen(3001);
```

## Initialize Prisma

```
npx prisma init
```

It will create prisma/schema.prisma
