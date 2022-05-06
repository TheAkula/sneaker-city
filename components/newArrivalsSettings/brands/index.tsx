import { NewArrivalSetting } from "../newArrivalSetting";
import brands from "../../../public/data/brands.json";
import { Brand } from "./brand";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setBrands } from "../../../redux/reducers/settingsReducer";

export const Brands = () => {
  // const settingsState = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const onChangedHandler = (brand: string) => {
    console.log(brand);
    dispatch(setBrands(brand));
  };

  return (
    <NewArrivalSetting title="Brands">
      {brands.map((brand) => {
        return (
          <Brand
            key={brand.id}
            brand={brand.title}
            changed={onChangedHandler}
          />
        );
      })}
    </NewArrivalSetting>
  );
};
