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
      timeOut:null,
      loading:false,
      currentStation: null,
      stationName: null,
      allStations:['hey there'],
    };
    this.testingThis = this.testingThis.bind(this);
    this.updateState = this.updateState.bind(this);
  }


componentDidMount() {
  console.log('component Did mount');
  const url = 'http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y';
  this.setState({loading: true})
  fetch(url)
    .then(response => response.json())
    .then( (json) => json.root)
    .then(allStations => {
        this.setState({loading: false, currentStation:'none', allStations:allStations.stations.station});
        // console.log(this.state);
    }
  )
}

componentWillMount(){
  console.log('component will mount');
}
componentWillUpdate(){
  console.log('component will update');
  
  
}
componentDidUpdate(){
  console.log('component did update');
}
testingThis(station){
  console.log(station);
  console.log('starting call back');
  this.setState({currentStation:station});
  // make API request for station
  let url = 'https://api.bart.gov/api/etd.aspx?cmd=etd&orig=' + station + '&key=MW9S-E7SL-26DU-VV8V&json=y';
  fetch(url)
  .then(response => response.json())
  .then( (json) => json.root)
  .then(allTrains => {
      this.setState({trainTimes:allTrains.station[0].etd.map((e,i)=> [e.destination, e.estimate[0] ? e.estimate[0].minutes + ' min' : 'nothing', e.estimate[1] ? e.estimate[1].minutes + ' min' : 'nothing', e.estimate[2] ? e.estimate[2].minutes + ' min' : 'nothing']), stationName:allTrains.station[0].name});
  });
  console.log('calling call back');
    setTimeout(()=>{
        console.log('call back on timer');
        this.testingThis(this.state.currentStation
      )}, 10000)
}


  updateState(station){
  }
  

  render() {
    console.log('render');
    let stationName = 'yo';
    return (
      <div className="App" style={styles}>
        <Dropdown stations = {this.state.allStations} onChange={(station)=> this.testingThis(station)}/>
        <h3>{this.state.loading ? 'loading' : 'loaded'}</h3>
        <Body style={styles} stationName = {this.state.stationName} trains = {this.state.trainTimes}/>
      </div>
    );
  }
}

const styles = {



}

export default App;
