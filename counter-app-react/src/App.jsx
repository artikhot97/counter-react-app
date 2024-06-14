import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick(operation) {
    if (operation === "increment") {
      setCounter(counter + 1);
    } else if (operation === "decrement") {
      setCounter(counter - 1);
    } else {
      console.log(counter);
      setCounter(0);
    }
  }

  let warringMessage;
  if (counter < 0) {
    warringMessage = "Counter value should not be less than 1.";
  } else if (counter > 10) {
    warringMessage = "Counter value should not be greater than 10.!";
  }

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Counter
        counterValue={counter}
        onOperation={handleClick}
        warringMessage={warringMessage}
      />
    </div>
  );
}

export default App;
