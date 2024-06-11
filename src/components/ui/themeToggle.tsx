import { useState, useEffect } from 'react';

interface ToggleThemeProps {
    toggleTheme: () => void;
}

const ToggleTheme = ({ toggleTheme }: ToggleThemeProps) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const currentTheme =
            localStorage.getItem('color-theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light');
        setIsChecked(currentTheme === 'dark');
        updateThemeColor(currentTheme);
    }, []);

    const updateThemeColor = (theme: string) => {
        const themeColorMetaTag = document.querySelector(
            'meta[name="theme-color"]',
        );
        if (themeColorMetaTag) {
            if (theme === 'dark') {
                themeColorMetaTag.setAttribute('content', 'hsl(240, 3.7%, 15.9%)');
            } else {
                themeColorMetaTag.setAttribute('content', 'hsl(0, 0%, 100%)');
            }
        }
    };

    const handleToggle = () => {
        const newTheme = isChecked ? 'light' : 'dark';
        setIsChecked(!isChecked);
        toggleTheme();
        updateThemeColor(newTheme);
    };

    return (
        <div className="toggleWrapper relative overflow-hidden">
            <input
                type="checkbox"
                id="dn"
                className="dn absolute left-[-99em]"
                checked={isChecked}
                onChange={handleToggle}
            />
            <label
                htmlFor="dn"
                className={`toggle ease-cubic relative inline-block h-9 w-16 cursor-pointer rounded-full transition-colors duration-200 ${isChecked ? 'checked bg-slate-700' : 'bg-sky-200'
                    }`}
            >
                <span
                    className={`toggle__handler duration-400 ease-cubic relative left-1 top-1 z-10 inline-block h-7 w-7 rounded-full shadow-md transition-all ${isChecked
                        ? 'translate-x-7 rotate-0 transform bg-white'
                        : 'sun rotate-[-45deg] transform bg-amber-200'
                        }`}
                >
                    <span
                        className={`absolute left-1.5 top-3 h-0.5 w-0.5 rounded-full bg-slate-400 transition-opacity duration-200 ease-in-out ${isChecked ? 'opacity-100' : 'opacity-0'
                            }`}
                    ></span>
                    <span
                        className={`absolute left-3 top-5 h-1 w-1 rounded-full bg-slate-400 transition-opacity duration-200 ease-in-out ${isChecked ? 'opacity-100' : 'opacity-0'
                            }`}
                    ></span>
                    <span
                        className={`absolute left-3.5 top-2 h-1.5 w-1.5 rounded-full bg-slate-400 transition-opacity duration-200 ease-in-out ${isChecked ? 'opacity-100' : 'opacity-0'
                            }`}
                    ></span>
                </span>
                <span
                    className={` ease-cubic absolute left-5 top-2 h-0.5 w-0.5 bg-white transition-all duration-300 ${!isChecked && 'w-6'}`}
                ></span>
                <span className="ease-cubic absolute left-3 top-6 h-0.5 w-0.5 bg-white transition-all duration-300"></span>
                <span
                    className={` ease-cubic absolute left-4 top-4 h-0.5 w-0.5 bg-white transition-all duration-300 ${!isChecked && 'top-5 w-6'}`}
                ></span>
                <span
                    className={` ease-cubic absolute left-2 top-3 z-50 h-0.5 w-0.5 bg-white transition-all duration-300 ${!isChecked && 'left-5 top-3.5 w-4'}`}
                ></span>
                <span className="w-0.75 h-0.75 ease-cubic absolute left-3 top-6 bg-white transition-all duration-300"></span>
                <span className="ease-cubic absolute left-5 top-7 h-0.5 w-0.5 bg-white transition-all duration-300"></span>
            </label>
        </div>
    );
};

export default ToggleTheme;
