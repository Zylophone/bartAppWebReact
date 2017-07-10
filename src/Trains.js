import React, { Component } from 'react';

export default class Trains extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut',
      trains:'dudes',
      name:null,
      times:null,

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    console.log('handle changes');
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }



  handleSubmit(event) {
    console.log('handle submit');
    var trainTimes = 'hey there yo';
    console.log('Your favorite flavor is: ' + this.state.value);
    console.log(this);
    event.preventDefault();
    var currentState = this.state;
    console.log(this.state.value);
    let endpoint = 'https://api.bart.gov/api/etd.aspx?cmd=etd&orig=' + this.state.value + '&key=MW9S-E7SL-26DU-VV8V&json=y'
    // var setState = function(){this.setState({trains:trainTimes})};
    fetch('endpoint')
      .then(function(response){
        console.log(response.ok);
        console.log('request started');
        if(response.ok){
          console.log('request made');
          return response.json();
        }
      })
      .then(function(parsedData) {
        trainTimes = parsedData.root.station[0]; 
        console.log(parsedData.root.station[0]);
        console.log('modify request');  
        console.log(trainTimes);
        updateTrainNow(trainTimes);
    })
      .catch(
        function(error){console.log(error)}
      );

    function updateTrainState(stationInfo){
      console.log('handle changes');
      let currentTimes = [];
      for(let i = 0; i < stationInfo.etd.length; i++){
        let tempTimes = [];
        tempTimes.push(stationInfo.etd[i]);
        for(let j = 0; j < stationInfo.etd[i].length; j++){
          tempTimes.push(stationInfo.etd[i][j]);
        }
        currentTimes.push(tempTimes);
      }
      this.setState({trains: stationInfo,
                      name: stationInfo.name,
                      times: currentTimes,
                    });
      console.log(this.state);
      console.log(this.state.times[0][0].destination);
      console.log(this.state.times[0][0].estimate[0].minutes);
    }
    var updateTrainNow = updateTrainState.bind(this);
  }

render(){
  var testing2 = 5;
   var xhrStation = new XMLHttpRequest();
                            xhrStation.open("GET", "http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V", false);
                            xhrStation.send();
  xhrStation = xhrStation.responseXML;
  const station = xhrStation.children[0].children[1].children;
  const stationArr = [];
  for(let i = 0; i < station.length; i++){
    stationArr.push(station[i]);
  }
  var testing = function(){
    const test = <li>hey</li>;
    const arr = [1,2,3,4];
    const element = <div><ul><li>1</li><li>1</li></ul></div>;
    return stationArr.map(function(element, index){
      return <option key = {index} value = {element.children[1].innerHTML} >{element.children[0].innerHTML}</option>;
    });
  };
    return( 
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Pick your station:
          <select value={this.state.value} onChange={this.handleChange}>
            {testing()}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h2>{this.state.trains.name}</h2>
      <h2>{this.state.trains.times}</h2>
      
     
     
     </div>
    );
}
 }
