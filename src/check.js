import { useState, useEffect } from "react";




function Check(props) {
  const {passLen} = props
  const[status, setStatus] = useState()

  useEffect(()=>{
    if(passLen.length < 3){
      setStatus("Week Password")
    }
    else if(passLen.length > 2 && passLen.length <7){
      setStatus("Medium Password")
    }
    else if(passLen.length > 7){
      setStatus("Strong Password")
    }
},[passLen])

  function checkLength(){
    if(passLen.length ===1){
      setStatus("length is 1")
    }
  }
  return (
    <div className="App">
        {/* check comp<br/> */}
        {/* {passLen} */}
        {status}



    </div>
  );
}

export default Check;