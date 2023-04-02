import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    const blogs = await prisma.post.findMany() || [];
    return NextResponse.json(blogs.reverse());
}

export async function POST(request: Request){
    const { title, body, image,authorId } = await request.json();
    await prisma.post.create({
        data: {
            title,
            body,
            image,
            authorId
        }
    });
    const blogs = await prisma.post.findMany() || [];
    return NextResponse.json(blogs.reverse());
}