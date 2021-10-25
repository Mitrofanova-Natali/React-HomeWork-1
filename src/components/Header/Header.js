import './Header.css';
import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";
import CommunicationBlock from "../ComunicationBlock/CommunicationBlock";

function Header() {
    return (
        <div className="Header">
            <NavBar/>
            <Logo/>
            <CommunicationBlock/>
        </div>
    );
}

export default Header;
