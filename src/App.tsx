import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [animationState, setAnimationState] = useState('typing');

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("color-theme", isDark ? "dark" : "light");
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("color-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.classList.toggle("dark", currentTheme === "dark");

    if (!localStorage.getItem("animation-played")) {
      setTimeout(() => {
        setAnimationState('fadeOut');
        setTimeout(() => {
          setShowOverlay(false);
          localStorage.setItem("animation-played", "true");
        }, 1500);
      }, 4700);
    } else {
      setShowOverlay(false);
    }
  }, []);

  return (
    <>
      {showOverlay && (
        <div className="absolute inset-0 z-50 flex justify-center items-center bg-background" style={animationState === 'fadeOut' ? { animation: 'fadeOut 1.5s forwards' } : {}}>
          <div className={`text-3xl text-primary font-tektur ${animationState === 'typing' ? 'typing-demo' : ''}`}>
            emmett.dev
          </div>
        </div>
      )}
      <div className={`flex-col h-screen overflow-hidden flex justify-center items-center font-tektur ${showOverlay ? 'hidden' : ''}`}>
        <button className="text-primary font-dm-sans" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </>
  );
}

export default App;
