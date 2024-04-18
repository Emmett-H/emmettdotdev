import React, { useState, useEffect } from 'react';

interface ToggleThemeProps {
    toggleTheme: () => void;
}

const ToggleTheme = ({ toggleTheme }: ToggleThemeProps) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('color-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setIsChecked(currentTheme === 'dark');
    }, []);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        toggleTheme();
    };
    return (
        <div className="toggleWrapper relative overflow-hidden py-40 px-80">
            <input
                type="checkbox"
                id="dn"
                className="dn absolute left-[-99em]"
                checked={isChecked}
                onChange={handleToggle}
            />
            <label
                htmlFor="dn"
                className={`toggle relative inline-block w-24 h-14 rounded-full cursor-pointer transition-colors duration-200 ease-cubic ${isChecked ? 'bg-blue-700' : 'bg-sky-400'
                    }`}
            >
                <span
                    className={`toggle__handler relative inline-block z-10 top-1 left-1 w-12 h-12 rounded-full shadow-md transition-all duration-400 ease-cubic ${isChecked
                        ? 'bg-yellow-300 transform translate-x-10 rotate-0'
                        : 'bg-orange-300 transform rotate-[-45deg]'
                        }`}
                >
                    <span
                        className={`crater crater--1 absolute w-1 h-1 bg-orange-400 rounded-full transition-opacity duration-200 ease-in-out top-5 left-[10px] ${isChecked ? 'opacity-100' : 'opacity-0'
                            }`}
                    ></span>
                    <span
                        className={`crater crater--2 absolute w-1.5 h-1.5 bg-orange-400 rounded-full transition-opacity duration-200 ease-in-out top-7 left-[22px] ${isChecked ? 'opacity-100' : 'opacity-0'
                            }`}
                    ></span>
                    <span
                        className={`crater crater--3 absolute w-2 h-2 bg-orange-400 rounded-full transition-opacity duration-200 ease-in-out top-[10px] left-[25px] ${isChecked ? 'opacity-100' : 'opacity-0'
                            }`}
                    ></span>
                </span>
                <span
                    className={`star star--1 absolute w-8 h-1 bg-white top-[10px] left-[35px] z-0 ${isChecked ? 'w-0.5 h-0.5' : 'w-8 h-1'
                        }`}
                ></span>
                <span
                    className={`star star--2 absolute w-8 h-1 bg-white top-5 left-7 z-10 ${isChecked ? 'w-1 h-1 transform -translate-x-1.25' : 'w-8 h-1'
                        }`}
                ></span>
                <span
                    className={`star star--3 absolute w-8 h-1 bg-white top-7 left-10 z-0 ${isChecked ? 'w-0.5 h-0.5 transform -translate-x-1.75' : 'w-8 h-1'
                        }`}
                ></span>
                <span
                    className={`star star--4 absolute w-0.5 h-0.5 bg-white top-4 left-3 z-0 transition-all duration-300 ease-cubic ${isChecked ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-1'
                        }`}
                ></span>
                <span
                    className={`star star--5 absolute w-0.75 h-0.75 bg-white top-8 left-[17px] z-0 transition-all duration-300 ease-cubic ${isChecked
                        ? 'opacity-100 transform translate-x-0 delay-100'
                        : 'opacity-0 transform translate-x-1'
                        }`}
                ></span>
                <span
                    className={`star star--6 absolute w-0.5 h-0.5 bg-white top-9 left-7 z-0 transition-all duration-300 ease-cubic ${isChecked
                        ? 'opacity-100 transform translate-x-0 delay-200'
                        : 'opacity-0 transform translate-x-1'
                        }`}
                ></span>
            </label>
        </div>
    );
};

export default ToggleTheme;