import { useState, useEffect } from 'react';

interface ToggleThemeProps {
    toggleTheme: () => void;
}


const ToggleTheme = ({ toggleTheme }: ToggleThemeProps) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('color-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setIsChecked(currentTheme === 'dark');
        updateThemeColor(currentTheme);
    }, []);

    useEffect(() => {
        const updateThemeColorOnScroll = () => {
            const currentTheme = isChecked ? 'dark' : 'light';
            updateThemeColor(currentTheme);
        };

        window.addEventListener('scroll', updateThemeColorOnScroll);

        return () => {
            window.removeEventListener('scroll', updateThemeColorOnScroll);
        };
    }, [isChecked]);

    const updateThemeColor = (theme: string) => {
        const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
        if (themeColorMetaTag) {
            if (theme === 'dark') {
                themeColorMetaTag.setAttribute('content', 'hsl(240, 3.7%, 15.9%)'); // Dark mode background color
            } else {
                themeColorMetaTag.setAttribute('content', 'hsl(0, 0%, 100%)'); // Light mode background color
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
                className={`toggle relative inline-block w-16 h-9 rounded-full cursor-pointer transition-colors duration-200 ease-cubic ${isChecked ? 'checked bg-slate-700' : 'bg-sky-200'
                    }`}
            >
                <span
                    className={`toggle__handler relative inline-block z-10 top-1 left-1 w-7 h-7 rounded-full shadow-md transition-all duration-400 ease-cubic ${isChecked
                        ? 'bg-white transform translate-x-7 rotate-0'
                        : 'bg-amber-200 transform rotate-[-45deg] sun'
                        }`}
                >
                    <span
                        className={`absolute w-0.5 h-0.5 bg-slate-400 rounded-full transition-opacity duration-200 ease-in-out top-3 left-1.5 ${isChecked ? 'opacity-100' : 'opacity-0'
                            }`}
                    ></span>
                    <span
                        className={`absolute w-1 h-1 bg-slate-400 rounded-full transition-opacity duration-200 ease-in-out top-5 left-3 ${isChecked ? 'opacity-100' : 'opacity-0'
                            }`}
                    ></span>
                    <span
                        className={`absolute w-1.5 h-1.5 bg-slate-400 rounded-full transition-opacity duration-200 ease-in-out top-2 left-3.5 ${isChecked ? 'opacity-100' : 'opacity-0'
                            }`}
                    ></span>
                </span>
                <span
                    className={` absolute w-0.5 h-0.5 bg-white top-2 left-5 transition-all duration-300 ease-cubic ${!isChecked && 'w-6'}`}
                ></span>
                <span
                    className='absolute w-0.5 h-0.5 bg-white top-6 left-3 transition-all duration-300 ease-cubic'
                ></span>
                <span
                    className={` absolute w-0.5 h-0.5 bg-white top-4 left-4 transition-all duration-300 ease-cubic ${!isChecked && 'w-6 top-5'}`}
                ></span>
                <span
                    className={` absolute w-0.5 h-0.5 bg-white top-3 left-2 z-50 transition-all duration-300 ease-cubic ${!isChecked && 'w-4 left-5 top-3.5'}`}
                ></span>
                <span
                    className='absolute w-0.75 h-0.75 bg-white top-6 left-3 transition-all duration-300 ease-cubic'
                ></span>
                <span
                    className='absolute w-0.5 h-0.5 bg-white top-7 left-5 transition-all duration-300 ease-cubic'
                ></span>
            </label>
        </div>
    );
};

export default ToggleTheme;
