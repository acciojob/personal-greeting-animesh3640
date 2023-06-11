
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName]= useState(0);

  function updateValue(event){
    setName(event.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" onChange={updateValue} />
        <p>Hello {name}!</p>
    </div>
  )
}

export default App
