import logo from "../assets/images/mun.png"
import {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

import {Link} from 'react-scroll'

import "../style/Navbar.css"
export default function Navbar () {

    const [NavOpen, setNavOpen] = useState(false)

    return (
        //  <header className="navbar">
        //      <Link to="/" className="nav-logo"> 
        //          <img src={logo} alt="logo of mun" className="logo"/>
        //      </Link>
        //      <nav>
        //          <ul className="menu">
        //              <li>
        //                  <Link to="munMenu" smooth>
        //                      MENU
        //                  </Link>
        //              </li>
        //              <li>
        //                  <Link to="gallery" smooth>
        //                      GALLERY
        //                  </Link>
        //              </li>
        //              <li>
        //                  <Link to="contact" smooth>
        //                      CONTACT
        //                  </Link>
        //              </li>
        //          </ul>
        //      </nav>
        //  </header>

        <nav className="navbar">
            <Link className="nav-link" onClick={() => setNavOpen(false)}>
                <img src={logo} alt="logo of mun" className="nav-logo" />
            </Link>
            
            <ul className={NavOpen ? 'nav-links active' : 'nav-links'}>
                <li className="nav-item">
                    <Link to="munMenu"className="nav-link" onClick={() => setNavOpen(false)} smooth>
                        MENU
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="gallery"className="nav-link" onClick={() => setNavOpen(false)} smooth>
                        GALLERY
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="contact"className="nav-link" onClick={() => setNavOpen(false)} smooth>
                        CONTACT
                    </Link>
                </li>
            </ul>
            <div onClick={() => setNavOpen(!NavOpen)} className="nav-icon">
                {NavOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    )
}

