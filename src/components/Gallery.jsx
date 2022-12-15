import "../style/Gallery.css"



export default function Gallery () {
    return (
        <>
            <h1 className="gallery-title" id="gallery">Gallery</h1>
            <div className="gridContainer">
                <img src="https://place-puppy.com/300x300" alt="" className="gridItem1 gridPic"/>
                <img src="https://place-puppy.com/300x300" alt="" className="gridItem2 gridPic"/>
                <img src="https://place-puppy.com/300x300" alt="" className="gridItem3 gridPic"/>
                <img src="https://place-puppy.com/300x300" alt="" className="gridItem4 gridPic"/>
                <img src="https://place-puppy.com/300x300" alt="" className="gridItem5 gridPic"/>
                <img src="https://place-puppy.com/300x300" alt="" className="gridItem6 gridPic"/>
                <img src="https://place-puppy.com/300x300" alt="" className="gridItem7 gridPic"/>
                <img src="https://place-puppy.com/300x300" alt="" className="gridItem8 gridPic"/>
                <img src="https://place-puppy.com/300x300" alt="" className="gridItem9 gridPic"/>
            </div>
        </>

    )
}