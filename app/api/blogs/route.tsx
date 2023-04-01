import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    const blogs = await prisma.post.findMany();
    return NextResponse.json(blogs.reverse());
}