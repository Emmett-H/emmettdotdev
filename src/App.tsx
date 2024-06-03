import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/ui/header";
import LinkedInIcon from "./components/ui/linkedinIcon"; // Adjust the path as needed
import GitHubIcon from "./components/ui/githubIcon"; // Adjust the path as needed

function App() {
  const getInitialTheme = (): boolean => {
    const savedTheme = localStorage.getItem("color-theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return true;
  };

  const [showOverlay, setShowOverlay] = useState(true);
  const [animationState, setAnimationState] = useState("typing");
  const [contentAnimation, setContentAnimation] = useState("");
  const [currentTheme, setCurrentTheme] = useState<boolean>(getInitialTheme);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("color-theme", isDark ? "dark" : "light");
    setCurrentTheme(isDark);
  };

  useEffect(() => {
    const initialTheme = localStorage.getItem("color-theme") || "dark";
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setCurrentTheme(initialTheme === "dark");

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
      <main className="flex min-h-screen w-full flex-col items-center justify-between p-8">
        <div className="w-full max-w-3xl">
          <Header toggleTheme={toggleTheme} />
          <div className="flex flex-col justify-between py-10">
            <img
              className="h-20 w-20 rounded-full"
              src="/emmett.png"
              alt="Emmett profile picture"
            />
            <span className="mt-4 font-dm-sans text-xl">Emmett Harper</span>
            <span
              className={`font-dm-sans text-sm ${currentTheme ? "text-slate-300" : "text-slate-700"}`}
            >
              Lead Software Engineer
            </span>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://www.linkedin.com/in/emmett-h-38479410a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/Emmett-H"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
            <div className="my-8 w-full border-b"></div>
          </div>
          <p className="font-dm-sans font-light">
            Passionate about crafting excellent software and empowering
            engineering teams to excel.
          </p>
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
      </main>
    </>
  );
}

export default App;
