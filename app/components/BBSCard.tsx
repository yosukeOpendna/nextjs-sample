import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import React from "react";
import { BBSData } from "../types/types";
interface BBSDataProps {
  bbsData: BBSData;
}

const BBSCard = ({ bbsData }: BBSDataProps) => {
  const { id, title, content, createdAt, updatedAt, username } = bbsData;
  return (
    <Card className="w-[350px] ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <span>{username}</span>
      </CardFooter>
      <Link href={`/bbs-posts/${id}`}>Read more</Link>
    </Card>
  );
};

export default BBSCard;
