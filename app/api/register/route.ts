import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    const { name,email,password } = await request.json();

    const userExists = await prisma.user.findUnique({
        where:{
            email
        }
    });

    if (userExists){
        return NextResponse.json({
            error:"User already exists"
        });
    } else {
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        });

        return NextResponse.json({
            id:user.id,
            name:user.name,
            email:user.email,
            isadmin:user.isadmin
        });
    }

}