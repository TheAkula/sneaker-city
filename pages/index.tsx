import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { MainLayout } from "../components/mainLayout";
import { ProductType } from "../redux/reducers/productsReducer";

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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch("https://fakestoreapi.com/products/categories");
//   const categories = await res.json();
//   const resProds = await fetch(
//     "https://fakestoreapi.com/products" +
//       (context.params ? "/category/" + context.params.category : "")
//   );
//   const products = await resProds.json();
//   return {
//     props: {
//       categories: categories,
//       products: products,
//     },
//   };
// };

export default Home;
