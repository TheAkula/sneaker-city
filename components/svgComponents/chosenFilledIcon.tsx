import Image from "next/image";
import ChosenFilledImg from "../../public/images/svg/heart-filled.svg";

export const ChosenFilledImage = () => (
  <Image src={ChosenFilledImg} alt="" width="24" height="24" />
);
