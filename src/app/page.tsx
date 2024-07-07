import Banner from "@/components/ui/home/banner";
import Navbar from "@/components/ui/home/navbar";
import { Layout } from "antd";
import { Metadata } from "next";

const { Content } = Layout;

export const metadata: Metadata = {
  title: "Quiz_Application",
  description: "Quiz Management Application",
};

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}
