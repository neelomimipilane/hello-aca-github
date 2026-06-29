const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel 🚀"));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from ACA!", timestamp: new Date().toISOString() });
});

module.exports = app;
