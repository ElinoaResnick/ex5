import './App.css';
import Check from './check';
import {useState} from "react";


function App() {
  const [passLen, setPassLen] = useState("")
  const [btnDis, setBtnDis] = useState(true)

  function handlePass(e){
    // console.log("e "+Number(e.target.value))
    setPassLen(e.target.value)
    // console.log("t" +passLen)

  }

  function disChange(tof){
    // console.log(tof)
    setBtnDis(tof)

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
      <button disabled = {btnDis} onClick = {checkLength} >submit</button><br/><br/>
      {/* <p>{passLen}</p> */}
      <Check passLen={passLen} disChange={disChange}/>
    </div>
    
    
  );
}

export default App;
