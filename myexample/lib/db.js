import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUsers = async () => {
  try {
    const allElement = await prisma.users.findMany({});
    await prisma.$disconnect();
    console.log(allElement);
    return allElement;
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

export const postUser = async (body) => {
  try {
    const respuesta = await prisma.users.create({
      data: body,
    });
    await prisma.$disconnect();
    return respuesta;
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
