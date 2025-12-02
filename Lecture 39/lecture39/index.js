const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/sum", (req, res) => {
  let { a, b } = req.body;
  if (a === undefined || b === undefined) {
    return res.json({
      success: false,
      data: "invalid argument"
    });
  }

  res.json({
    success: true,
    data: a + b
  });
});

module.exports = app;