import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function showAll() {
  const results = await prisma.user.findMany();
  //   console.table(results);

  return results;
}

// showAll().then(async () => {
//   await prisma.$disconnect();
// });
