import React from 'react';
import Album from '../album';
import './index.scss';
import { NavLink as RouterLink } from 'react-router-dom';

export default class Base extends React.Component {
          render() {
                    const { albums } = this.props;
                    return ( <div className="base-container">
                              {
                                        albums.map((item, i) => {
                                                  console.log(item);
                                                  return (
                                        <RouterLink to={`/albums/${item.albumId}`} key={i}>
                                        <Album albumId={item.albumId} {...item}/>
                                        </RouterLink>)
                                        }
                                        )
                              }
                             </div>
                    )
          }
}