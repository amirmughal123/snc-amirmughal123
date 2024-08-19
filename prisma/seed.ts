import { Person } from "../src/utils/common/person";
import { mockUsers } from "../src/utils/server/mock-users";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // TODO: Add mock users
  await prisma.user.create({
    data: mockUsers[Person.PersonA] as unknown as User,
  });
  await prisma.user.create({
    data: mockUsers[Person.PersonB] as unknown as User,
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
