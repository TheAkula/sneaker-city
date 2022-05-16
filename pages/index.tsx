import type { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import { MainLayout } from "../components/mainLayout";

interface HomeProps {
  categories: string[];
}

const Home: NextPage<HomeProps> = ({ categories }) => {
  return <MainLayout categories={categories} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();
  return {
    props: {
      categories: categories,
    },
  };
};

export default Home;
