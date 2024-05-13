import React, { useState } from "react";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";
import "./carousel.scss";

function Carousel(props) {
  const { data } = props;
  const [index, setIndex] = useState(0);
  const increment = () => {
    let newIndex = index + 1;
    if (newIndex === data.pictures.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };
  const decrement = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      setIndex(data.pictures.length - 1);
    } else {
      setIndex(newIndex);
    }
  };
  return data.pictures.length === 1 ? (
    <div className="carousel">
      <img
        src={data.pictures[index]}
        alt="location"
        className="carousel--img"
      />
    </div>
  ) : (
    <div className="carousel">
      <img
        src={arrowLeft}
        alt="fleche gauche"
        className="arrow arrow-left"
        onClick={decrement}
      />
      <img
        src={arrowRight}
        alt="fleche gauche"
        className="arrow arrow-right"
        onClick={increment}
      />
      <img
        src={data.pictures[index]}
        alt="location"
        className="carousel--img"
      />
      <p className="carousel--counter">
        {index + 1}/{data.pictures.length}
      </p>
    </div>
  );
}

export default Carousel;
