const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express.js Server!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>This is where you can contact me :))</h1>");
});
app.get("/console", (req, res) => {
  res.send("<h1>Future console</h1>");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
