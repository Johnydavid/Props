import React from "react";
import { useState } from "react";

const Comedy = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);

  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const hEle = document.createElement("h2");
    hEle.innerText = input;
    document.body.append(hEle)
    setInput("");


  };

  const handleClear = () =>{
setInput("")
  }
  return (
    <div>
      Comedy
      <div>
        <input type="text" onChange={handleChange}></input>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div>
       <button type= "submit" onClick = {handleClear}>Clear</button>
      </div>
      
    </div>
  );
};

export default Comedy;
