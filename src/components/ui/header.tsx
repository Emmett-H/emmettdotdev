import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    Link,
} from "@radix-ui/react-navigation-menu";

interface HeaderProps {
    toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative flex w-full items-center justify-between bg-background px-4 py-2 text-primary">
            <div className="flex items-center">
                <button className="z-20 pt-3 md:hidden" onClick={toggleMenu}>
                    <Bars3Icon className="h-6 w-6 text-primary" />
                </button>
                <a
                    href="/"
                    className="pl-5 pt-2 font-tektur text-2xl md:pl-8 md:pt-4 md:text-3xl"
                >
                    emmett.dev
                </a>
                <nav
                    className={`ml-14 pt-6 font-dm-sans ${isMenuOpen ? "block" : "hidden"} md:block`}
                >
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col md:flex-row md:space-x-4">
                            <NavigationMenuItem>
                                <Link href="/">About</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/">Work</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/">Skills</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/">Contact</Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>
            </div>
            <button
                className="z-20 pt-2 font-dm-sans text-primary"
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
        </header>
    );
};

export default Header;
