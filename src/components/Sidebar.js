import React from 'react';

export default function Sidebar(props) {
  function genRandomColor() {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }
  return (
    <div className='App-sidebar'>
      <button onClick={() => props.changeColor(genRandomColor())}>Random Color</button>
      <ul>
        {props.colors.map(color =>
          <li key={color}><a href='#'>{color}</a></li>
        )}
      </ul>
    </div>
  );
}
