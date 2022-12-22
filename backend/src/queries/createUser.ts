import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const exampleData = {
  name: "Bruce",
  surname: "Wayne",
  age: 45,
  doesLikePineapple: true,
};

// pass arguments from express/req-body here ->
async function create() {
  const query = await prisma.user.create({
    data: exampleData,
  });

  console.log(query);
}

create().then(async () => {
  await prisma.$disconnect();
});

export default create;
