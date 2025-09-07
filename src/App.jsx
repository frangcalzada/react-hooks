import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  const addCounter = () => {
    const newCounter = { id: counters.length + 1, value: 0 };
    setCounters([...counters, newCounter]);
  };

  const increment = (id) => {
    setCounters((prev) =>
      prev.map((counter) =>
        counter.id === id
          ? { ...counter, value: counter.value + Number(step) }
          : counter
      )
    );
  };

  const decrement = (id) => {
    setCounters((prev) =>
      prev.map((counter) =>
        counter.id === id
          ? { ...counter, value: counter.value - Number(step) }
          : counter
      )
    );
  };

  const reset = (id) => {
    setCounters((prev) =>
      prev.map((counter) =>
        counter.id === id ? { ...counter, value: 0 } : counter
      )
    );
  };

  return (
    <div className="app-container">
      <button onClick={addCounter}>Add Counter</button>
      <ul>
        {counters.map((counter) => (
          <li key={counter.id}>
            Counter {counter.id}: {counter.value}
            <button onClick={() => increment(counter.id)}>Increment</button>
            <button onClick={() => decrement(counter.id)}>Decrement</button>
            <button onClick={() => reset(counter.id)}>Reset</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
