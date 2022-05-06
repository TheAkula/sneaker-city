import Image from "next/image";
import UserImg from "../../public/images/svg/user.svg";

export const UserImage = () => (
  <Image src={UserImg} alt="" width="24" height="24" />
);
