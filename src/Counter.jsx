import { useState } from "react";

const Counter = () => {
  const useCounting = () => {
    const [counting, setCounting] = useState(0);
    return {
      counting,
      incree: () => setCounting(counting + 1),
      decree: () => setCounting(counting - 1),
    };
  };

  const { counting, incree, decree } = useCounting();

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const [count, setCount] = useState(0);

  const handleClick = (type = "") => {
    if (type === "minus") {
      setCount(count - 1);
    } else if (type === "plus") {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div style={{ marginTop: 50, marginLeft: 150 }}>
      <button onClick={increment}>increment </button>
      <span style={{ marginLeft: 20 }}>{counter}</span>

      <button
        onClick={decrement}
        disabled={!counter}
        style={{ marginLeft: 20 }}
      >
        Decrement{" "}
      </button>

      <div>{"======================================"}</div>

      <div style={{ marginTop: 50 }}>
        <button onClick={() => handleClick("minus")} disabled={!count}>
          Minus (-)
        </button>
        <span style={{ marginLeft: 20 }}>{count}</span>
        <button style={{ marginLeft: 20 }} onClick={() => handleClick("plus")}>
          Plus (+)
        </button>

        <badge style = {{backgroundColor: 'black', color:'yellow', marginLeft: 20, borderRadius: '10px', overflow: 'hidden',  padding: '0.5rem' }}>{count} </badge>
        <button style={{ marginLeft: 20 }} onClick={handleClick}>
            
          {" "}
          Reset{" "}
        </button>
      </div>

      {"======================================"}

      <div style={{ marginTop: 50 }}>
        <button onClick={decree} disabled={!counting}>
          Minus (-)
        </button>
        <h2>{counting}</h2>
        <button onClick={incree}>Plus (+)</button>
      </div>
    </div>
  );
};
export default Counter;
