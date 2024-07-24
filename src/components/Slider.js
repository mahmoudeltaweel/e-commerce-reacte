import './slider.css'
export default function Slider(){
    return(
      <div>
            <div id="carouselExample" className="carousel slide">
  <div classNameName="carousel-inner">
    <div className="carousel-item active">
    <img src={require("./images/image-1.jpeg")} className="d-block w-100 height-300" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={require("./images/image-2.webp")} className="d-block w-100 height-300" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={require("./images/image-3.avif")} className="d-block w-100 height-300" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}