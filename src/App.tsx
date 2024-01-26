import { MouseEventHandler } from "react";
import "./App.css";

function App() {
  const toggleTheme: MouseEventHandler<HTMLButtonElement> = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline text-primary">emmett.dev</h1>
      <button className="text-primary" onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}

export default App;
