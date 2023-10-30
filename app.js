const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Dockerized Node.js App!");
});

app.get("/random", (req, res) => {
  const randomNum = Math.floor(Math.random() * 100);
  res.json({ randomNumber: randomNum });
});

// New endpoint to perform arithmetic operations
app.get("/calculate", (req, res) => {
  const { operation, num1, num2 } = req.query;
  let result;

  switch (operation) {
    case "add":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "subtract":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "multiply":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "divide":
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      result = "Invalid operation";
  }

  res.json({ result });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
