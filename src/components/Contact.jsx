import "../style/Contact.css"
import {FaYelp, FaInstagram} from 'react-icons/fa'


export default function Contact () {
    return (
        <>
            <h1 id="contact" className="contactHeaders">CONTACT</h1>
            <h3 className="subHeaders">LOCATION</h3>
            <p className="addressHeader"><a href="https://www.google.com/maps/place/MUN+Korean+Steakhouse/@34.0637976,-118.3007153,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c7831bb7a8e3:0x9dbf02c72b384d5f!8m2!3d34.0637976!4d-118.2985266" target="_blank">3519 W 6th St, Los Angeles, CA 90020</a></p>

            <h3 className="subHeaders">PHONE</h3>
            <p>(213)355-3634</p>


            <h3 className="subHeaders">HOURS</h3>
            <h4 className="subsubHeader">LUNCH</h4>
            <p>11:30AM - 4:00PM</p>

            <p className="subsubHeader">DINNER</p>
            <p>5:00PM - 12:00AM</p>

            <a href="https://www.yelp.com/biz/mun-korean-steakhouse-los-angeles" target="_blank" className="socialIcon"><FaYelp size="32px"/></a>

            <a href="https://www.instagram.com/munkoreansteakhouse/" target="_blank" className="socialIcon"><FaInstagram size="32px"/></a>
        </>
    )
}