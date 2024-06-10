import ToggleTheme from "./themeToggle";

interface HeaderProps {
    toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-10 flex w-full h-14 items-center justify-between bg-background text-primary -ml-1.5 sm:ml-0">
            <h1 className="text-center font-tektur text-3xl z-10">
                <a href="/" className="block whitespace-nowrap">emmett.dev</a>
            </h1>
            <ToggleTheme toggleTheme={toggleTheme} />
        </header>
    );
};


export default Header;