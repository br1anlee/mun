import "../style/Navbar.css"
import Logo from "../assets/images/mun.png"
import {useState} from "react"

export default function Navbar () {

    const [isNavBarCollapsed, setNavBarCollapsed] = useState(true)

    const toggleNavBar = () => {
        setNavBarCollapsed(!isNavBarCollapsed)
    }
    return (
        <nav>
            <div className="navbar-brand">
                <a href="#">My Navbar</a>
            </div>

            <div>
                <div className="navbar-start">
                    <a href="#" className="navbar-item">
                        Home
                    </a>

                    <a href="#" className="navbar-item">
                        Link
                    </a>
                </div>
            </div>
        </nav>
    )
}