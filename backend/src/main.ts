import express from "express";
import cors from "cors";
import { showAll } from "./queries/showAllUsers";
import createUser from "./queries/createUser";

const app = express();
const PORT = 6020;
app.use(express.json())

app.get("/", async (req, res) => {
  console.log(`endpoint "/" reached`);
  // console.log(showAll()) 
  res.json(await showAll()); //it does not await, result is empty {} body
});

app.get('/create', async (req, res) => {
  console.log(`endpoint "/create" reached`)
  console.log(req.body)
  await createUser(req.body)
  res.send('ok')
})

app.listen(PORT, () => {
  console.log("server stared!");
});
