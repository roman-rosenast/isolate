import React, { Component } from 'react';
import './App.css';

class Intro2 extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div className="intro2" >

            <div className="day1"
                 onClick={ () => {this.props.bAndB()} }>
              <p className="centeredText">Back and Bicep</p></div>
            <div className="day2"
                 onClick={ () => {this.props.cAndT()} }>
              <p className="centeredText">Chest and Tricep</p></div>
            <div className="day3"
                 onClick={ () => {this.props.sAndC()} }>
              <p className="centeredText">Shoulders and Core</p></div>

        </div>
    )
  }
}

export default Intro2;
