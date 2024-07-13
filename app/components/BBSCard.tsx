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

const BBSCard = () => {
  return (
    <Card className="w-[350px] ">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        praesentium laudantium temporibus voluptates enim odit consectetur
        adipisci quia at. Quod amet animi assumenda eaque eligendi vero
        architecto suscipit neque reiciendis.
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
      <Link href="/bbs-posts/1">Read more</Link>
    </Card>
  );
};

export default BBSCard;
