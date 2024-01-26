import { MouseEventHandler } from "react";
import "./App.css";

function App() {
  const toggleTheme: MouseEventHandler<HTMLButtonElement> = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
  };

  return (
    <>
      <h1 className="text-3xl text-primary font-tektur">emmett.dev</h1>
      <button className="text-primary font-dm-sans" onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}

export default App;
