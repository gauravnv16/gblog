import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try{
        const users = await prisma.user.findMany();
        return NextResponse.json({
            users: users.reverse(),
            userCount: users.length
        }); 
    }   catch(err){
        return NextResponse.json([]);
    }
}