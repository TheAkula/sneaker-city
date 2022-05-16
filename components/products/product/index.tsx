import { StyledProduct } from "./styled";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  imageUrl: string;
  title: string;
  price: number;
  id: number;
}

export const Product: React.FC<ProductProps> = ({
  imageUrl,
  title,
  price,
  id,
}) => {
  return (
    <Link href={"/products/" + id} passHref>
      <StyledProduct>
        <div className="image-container">
          <Image
            src={imageUrl}
            alt={title}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <h4>{title}</h4>
        <p>{price}RWF</p>
      </StyledProduct>
    </Link>
  );
};
