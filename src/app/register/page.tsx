import PerformerRegistrationPageComponent from "@/components/ui/Registration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz | Registration",
  description: "Quiz Management Application",
};

const RegistrationPage = () => {
  return <PerformerRegistrationPageComponent />;
};

export default RegistrationPage;
