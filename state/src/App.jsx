import { useState } from "react";
import Counter from "./counter";
function App() {
  const [fruit, setFruit] = useState("Apple");

  const handleFruit = () => {
    setFruit("Litchi");
  };

  return (
    <div>
      <h1>State in React JS</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change Name</button>
      <Counter />
    </div>
  );
}

export default App;
