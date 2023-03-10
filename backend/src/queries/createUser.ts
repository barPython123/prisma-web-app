import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface PrismaShape {
  name: string;
  surname: string;
  age: number;
  doesLikePineapple: boolean;
}
// const exampleData = {
//   name: "Bruce",
//   surname: "Wayne",
//   age: 45,
//   doesLikePineapple: true,
// };

// !! ad TS Intraface for req.body based on exampleData
// pass arguments from express/req-body here ->
async function createUser(args: PrismaShape) {
  const query = await prisma.user.create({
    data: args,
  });

  // console.log(query);
}

// create().then(async () => {
//   await prisma.$disconnect();
// });

export default createUser;
