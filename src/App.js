

import React, { useState } from 'react'

import Botones from './componentes/botones'

function App() {
  const[result,setresult]= useState("")
  const clickHandle=(event)=>{
    if (event.target.value === "." && result.includes(".")){
      return;
}


 if (event.target.value === "+" && result.includes("+")){
      return;
    
    }

 if (event.target.value === "-" && result.includes("-")){
      return;
    
    }
 if (event.target.value === "*" && result.includes("*")){
      return;
}

 if (event.target.value === "/" && result.includes("/")){
      return;
}
if (event.target.value === "=" && result.includes("=")){
  return;
}

    setresult(result.concat(event.target.value))
  }
  const clearDisplay =() =>{
    setresult("")
  }
  const calculate =()=>{
    try {
      setresult(eval(result).toString())

     } catch {
          setresult ("0") 

     }
     return;
    
  }
  const borrar =() => {
    setresult(result.slice(0,-1))
  }

  
  return (
    <div>
      
      <Botones clickHandle={clickHandle} result={result} calculate={calculate} clearDisplay={clearDisplay} borrar={borrar}/>
      
      </div>
    
     
  
  )
}

export default App;
