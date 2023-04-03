import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try{
        const users = await prisma.user.findMany();
        prisma.$disconnect();
        return NextResponse.json({
            users: users.reverse(),
            userCount: users.length
        }); 
    }   catch(err){
        return NextResponse.json([]);
    }
}

export async function DELETE(request: Request){
    try{
        const { id } = await request.json();
        const user = await prisma.user.delete({
            where: {
                id: id
            }
        });

        const comment = await prisma.comment.deleteMany({
            where: {
                authorId: id
            }
        });
        await prisma.$disconnect();
        return NextResponse.json({
            message: "User deleted successfully"
        }); 
    }   catch(err){
        return NextResponse.json({
            error: "Something went wrong"
        });
    }
}