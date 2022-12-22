import express from "express";
import cors from "cors"

const app = express();
const PORT = 6020;

app.get("/", (req, res) => {
  console.log("endpoint reached");
  res.send("ok");
});

app.listen(PORT, () => {
  console.log("server stared!");
});
