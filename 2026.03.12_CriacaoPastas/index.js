require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Rodando");
});

app.listen(process.env.PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORTA}`);
});
