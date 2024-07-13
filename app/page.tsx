import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import BBSCardList from "./components/BBSCardList";
import { cache } from "react";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const bbsAllData = await response.json();
  console.log(bbsAllData);

  return (
    <main>
      <BBSCardList />
    </main>
  );
}
