import { PrismaClient } from "@prisma/client";


// const client = globalThis.prisma || new PrismaClient()
// if (process.env.NODE_ENV !== "production")globalThis.prisma = client

// export default client

declare global {
    namespace NodeJS {
        interface Global {}
    }
}

// add prisma to NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
    prisma: PrismaClient
}

// Prevent multiple instance of Prisma client in development
declare const global: CustomNodeJsGlobal
const prisma = global.prisma || new PrismaClient()
if(process.env.NODE_ENV === "development") global.prisma = prisma

export default prisma