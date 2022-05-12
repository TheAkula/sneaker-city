import styled from "styled-components";
import { baseTheme } from "../../styles/baseTheme";

export const StyledLoadingBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c4c4c44d;
  position: fixed;
  left: 0;
  top: 0;
  z-index: ${baseTheme.zIndex.backdrop};

  .spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
