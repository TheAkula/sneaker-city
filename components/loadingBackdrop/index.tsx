import { Spinner } from "../UI/spinner";
import { StyledLoadingBackdrop } from "./styled";

export const LoadingBackdrop = () => {
  return (
    <StyledLoadingBackdrop>
      <Spinner className="spinner" />
    </StyledLoadingBackdrop>
  );
};
