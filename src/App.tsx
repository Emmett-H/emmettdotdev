import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/ui/header";

function App() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [animationState, setAnimationState] = useState("typing");
  const [contentAnimation, setContentAnimation] = useState("");

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("color-theme", isDark ? "dark" : "light");
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("color-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    if (!localStorage.getItem("animation-played")) {
      setTimeout(() => {
        setAnimationState("fadeOut");
        setTimeout(() => {
          setShowOverlay(false);
          setContentAnimation("fade-in");
          localStorage.setItem("animation-played", "true");
        }, 1500);
      }, 4700);
    } else {
      setShowOverlay(false);
      setContentAnimation("fade-in");
    }
  }, []);

  return (
    <>
      {showOverlay && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center bg-background"
          style={
            animationState === "fadeOut"
              ? { animation: "fadeOut 1.5s forwards" }
              : {}
          }
        >
          <div className={`typing-demo font-tektur text-3xl text-primary`}>
            emmett.dev
          </div>
        </div>
      )}
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="fixed left-0 right-0 top-0 z-10">
          <Header toggleTheme={toggleTheme} />
        </div>
        <div
          className={`flex flex-grow items-center justify-center font-tektur ${showOverlay ? "hidden" : ""
            } ${contentAnimation}`}
          style={
            contentAnimation === "fade-in"
              ? { animation: "fadeIn 1.5s forwards" }
              : {}
          }
        ></div>
      </div>
    </>
  );
}

export default App;