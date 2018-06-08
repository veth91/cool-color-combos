import React, { Component } from 'react';

export default function Paginator(props) {
  const { colors, currentPage, colorsPerPage } = props
  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(colors.length/colorsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
      let className='page'
      if(currentPage===number){
        className += ' active';
      }
      return (
        <li
          className = {className}
          key={number}
          id={number}
          onClick={props.changePage}
          >
          {number}
        </li>
      );
    })
  return (
    <div>
      <ul id="page-numbers">
        {renderPageNumbers}
      </ul>
    </div>
  )
}
