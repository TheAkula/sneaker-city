import { StyledImageContainer } from "./styled";
import Image from "next/image";

interface ImageContainerProps {
  image: string;
  active?: boolean;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({
  active,
  image,
}) => {
  return (
    <StyledImageContainer active={active}>
      <div className="content">
        <div className="image-container">
          <Image
            src={image}
            alt=""
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </StyledImageContainer>
  );
};
