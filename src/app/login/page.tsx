import LoginPageComponent from "@/components/ui/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IQuiz | login",
  description: "Quiz Management Application",
};

const LoginPage = () => {
  return <LoginPageComponent />;
};

export default LoginPage;
