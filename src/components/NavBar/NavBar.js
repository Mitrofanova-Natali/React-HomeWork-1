import './NavBar.css';
import Burger from "../Burger/Burger"

function NavBar() {
    return (
        <div className="navBar">
            <Burger/>
            <ul className="navBarMenu">
                <li>Tour</li>
                <li>Features</li>
                <li>Pricing</li>
            </ul>
        </div>
    )
}

export default NavBar;