import { useState, useEffect } from "react";

function Check(props) {
  const {passLen, disChange} = props
  const [status, setStatus] = useState()

  useEffect(()=>{
    if(passLen.length === 0 ){
      setStatus("")
      disChange(true)
    }
    else if(passLen.length < 3){
      setStatus("Week Password")
      disChange(true)
    }
    else if(passLen.length > 2 && passLen.length <7){
      setStatus("Medium Password")
      disChange(false)
    }
    else if(passLen.length > 7){
      setStatus("Strong Password")
      disChange(false)
    }
},[passLen, disChange])

  // function checkLength(){
  //   if(passLen.length ===1){
  //     setStatus("length is 1")
  //   }
  // }
  return (
    <div className="App">
        {status}
    </div>
  );
}

export default Check;