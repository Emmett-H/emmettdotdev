import ToggleTheme from "./themeToggle";

interface HeaderProps {
    toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-background px-4 py-2 text-primary">
            <div className="flex-1"></div>

            <h1 className="text-center font-tektur text-2xl md:text-3xl z-10">
                <a href="/" className="block whitespace-nowrap">emmett.dev</a>
            </h1>

            <ToggleTheme toggleTheme={toggleTheme} />

        </header>
    );
};


export default Header;