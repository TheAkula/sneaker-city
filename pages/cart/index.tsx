import { NextPage, GetStaticProps } from "next";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ShoppingCart } from "../../components/shoppingCart";

interface CartPage {
  categories: string[];
}

const Cart: NextPage<CartPage> = ({ categories }) => {
  return (
    <div>
      <div className="container">
        <Header categories={categories} />
        <ShoppingCart />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = (await res.json()) as string[];

  return {
    props: {
      categories: categories,
    },
  };
};

export default Cart;
