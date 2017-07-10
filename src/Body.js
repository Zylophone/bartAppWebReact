import React from 'react';
const Body = (props) => {
  let currentTrain = null;

  if(props.trains[0]){
    for(let key in props.trains){
      console.log(props.trains[key][1]);
      if(props.trains[key][1] === '1 min' || props.trains[key][1] === 'Leaving'){
        currentTrain = 'train arriving';
        console.log('train coming');
      }
    }
    return (
      <div className="body">
        <div className="App-body">
          <h1>{currentTrain === null ? 'none' : currentTrain}</h1>
          <h2>{props.stationName}</h2>
         <ul>{props.trains.map((e,i)=><li key={i}><h3>{e[0]}</h3><p>{e[1]}, {e[2]}, {e[3]}</p></li>)}</ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
    
}
export default Body;