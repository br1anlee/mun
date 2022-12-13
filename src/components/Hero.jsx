import "../style/Hero.css"
import MunVid from "../assets/vid/vid.mp4"

export default function Hero () {
    return (
        <container>
            <h1 className="title">MUN KOREAN STEAKHOUSE</h1>
            <video autoPlay loop muted className="mun-vid">
                <source src={MunVid} type="video/mp4" />
            </video>
        </container>

    )
}
