import "../style/Menu.css"

import lunch from "../assets/menu/lunch.pdf"
import dinner from "../assets/menu/dinner.pdf"
import alcohol from "../assets/menu/alcohol.pdf"
import bar from "../assets/menu/bar.pdf"

export default function Menu () {
  return (
    <section>
      <h1 className="menuTitle" id="munMenu">MENU</h1>
      <div className="container">
        <div className="grid-container">

          <div className="grid-item item2"><a href={lunch} target="_blank">LUNCH</a></div>
          <div className="grid-item item3"><a href={dinner}target="_blank">DINNER</a></div>
          <div className="grid-item item4"><a href={bar}target="_blank">BAR</a></div>
          <div className="grid-item item4"><a href={alcohol}target="_blank">ALCOHOL</a></div>
          <div className="grid-item item5"><a href="https://resy.com/cities/la/mun-korean?date=2023-01-02&seats=2" target="_blank">RESERVATION</a></div>
        </div>
      </div>
    </section>
  )
}