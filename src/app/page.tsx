import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Quiz_Application",
  description: "Quiz Management Application",
};
const HomePage = dynamic(() => import("@/components/ui/home/home"), {
  ssr: false,
});

export default function Home() {
  return <HomePage />;
}
