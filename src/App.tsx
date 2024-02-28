import { MouseEventHandler, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showAnimation, setShowAnimation] = useState(false);

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

    const animationPlayed = localStorage.getItem("animation-played");
    if (!animationPlayed) {
      setShowAnimation(true);
      localStorage.setItem("animation-played", "true");
    }
  }, []);

  return (
    <div className=" flex-col h-screen overflow-hidden flex justify-center items-center font-tektur">
      <div className={`text-3xl text-primary font-tektur ${showAnimation ? "typing-demo" : ""}`}>
        emmett.dev
      </div>
      <button className="text-primary font-dm-sans" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
