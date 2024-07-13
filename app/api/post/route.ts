import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const allBSSPosts = await prisma.post.findMany();
  return NextResponse.json(allBSSPosts);
}
export async function POST(req: Request) {
  const { username, title, content } = await req.json();
  const newPost = await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });
  return NextResponse.json(newPost);
}
