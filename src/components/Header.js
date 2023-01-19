import "./Header.css";
const Header = () =>{
    return(
        <nav className="header">
            <a href="/">
                <h2 className="nav-title">KHANA</h2>
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