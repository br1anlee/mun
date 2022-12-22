import "../style/Gallery.css"

import pic1 from "../assets/images/galleryImage/alcohol.JPG"
import pic2 from "../assets/images/galleryImage/cocktail.JPG"
import pic3 from "../assets/images/galleryImage/food.JPG"
import pic4 from "../assets/images/galleryImage/jun.JPG"
import pic5 from "../assets/images/galleryImage/meat.JPG"
import pic6 from "../assets/images/galleryImage/meat2.JPG"
import pic7 from "../assets/images/galleryImage/noodle.JPG"
import pic8 from "../assets/images/galleryImage/rice.JPG"
import pic9 from "../assets/images/galleryImage/stew.JPG"
import pic10 from "../assets/images/galleryImage/stew2.JPG"
import pic11 from "../assets/images/galleryImage/wine.JPG"

export default function Gallery () {
    return (
        <>
            <h1 className="gallery-title" id="gallery">GALLERY</h1>

            <div className="gallery-box">

                <div className="gallery-container w-2 h-2">
                    <div className="gallery-item">
                        <div className="image">
                            <img src="https://source.unsplash.com/1600x900?kbbq" alt="nature" />
                        </div>
                     </div>
                </div>

                <div className="gallery-container w-2 h-1">
                    <div className="gallery-item">
                        <div className="image">
                            <img src="https://source.unsplash.com/1600x900?people" alt="people" />
                        </div>
                    </div>
                </div>

                <div className="gallery-container w-2">
                    <div className="gallery-item">
                        <div className="image">
                            <img src="https://source.unsplash.com/1600x900?sports" alt="sports" />
                        </div>
                     </div>
                 </div>

                <div className="gallery-container h-2">
                    <div className="gallery-item">
                        <div className="image">
                            <img src="https://source.unsplash.com/1600x900?food" alt="food" />
                        </div>
                    </div>
                </div>

                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img src="https://source.unsplash.com/1600x900?travel" alt="travel" />
                        </div>
                    </div>
                </div>

                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img src="https://source.unsplash.com/1600x900?car" alt="car" />
                        </div>
                    </div>
                 </div>

                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img src="https://source.unsplash.com/1600x900?street" alt="street" />
                        </div>
                    </div>
                </div>

                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img src="https://source.unsplash.com/1600x900?fitness" alt="fitness"/>
                        </div>
                    </div>
                </div>

                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img src="https://source.unsplash.com/1600x900?game" alt="game" />
                        </div>
                    </div>
                </div>

                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img src="https://source.unsplash.com/1600x900?art" alt="art" />
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}