import React from "react";
import ImageCard from "./ImageCard";

import "./ImageList.css";

const ImageList = (props) => {
  return (
    <div className="image-list">
      {props.images.map((imgUrl) => (
        <ImageCard imgUrl={imgUrl} alt="dog" key={imgUrl} />
      ))}
    </div>
  );
};

export default ImageList;
