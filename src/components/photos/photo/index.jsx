import React from "react";
import "./index.scss";

const PhotoItem = (props) =>  (
    <div className="photo-item">
      <p>{props.photo.title}</p>
      <img src={props.photo.url} />
    </div>
)

export default PhotoItem;