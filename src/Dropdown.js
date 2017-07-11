import React, { Component } from 'react';
import Trains from './Trains.js';

export default class Dropdown extends Component {
    // use event.target.value for value of onChange
    render(){
            console.log('dropdown render');
        return (
            <div className='dropdown'>
                <div className='page-title'>
                <h2><span>ride</span><span style={styles.bart}>bart</span></h2>
                </div>
                <select style={styles.dropdown} onChange={(event) => this.props.onChange(event.target.value)}>
                    {this.props.stations.map((e,i) => (<option key={i} value={e.abbr}>{e.name}</option>))}
                </select>
            </div>
        );
    }
}
const styles = {
    dropdown:{
        height:'70',
        width:'400',
        textIndent:'50',
        borderWidth:2,
        backgroundColor:'#222',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    },
    bart:{
        color:'#ADD8E6',
    },
}
