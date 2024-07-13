"use server";

import prisma from "@/lib/prismaClient";

export async function postBBS(data: {
  username: string;
  title: string;
  content: string;
}) {
  const newPost = await prisma.post.create({
    data: {
      username: data.username,
      title: data.title,
      content: data.content,
    },
  });
}
