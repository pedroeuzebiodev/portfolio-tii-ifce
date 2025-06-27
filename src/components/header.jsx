import Logo from "../assets/logo.png";
import { Moon, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="py-12">
      <div className="max-width">
        <div
          id="header-content"
          className="flex justify-between items-center md:flex-row-reverse"
        >
          <button type="button" className="p-3 bg-secondary rounded-lg">
            <Moon size={24} />
          </button>

          <a href="/">
            <img src={Logo} alt="Logo" className="w-full max-w-32" />
          </a>

          <button type="button" className="md:hidden">
            <Menu size={48} />
          </button>
        </div>
      </div>
    </header>
  );
};
