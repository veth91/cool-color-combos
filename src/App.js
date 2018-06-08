import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Viewarea from './components/Viewarea';


const SELECTIONS = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
  "Brown",
  "Gray"
]
const colorsArr = [
  "#0CA7EE",
  "#0C36EE",
  "#530CEE",
  "#C40CEE",
  "#EE0CA7",
  "#EE0C36",
  "#2BEE0C",
  "#95132c",
  "#cf75ab",
  "#d31723"
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedColor: null,
      pageNum: 1,
      currentPage: 1,
      colorsPerPage: 8,
      colors: colorsArr,
      selections: SELECTIONS
    }

    this.changePage = this.changePage.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changePage(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  changeColor(color) {
    this.setState({
      selectedColor: color
    });
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="App-view">
          <Sidebar changeColor={this.changeColor} colors={this.state.selections}/>
          <Viewarea
            {...this.state}
            changeColor={this.changeColor}
            changePage={this.changePage}
          />
        </div>
      </div>
    );
  }
}

export default App;
