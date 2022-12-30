import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteUser() {
    console.log('userDeleted')
} 
