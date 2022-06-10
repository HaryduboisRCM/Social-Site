import React, {useState} from 'react';
import Counter from './Counter';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Likes() {
  const [counters, changeCounters] = useState([{id:0, count:0}]);
  const generateCounters = () =>{
    return counters.map((counter) => {
       return <Counter
                count={counter.count}
                increaseCounter = {()=> increaseCounter(counter.id, true)}
              />
    })
  }
  const increaseCounter = (id, increment) =>{
    const updated = counters.map((counter) => {
      if(counter.id === id){
        if(increment){
          return {id, count: counter.count+1}
        } else {
          return {id, count: 0}
        }
      }
      return counter;
      })
      changeCounters(updated)
    }
  return (
    <div className="App">
     {generateCounters()}    
    </div>
  );
}
export default Likes;