import Logo from "../assets/logo.png";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="py-12">
      <div className="max-width">
        <div id="header-content" className="flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="Logo" className="w-full max-w-32" />
          </a>

          <button type="button" className="lg:hidden">
            <Menu size={48} />
          </button>
        </div>
      </div>
    </header>
  );
};
