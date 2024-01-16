import { MouseEventHandler } from "react";
import "./App.css";

function App() {
  const toggleTheme: MouseEventHandler<HTMLButtonElement> = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">emmett.dev</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}

export default App;
