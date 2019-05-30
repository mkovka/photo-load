import React from "react";
import "./index.scss";


export default class Album extends React.Component {

  render() {
    const { albumId, data } = this.props;
    const thumbnailUrl = data ? data[0].thumbnailUrl : "";
    return (
      <div className="album-container">
        <p>{`Album ${albumId}`}</p>
        <img src={thumbnailUrl} />
      </div>
    );
  }
}
