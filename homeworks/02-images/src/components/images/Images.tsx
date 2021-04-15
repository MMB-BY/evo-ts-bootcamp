import React from 'react';
import './images.css';

const imgSrc = Array.from({ length: 14}).map((el, index) => {return el = require(`../../testImages/${index + 1}.jpg`)});

export const ImagesScreen: React.FC = () => {
    return (
        <div className='ImagesContainer'>
            {
            imgSrc.map((img, index) => <div className="imgWrapper" key={index} ><img src={imgSrc[index].default} alt="i"/></div>)
           }
            {
            imgSrc.map((img, index) => <div className="imgWrapper" key={index} ><img src={imgSrc[index].default} alt="i"/></div>)
           }
        </div>
    )
}