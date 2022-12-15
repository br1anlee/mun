import logo from "../assets/images/mun.png"
import lunch from "../assets/menu/lunch.pdf"
import dinner from "../assets/menu/dinner.pdf"
import bar from "../assets/menu/bar.pdf"
import alcohol from "../assets/menu/alcohol.pdf"

import {Link} from 'react-scroll'

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
                        <Link to="munMenu" smooth>
                            MENU
                        </Link>
                    </li>
                    <li>
                        <Link to="gallery" smooth>
                            GALLERY
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}