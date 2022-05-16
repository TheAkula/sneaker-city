import { StyledFooter } from "./styled";
import { TwitterImage } from "../svgComponents/twitterIcon";
import { FacebookImage } from "../svgComponents/facebookIcon";
import { InstImage } from "../svgComponents/instIcon";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__icons">
        <p>Don’t missout on once-in-a-while-deals:</p>
        <a className="footer__icon" href="#">
          <TwitterImage />
        </a>
        <a className="footer__icon" href="#">
          <InstImage />
        </a>
        <a className="footer__icon" href="#">
          <FacebookImage />
        </a>
      </div>
      <div className="footer__box">
        <div className="support-line">
          <span>Support line:</span>
          <span>+250 788 467 808</span>
        </div>
        <span>Copyright 2021 © Sneaker City ltd</span>
      </div>
    </StyledFooter>
  );
};
