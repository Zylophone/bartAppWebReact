import React, { Component } from 'react';
import Trains from './Trains.js';

export default class Dropdown extends Component {
    // use event.target.value for value of onChange
    render(){
            console.log('dropdown render');
        return (
            <div >
                <select onChange={(event) => this.props.onChange(event.target.value)}>
                    {this.props.stations.map((e,i) => (<option key={i} value={e.abbr}>{e.name}</option>))}
                </select>
            </div>
        );
    }
}
