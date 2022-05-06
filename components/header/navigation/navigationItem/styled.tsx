import styled from "styled-components";

export const StyledNavigationItem = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  line-height: 24px;
  position: relative;

  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -4px;
    height: 2px;
    width: 0;
    transition: width 0.2s;
    background-color: #000;
    left: 50%;
    transform: translate(-50%);
  }

  :hover::after {
    width: 100%;
  }
`;
