import React from 'react';

export default function Swatchview(props) {
  let carouselColors = []
  let i = -80
  while(i <= 80) {
    carouselColors.push(LightenDarkenColor(props.color,i));
    i += 40;
  }

  return (
    <div className='App-item-view'>
      <div className='Swatch-tile-large'>
        <div className='Swatch-large' style={{backgroundColor: props.color}}>
        </div>
        <h1>{props.color}</h1>
      </div>
      <div className='Color-carousel'>
        {carouselColors.map(color =>
          <div key={color} className='Swatch-tile'>
          <div className='Swatch small' style={{backgroundColor: color}}>
          </div>
          <h2>{color}</h2>
        </div>
        )}
      </div>
      <button onClick={()=> props.changeColor(null)}>Clear</button>
    </div>
  )
}

function LightenDarkenColor(col, amt) {
    var usePound = false;
    if (col[0] === "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col,16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
    var g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound?"#":"") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
}
