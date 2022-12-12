import './App.css';
import Check from './check';
import {useState} from "react";


function App() {
  const [passLen, setPassLen] = useState()

  function handlePass(e){
    console.log("e "+Number(e.target.value))
    setPassLen(e.target.value)
    console.log("t" +passLen)

  }

  function checkLength()
  {
    let y = passLen.length
    console.log(y)
  }
 
  return (
    <div className="App">
      <p>Password</p>
      <input value = {passLen} id="pwd" onChange ={handlePass}></input>
      <button disabled = {false} onClick = {checkLength}>submit</button>
      <p>{passLen}</p>
    </div>
    
    
  );
}

export default App;
