import Image from "next/image";
import ChosenImg from "../../public/images/svg/heart.svg";

export const ChosenImage = () => (
  <Image src={ChosenImg} alt="" width="24" height="24" />
);
