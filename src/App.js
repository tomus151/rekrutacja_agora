import React, { useState, useEffect, useMemo } from 'react';
import Timer from "./components/Timer";
import RestartButton from "./components/RestartButton";
import "./App.css";
let appInterval;
function App() {
  const [count, setCount] = useState(0);
  const intervalFc = () => {
    appInterval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  }
  useEffect(() => {
    intervalFc()
    return () => clearInterval(appInterval)
  }, [])
  const handleResetTimer = () => {
    clearInterval(appInterval);
    setCount(0)
    intervalFc();
  }
  const buttonComponent = useMemo(() => <RestartButton click={handleResetTimer} />, [])
  return (
    <div className="App">
      <Timer count={count} />
      {buttonComponent}
    </div>
  );
}

export default App;
