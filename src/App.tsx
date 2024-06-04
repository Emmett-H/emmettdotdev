import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/ui/header";
import LinkedInIcon from "./components/ui/linkedinIcon";
import GitHubIcon from "./components/ui/githubIcon";
import OnTheBeachLogo from "./components/ui/onthebeachLogo";
import CinchLogo from "./components/ui/cinchLogo";
import ThalesLogo from "./components/ui/thalesLogo";

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
          <div className="flex flex-col justify-between pt-10 pb-5">
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
            engineering teams to do the same.
          </p>
          <h1 className="mb-4 mt-16 font-dm-sans text-lg font-bold">
            Experience
          </h1>
          <ol className="relative border-s border-gray-200">
            <li className="mb-5 ms-4">
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-500 "></div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-md font-medium">Engineering Lead</div>
                <div className="inline-block rounded-full border px-1 py-0 text-xs uppercase ">
                  current
                </div>
              </div>
              <a
                href="https://onthebeach.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 text-sm font-normal inline-flex"
              >
                On the Beach
                <span className="ml-2"><OnTheBeachLogo width={50} height={20} />
                </span>
              </a>
            </li>
            <li className="mb-5 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 "></div>
              <div className="text-md font-medium">Senior Software Engineer</div>
              <a
                href="https://cinch.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 text-sm font-normal inline-flex"
              >cinch <span className="ml-2 mt-0.5"><CinchLogo width={50} height={25} />
                </span></a>
            </li>
            <li className="mb-5 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 "></div>
              <div className="text-md font-medium">UI Engineer</div>
              <a
                href="https://thalesgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 text-sm font-normal inline-flex"
              >Thales <span className="ml-2 mt-0.5"><ThalesLogo width={50} height={13} />
                </span></a>
            </li>
            <li className="mb-0 ms-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 "></div>
              <div className="text-md font-medium">Graduate Software Engineer</div>
              <a
                href="https://thalesgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 text-sm font-normal inline-flex"
              >Thales <span className="ml-2 mt-0.5"><ThalesLogo width={50} height={13} />
                </span></a>
            </li>

          </ol>
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
