const express = require("express");

const port = 3000;

const app = express();

app.get("/nginx-test", (req, res) => {
  return res.status(200).json({ message: "testing nginx rate limiter" });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
