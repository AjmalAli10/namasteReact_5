import "./Header.css";
import FoodLogo from "../assets/Food-Logo.png";
const Header = () =>{
    return(
        <nav className="header">
            <a href="/">
                <img src={FoodLogo}alt="logo" width="100" height="100"/>
            </a>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </nav>
    )
};
export default Header;