import express from "express";
import cors from "cors";
import { showAll } from "./queries/showAllUsers";
import createUser from "./queries/createUser";

const app = express();
const PORT = 6020;
app.use(express.json())
app.use(cors())
app.get("/", async (req, res) => {
  const date = new Date()
  console.log(`endpoint "/" reached at ${date} `);
  // console.log(showAll()) 
  res.json(await showAll()); //it does not await, result is empty {} body
});


// change to POST
app.post('/create', async (req, res) => {
  console.log(`endpoint "/create" reached`)
  console.log(req.body)
  await createUser(req.body)
  res.send('ok')
})

app.listen(PORT, () => {
  console.log("server stared!");
});
