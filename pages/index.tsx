import type { NextPage } from "next";
import SidebBar from "../components/SideBar";

const Home: NextPage = () => {
  return (
    <>
      <main className="bg-black h-screen overflow-hidden">
        <SidebBar />
      </main>
    </>
  );
};

export default Home;
