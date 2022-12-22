import express from "express";
import cors from "cors";
import { showAll } from "./queries/showAllUsers";

const app = express();
const PORT = 6020;

app.get("/", (req, res) => {
  console.log("endpoint reached");
  res.json(showAll()); //it does not await, result is empty {} body
});

app.listen(PORT, () => {
  console.log("server stared!");
});
