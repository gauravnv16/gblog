import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    const { email,password } = await request.json();

    const userExists = await prisma.user.findUnique({
        where:{
            email
        }
    });

    if (userExists){
        if(userExists.password == password){
            return NextResponse.json({
                id:userExists.id,
                name:userExists.name,
                email:userExists.email,
                isadmin:userExists.isadmin
            });
        } else {
            return NextResponse.json({
                error:"Password is incorrect"
            });
        }
    } else {
        return NextResponse.json({
            error:"User with that email does not exists"
        });
    }

}