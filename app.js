const express = require("express");

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "hello world" });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
