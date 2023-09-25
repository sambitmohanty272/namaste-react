import { LOGO_URL } from "../../utils/Constant";


const Header = () => (
    <div className="Header-comp">
      <img
        className="Logo"
        src = {LOGO_URL}
      ></img>
      <div className="nav-bar">
        <ul className="nav-ul">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );

  export default Header;