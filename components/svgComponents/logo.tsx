import Image from "next/image";
import LogoImg from "../../public/images/svg/logo.svg";

export const LogoImage = () => (
  <Image src={LogoImg} alt="" width="99" height="36" />
);
