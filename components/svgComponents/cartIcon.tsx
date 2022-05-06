import Image from "next/image";
import CartImg from "../../public/images/svg/cart.svg";

export const CartImage = () => (
  <Image src={CartImg} alt="" width="24" height="24" />
);
