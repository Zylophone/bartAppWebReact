import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Dropdown from './Dropdown.js';
import Body from './Body.js';
import Stations from './Stations.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'this is my app',
      trainTimes: [null],
      trainSelected:false,
      timeOut:setTimeout(()=>{
        console.log('call back on timer');
        this.testingThis(this.state.currentStation
      )}, 10000),
      loading:false,
      currentStation: null,
      stationName: null,
      allStations:['hey there'],
    };
    this.testingThis = this.testingThis.bind(this);
    this.updateState = this.updateState.bind(this);
  }


componentDidMount() {
  const url = 'http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y';
  this.setState({loading: true})
  fetch(url)
    .then(response => response.json())
    .then( (json) => json.root)
    .then(allStations => {
      console.log(allStations.stations.station);
        console.log(allStations.stations.station[0].abbr);
        this.setState({loading: false, currentStation:'none', allStations:allStations.stations.station});
        console.log(this.state);
    }
  )
}
  testingThis(station){
    console.log(this.state.timeOut === null);
    // if(this.state.timeOut === null){
    //   
    // } else {
      // clearTimeout(this.state.timeOut);
    // }
    
    console.log(station);
    // console.log(this.state.currentStation);
    
    this.setState({currentStation:station});
    
    console.log(station);
    console.log(this.state.currentStation);
    // make API request for station
    let url = 'https://api.bart.gov/api/etd.aspx?cmd=etd&orig=' + station + '&key=MW9S-E7SL-26DU-VV8V&json=y';
    fetch(url)
    .then(response => response.json())
    .then( (json) => json.root)
    .then(allTrains => {
        this.setState({trainTimes:allTrains.station[0].etd.map((e,i)=> [e.destination + ' - ', e.estimate[0] ? e.estimate[0].minutes + ' min' : 'nothing', e.estimate[1] ? e.estimate[1].minutes + ' min' : 'nothing', e.estimate[2] ? e.estimate[2].minutes + ' min' : 'nothing']), stationName:allTrains.station[0].name});
    });
    console.log(this.state);
    debugger;
      this.state.timeOut;
      // if(this.state.currentStation === station || this.state.currentStation === 'none' || isNew){
      //         setTimeout(()=>this.testingThis(station, false), 10000);
      //         console.log('just called' + station);
      // }

    
}

  updateState(){
  }
  

  render() {
    let stationName = 'yo';
    return (
      <div className="App">
        <Header />
        <Dropdown stations = {this.state.allStations} id={(station)=>this.testingThis()} onChange={(station)=> this.testingThis(station)}/>
        <h3>{this.state.loading ? 'loading' : 'loaded'}</h3>
        <Body stationName = {this.state.stationName} trains = {this.state.trainTimes}/>
      </div>
    );
  }
}

export default App;
