import React, { Component } from 'react';
import Swatchview from './Swatchview';
import Swatchtable from './Swatchtable'
import Paginator from './Paginator';


export default function Viewarea(props) {
  //receives colors, selectedColor, changeColor
  return (
    <div className='App-viewarea'>
      {
        props.selectedColor ?
        <Swatchview color={props.selectedColor} changeColor={props.changeColor}/>
        :
        <div className="Swatch-list-view">
          <Swatchtable
            changeColor={props.changeColor}
            {...props}
          />
          <Paginator
            changePage={props.changePage}
            {...props}
          />
        </div>
      }
    </div>
  );
}
