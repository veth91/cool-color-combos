import React, { Component } from 'react';
import logo from '../logo-symbol.svg';


export default function Header(props) {
  return (
    <header className='App-header'>
     <div className='wrapper'>
       <img src={logo} className="Logo" alt="logo" />
     </div>
     <div>
       <input type='text' placeholder="Search" />
     </div>
    </header>
  );
}
