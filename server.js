const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");

const server = express();
// server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, "client/build")));
server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
server.listen(process.env.PORT || 3001, () => {
  const port = process.env.PORT ? process.env.PORT : 3001;
  console.log(`server running on port ${port}`);
});
