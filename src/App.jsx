import { useState } from "react";
import "./App.css";
import RouterManagement from "./router/RouterManagement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RouterManagement />
    </div>
  );
}

export default App;
