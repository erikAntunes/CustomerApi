// src/testPrisma.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const customers = await prisma.customer.findMany();
    console.log(customers);
  } catch (error) {
    console.error('Error: ', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();