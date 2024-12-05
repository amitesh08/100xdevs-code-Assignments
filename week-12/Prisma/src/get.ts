import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(userId: number){
    const response = await prisma.todo.findMany({
        where: {
            userId: userId
        }
    })
    console.group(response)
}

getUser(1)