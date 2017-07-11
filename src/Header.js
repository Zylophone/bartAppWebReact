import React, { Component } from 'react';
import './header.css';
import Dropdown from './Dropdown.js';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="App-header">
          <h2><span>ride</span><span style={styles.bart}>bart</span></h2>
        </div>
        <div className="App-name-2">
            <h2>{this.props.station}</h2>
        </div>
      </div>
    );
  }
}


const styles = {
    bart:{
        color:'#ADD8E6',
    },   
    title:{
        
    },
}

export default Header;