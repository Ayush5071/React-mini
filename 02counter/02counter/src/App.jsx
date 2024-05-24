import './App.css'
import { useState } from 'react';
//delkho ham log variable update krwa sakte hai pr ye variable kbhi UI pe udate nhi hoga phle jao queryselector,ya use dom se select kro ,fir uska
//inner html change kro .....ye sb headache krna padega updationke liye ..,react UI Updation ko aasan bna deta hai


function App() {
  let minValue = 0;
  let [counter,setcounter] = useState(15)
  const Addvalue = ()=>{
   //counter += 1;
   setcounter(counter+1);
  }
  const Removevalue = ()=>{
    counter -=1;
    if (minValue<counter){
      setcounter(counter);
    }
    else{
       setcounter(0);
       console.log("value cant go below" ,{minValue})
    }
  }

  return (
    <>
    <h1>chai or react</h1>
    <h2>counter value : {counter}</h2>
    <button
    onClick={Addvalue}>Add value</button>
    <br />
    <h1>             </h1>
    <button
    onClick={Removevalue}>decrease value</button>
    </>
  )
}

export default App
