import React from "react";
import { NavLink as RouterLink } from 'react-router-dom';
import './photos.scss';

export default class Photos extends React.Component {
  renderPhotos = () => {
    const { data } = this.props;
    const photos = data.map((item, i) => (
      // i
      <RouterLink to={`/albums/${item.albumId}/photos/${i}`} key={i}>
      <div className="photo-item">
        <img src={item.url} />
        <p>{item.title}</p>
      </div>
      </RouterLink>
    ));
    return photos;
  };

  render() {
    return <div className="photo-container">{this.renderPhotos()}</div>;
  }
}
