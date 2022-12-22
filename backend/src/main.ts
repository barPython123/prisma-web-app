import express from "express";
import cors from "cors";
import { showAll } from "./queries/showAllUsers";

const app = express();
const PORT = 6020;

app.get("/", async (req, res) => {
  console.log("endpoint reached");
  // console.log(showAll()) 
  res.json(await showAll()); //it does not await, result is empty {} body
});

app.listen(PORT, () => {
  console.log("server stared!");
});
