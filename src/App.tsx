import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/ui/header';
import LinkedInIcon from './components/ui/logos/linkedinIcon';
import GitHubIcon from './components/ui/logos/githubIcon';
import ExperienceSection from './components/ui/experienceSection';
import { TypeAnimation } from 'react-type-animation';
import ProjectsSection from './components/ui/projectsSection';

function App() {
  const getInitialTheme = (): boolean => {
    const savedTheme = localStorage.getItem('color-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true;
  };

  const [showOverlay, setShowOverlay] = useState(true);
  const [animationState, setAnimationState] = useState('typing');
  const [contentAnimation, setContentAnimation] = useState('');
  const [currentTheme, setCurrentTheme] = useState<boolean>(getInitialTheme);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
    setCurrentTheme(isDark);
  };

  useEffect(() => {
    const initialTheme = localStorage.getItem('color-theme') || 'dark';
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    setCurrentTheme(initialTheme === 'dark');

    if (!localStorage.getItem('animation-played')) {
      setTimeout(() => {
        setAnimationState('fadeOut');
        setTimeout(() => {
          setShowOverlay(false);
          setContentAnimation('fade-in');
          localStorage.setItem('animation-played', 'true');
        }, 1500);
      }, 4700);
    } else {
      setShowOverlay(false);
      setContentAnimation('fade-in');
    }
  }, []);

  return (
    <>
      {showOverlay && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center bg-background"
          style={
            animationState === 'fadeOut'
              ? { animation: 'fadeOut 1.5s forwards' }
              : {}
          }
        >
          <TypeAnimation
            sequence={[
              1900,
              'emmett.dev',
              2000,
            ]}
            speed={{ type: 'keyStrokeDelayInMs', value: 160 }}

            wrapper="div"
            cursor={true}
            repeat={0}
            className="font-tektur text-3xl text-primary"
          />
        </div>
      )}
      <main className="flex min-h-screen w-full flex-col items-center justify-between p-8">
        <div className="w-full max-w-3xl">
          <Header toggleTheme={toggleTheme} />
          <div className="flex flex-col justify-between pb-5 pt-10 font-dm-sans">
            <img
              className="h-20 w-20 rounded-full"
              src="/emmett.png"
              alt="Emmett profile picture"
            />
            <span className="mt-4 text-xl">Emmett Harper</span>
            <span
              className={`text-sm ${currentTheme ? 'text-slate-300' : 'text-slate-700'}`}
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
          <ExperienceSection />
          <h1 className="mb-4 mt-16 font-dm-sans text-lg font-bold">
            Projects
          </h1>
          <ProjectsSection />
        </div>

        <div
          className={`flex flex-grow items-center justify-center font-tektur ${showOverlay ? 'hidden' : ''
            } ${contentAnimation}`}
          style={
            contentAnimation === 'fade-in'
              ? { animation: 'fadeIn 1.5s forwards' }
              : {}
          }
        ></div>
      </main>
    </>
  );
}

export default App;
