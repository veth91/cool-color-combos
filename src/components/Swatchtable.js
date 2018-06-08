import React, { Component } from 'react';

export default function SwatchTable(props) {
  const { colors, currentPage, colorsPerPage } = props
  const indexOfLastSwatch = currentPage * colorsPerPage;
  const indexOfFirstSwatch = indexOfLastSwatch - colorsPerPage;
  const currentColors = colors.slice(indexOfFirstSwatch,indexOfLastSwatch)
  return (
    <div className='Swatch-window'>
      {currentColors.map(color =>
        <div className='Swatch-tile' key={color} onClick={()=> props.changeColor(color)}>
          <div className='Swatch' style={{backgroundColor: color}}>
          </div>
          <h1>{color}</h1>
        </div>
      )}
    </div>
  );
}
