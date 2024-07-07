import Navbar from "@/components/ui/home/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz_Application",
  description: "Quiz Management Application",
};

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}
