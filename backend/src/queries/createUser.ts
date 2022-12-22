import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const exampleData = {
  name: "Michał",
  surname: "Maniek",
  age: 33,
  doesLikePineapple: false,
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
