import React from "react";

function Slider() {
  return (
    <div
      id="myCarousel"
      className="carousel slide"
      data-ride="carousel"
      style={{ marginTop: "-20px" }}
    >
      {/* Indicators */}

      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to={0} className="active" />
        <li data-target="#myCarousel" data-slide-to={1} />
        <li data-target="#myCarousel" data-slide-to={2} />
      </ol>
      {/* Wrapper for slides */}
      <div className="carousel-inner">
        <div className="item active">
          <img src="2.jpg" alt="Los Angeles" style={{ width: "100%" }} />
        </div>
        <div className="item">
          <img src="3.jpg" alt="Chicago" style={{ width: "100%" }} />
        </div>
        <div className="item">
          <img src="2.jpg" alt="New york" style={{ width: "100%" }} />
        </div>
      </div>
      {/* Left and right controls */}
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="right carousel-control"
        href="#myCarousel"
        data-slide="next"
      >
        <span className="glyphicon glyphicon-chevron-right" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Slider;
