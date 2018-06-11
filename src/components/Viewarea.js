import React from 'react';
import Swatchview from './Swatchview';
import Swatchtable from './Swatchtable'
import Paginator from './Paginator';


export default function Viewarea(props) {
  return (
    <div className='App-viewarea'>
      {
        props.selectedColor ?
        //displays the detail view
        <Swatchview color={props.selectedColor} changeColor={props.changeColor}/>
        :
        //displays the list view
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
