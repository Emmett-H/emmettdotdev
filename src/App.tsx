import { MouseEventHandler, useEffect } from "react";
import "./App.css";

function App() {
  const toggleTheme: MouseEventHandler<HTMLButtonElement> = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("color-theme", isDark ? "dark" : "light");
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("color-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className=" flex-col h-screen overflow-hidden flex justify-center items-center font-tektur">
      <div className="typing-demo text-3xl text-primary font-tektur">
        emmett.dev
      </div>
      <button className="text-primary font-dm-sans" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
