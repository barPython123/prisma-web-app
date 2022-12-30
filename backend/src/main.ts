import express from "express";
import cors from "cors";
import { showAll } from "./queries/showAllUsers";
import createUser from "./queries/createUser";
import { updateUser } from "./queries/updateUser";
import { deleteUser } from "./queries/deleteUser";

const app = express();
const PORT = 6020;
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const date = new Date();
  console.log(`endpoint "/" reached at ${date} `);
  // console.log(showAll())
  res.json(await showAll()); //it does not await, result is empty {} body
});

app.post("/update", async (req, res) => {
  console.log("record updated");
  res.send("record updated");
  updateUser();
});

app.get("/delete", async (req, res) => {
  deleteUser();
  res.send("user deleted");
});

app.post("/create", async (req, res) => {
  console.log(`endpoint "/create" reached}`);
  console.log(req.body);

  const objctToWrie = {
    name: req.body.name,
    surname: req.body.surname,
    age: parseInt(req.body.age),
    doesLikePineapple: req.body.doesLikePineapple,
  };
  await createUser(objctToWrie);
  res.send("ok");
});

app.listen(PORT, () => {
  console.log("server stared!");
});
