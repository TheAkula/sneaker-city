import type { NextPage } from "next";
import { Header } from "../components/header";
import { NewArrivalsSettings } from "../components/newArrivalsSettings";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main>
        <NewArrivalsSettings />
      </main>
    </div>
  );
};

export default Home;
