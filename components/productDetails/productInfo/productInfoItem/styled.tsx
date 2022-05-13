import styled from "styled-components";
import { baseTheme } from "../../../../styles/baseTheme";

interface ArrowImageContainerProps {
  active: boolean;
}

export const StyledDescriptionItem = styled.div`
  border-bottom: 1px solid ${baseTheme.colors.line};
  padding-bottom: 32px;
  padding-top: 32px;

  h3 {
    font-size: 16px;
    font-weight: 500;
  }

  .content {
    font-size: 16px;
    color: ${baseTheme.colors.text2};
    line-height: 24px;
    font-weight: 500;
    margin-top: 18px;
  }
`;

export const StyledDescriptionItemHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const ArrowImageContainer = styled.div<ArrowImageContainerProps>`
  width: 16px;
  height: 16px;
  transform: ${({ active }) => (active ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s;
`;
