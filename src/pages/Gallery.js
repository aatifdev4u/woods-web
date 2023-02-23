import React from 'react';
import { YoutubeEmbed } from './../component/YoutubeEmbed';

/**
* @author
* @function 
**/

export const Gallery = (props) => {
  return(
    <div className="gallery-wrapper">
      <h2 className='title'>Gallery</h2>
      <div className='gallery-wrapper-list'>
        <div className='gallery-wrapper-list-item'>
          <img src="./../images/building.jpg" />
        </div>
        <div className='gallery-wrapper-list-item'>
          <img src="./../images/building.jpg" />
        </div>
        <div className='gallery-wrapper-list-item'>
          <img src="./../images/building.jpg" />
        </div>
        <div className='gallery-wrapper-list-item'>
          <img src="./../images/building.jpg" />
        </div>
        <div className='gallery-wrapper-list-item'>
          <img src="./../images/building.jpg" />
        </div>
        <div className='gallery-wrapper-list-item'>
          <img src="./../images/building.jpg" />
        </div>
        <div className='gallery-wrapper-list-item'>
          <img src="./../images/building.jpg" />
        </div>
        <div className='gallery-wrapper-list-item'>
          <img src="./../images/building.jpg" />
        </div>
      </div>
      <br/>
      <h2 className="title">Videos</h2>
      <div className='gallery-wrapper-video-list'>
        <div className='gallery-wrapper-video-list-item'>
          <YoutubeEmbed embedId="G5l4F4h3Lxw" />
          <div className="content">Seminar</div>
        </div>
        <div className='gallery-wrapper-video-list-item'>
          <YoutubeEmbed embedId="3ZmBnxJWaFc" />
          <div className="content">Republic Day Celebration</div>
        </div>
        <div className='gallery-wrapper-video-list-item'>
          <YoutubeEmbed embedId="0pd91kwTPjk" />
          <div className="content">Children Day Celebration</div>
        </div>
        <div className='gallery-wrapper-video-list-item'>
          <YoutubeEmbed embedId="7z0HzeRRt0w" />
          <div className="content">Kindergarten Section</div>
        </div>
      </div>
    </div>
   )

 }