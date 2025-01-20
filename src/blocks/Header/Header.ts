import HeaderView from "./HeaderView";

import { WINDOW_WIDTH } from "../../constants/general";

const Header = () => {
  const smallVer: boolean = WINDOW_WIDTH < 425; 
  const buttonTitle: string = smallVer ? "CV pdf" : "Download pdf";
  
  return HeaderView({ buttonTitle });
}

export default Header;
