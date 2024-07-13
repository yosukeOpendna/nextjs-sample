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

export default function Home() {
  return (
    <main>
      <BBSCardList />
    </main>
  );
}
