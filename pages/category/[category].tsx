import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import { MainLayout } from "../../components/mainLayout";

interface CategoryProps {
  category: string;
  categories: string[];
}

const Category: NextPage<CategoryProps> = ({ category, categories }) => {
  return <MainLayout categories={categories} category={category} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = (await res.json()) as string[];
  return {
    paths: categories.map((c) => {
      return {
        params: {
          category: c,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = (await res.json()) as string[];

  return {
    props: {
      category: params!.category,
      categories: categories,
    },
  };
};

export default Category;
