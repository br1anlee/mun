import logo from "../assets/images/mun.png"
import lunch from "../assets/menu/lunch.pdf"
import dinner from "../assets/menu/dinner.pdf"
import bar from "../assets/menu/bar.pdf"
import alcohol from "../assets/menu/alcohol.pdf"

import "../style/Navbar.css"
export default function Navbar () {
    return (
        <header className="navbar">
            <a href="/">
                <img src={logo} alt="logo of mun" className="logo"/>
            </a>
            <nav>
                <ul className="menu">
                    <li>
                        MENU
                    </li>
                    <li>
                        GALLERY
                    </li>
                    <li>
                        CONTACT
                    </li>
                </ul>
            </nav>
        </header>
    )
}