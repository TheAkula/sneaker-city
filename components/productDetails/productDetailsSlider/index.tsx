import Slider from "react-slick";
import Image from "next/image";

interface SliderProps {
  images: string[];
}

export const ProductSlider: React.FC<SliderProps> = ({ images }) => {
  return (
    <Slider>
      {images.length > 1 ? (
        images.map((img) => {
          return <Image src={img} alt="" key={img} />;
        })
      ) : images.length === 0 ? (
        <Image src={images[0]} alt="" />
      ) : null}
    </Slider>
  );
};
