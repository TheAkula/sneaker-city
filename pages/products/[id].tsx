import { NextPage } from "next";
import { ProductDetails } from "../../components/productDetails";
import { ProductType } from "../../redux/reducers/productsReducer";

const Details: NextPage<ProductType> = (props) => {
  return <ProductDetails {...props} />;
};

// export const getServerSideProps = async () => {
//   const res = await fetch("https://fakestoreapi.com/products/1");
//   const product = await res.json();
//   return {
//     props: {
//       ...product,
//     },
//   };
// };

export default Details;
