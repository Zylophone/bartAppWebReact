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
          <div className="arrivingWrapper">
          <h1 className="trainArriving">{currentTrain === null ? '' : currentTrain.toUpperCase()}</h1>
          </div>{currentTrain === null ? <ul className="train-times">{ props.trains.map((e,i)=><li key={i}><h3>{e[0]}</h3><p>{e[1]}, {e[2]}, {e[3]}</p></li>)}{ props.trains.map((e,i)=><li key={i}><h3>{e[0]}</h3><p>{e[1]}, {e[2]}, {e[3]}</p></li>)}
            </ul> : <ul className="train-times2"><p>{props.trains.map((e,i)=> e[0] + ' ' + e[1] + ' ' + e[2]  + ' ' + e[3] + ' ') }</p>
            </ul> 
          }
        </div>
      </div>
    );
  } else {
    return null;
  }
    
}
export default Body;