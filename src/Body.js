import React from 'react';
const Body = (props) => {
  let currentTrain = null;

  if(props.trains[0]){
    for(let key in props.trains){
      console.log(props.trains[key][1]);
      if(props.trains[key][1] === '1 min' || props.trains[key][1] === 'Leaving min'){
        currentTrain = props.trains[key][0];
        console.log('train coming');
      } 
    }
    return (
      <div className="body default-text">
        <div className="App-body">
          <h1 className="trainArriving">{currentTrain === null ? '' : currentTrain.toUpperCase()}</h1>
          {/*<h2>{props.stationName}</h2>*/}
         <ul>{currentTrain !== null ? 'nothing' : props.trains.map((e,i)=><li key={i}><h3>{e[0]}</h3><p>{e[1]}, {e[2]}, {e[3]}</p></li>)}
         </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
    
}
export default Body;