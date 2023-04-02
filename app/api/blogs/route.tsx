import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    try{
        const blogs = await prisma.post.findMany() || [];
        return NextResponse.json(blogs.reverse());
    }catch(err){
        return NextResponse.json([]);
    }
}

export async function POST(request: Request){
    try{
        const { title, body, image, authorId, links } = await request.json();
        const blog = await prisma.post.create({
            data: {
                title,
                body,
                image,
                authorId
            }
        });

        await prisma.like.create({
            data:{
                postId:blog.id,
                authorId:authorId
            }
        });

        const blogs = await prisma.post.findMany() || [];
        return NextResponse.json(blogs.reverse());
    }catch(err){
        return NextResponse.json([]);
    }
}

export async function PUT(request: Request){
    try{
        const {
            id,
            title,
            body,
            image,
            authorId
        } = await request.json();

        await prisma.post.update({
            where: {
                id
            },
            data: {
                title,
                body,
                image,
                authorId,
            }
        })
        const blogs = await prisma.post.findMany() || [];
        return NextResponse.json(blogs.reverse());
    }catch(err){
        return NextResponse.json([]);
    }
}

export async function DELETE(request: Request){
    try{
        const { id } = await request.json();
        await prisma.post.delete({
            where: {
                id
            }
        })
        const blogs = await prisma.post.findMany() || [];
        return NextResponse.json(blogs.reverse());
    }catch(err){
        return NextResponse.json([]);
    }
}