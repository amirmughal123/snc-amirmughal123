import { MainLayout } from "@/layouts/MainLayout";
import { NextPage } from "next";
import { ContextProvider } from "@/utils/contexts/context"; // Adjust path as needed

const Home: NextPage = () => {
  return (
    <ContextProvider>
      <MainLayout />
    </ContextProvider>
  );
};

export default Home;
