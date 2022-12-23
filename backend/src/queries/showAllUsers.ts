import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function showAll() {
  const results = await prisma.user.findMany();
  //   console.table(results);
  const resultsObjet = {
    usersData: results,
  };
  return resultsObjet; //returns object with array of objects [{},{},{}]
}
  
// showAll().then(async () => {
//   await prisma.$disconnect();
// });
