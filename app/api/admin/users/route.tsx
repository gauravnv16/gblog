import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    try{
        const users = await prisma.user.findMany() || [];
        return NextResponse.json(users.reverse());
    }   catch(err){
        return NextResponse.json([]);
    }
}