import { useState } from "react";

const Calc = () => {
  const add = (e) => {
    e.preventDefault();

    document.getElementById("output").innerText =
      Number(document.getElementById("firstNumber").value) +
      Number(document.getElementById("secondNumber").value);
  };
  const sub = (e) => {
    e.preventDefault();

    document.getElementById("output").innerText =
      Number(document.getElementById("firstNumber").value) -
      Number(document.getElementById("secondNumber").value);
  };

  const mul = (e) => {
    e.preventDefault();

    document.getElementById("output").innerText =
      Number(document.getElementById("firstNumber").value) *
      Number(document.getElementById("secondNumber").value);
  };

  // const[input1, clearInput1] = useState("")
  // const[input2, clearInput2] = useState("")
  const Clear = () => {
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    document.getElementById("output").innerText = "";
  };
  return (
    <div>
      Calc
      {/* <form onSubmit={add}> */}
      <div>
        <label> Enter Number 1 </label>
        <input type="text" id="firstNumber"></input>
      </div>
      <div>
        <label> Enter Number 2</label>
        <input type="text" id="secondNumber"></input>
      </div>
      <div>
        <button onClick={add}> + </button>
        <button onClick={sub}> - </button>
        <button onClick = {mul}> * </button>
        <button> / </button>
        <button onClick={Clear}> Clear </button>
      </div>
      <div>
        <label> Output =  </label>
        <label id="output"></label>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Calc;
