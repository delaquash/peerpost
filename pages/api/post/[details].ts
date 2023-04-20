import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import prisma from "../../../prisma/client";
// import { authOptions } from "../auth/[...nextauth]";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if(req.method === "GET"){
        try {
            
        } catch (error) {
            res.
        }
    }
  }