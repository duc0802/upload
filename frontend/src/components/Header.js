import { MenuIcon, BellIcon, CogIcon } from "@heroicons/react/outline";
import { CloudUploadIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function Header() {
  const { isOpen, setOpen } = useGlobalContext();
  return (
    <header className="header">
      <div className="headerCenter">
        <button className="h-btn" onClick={() => setOpen(!isOpen)}>
          <MenuIcon className="h-6 w-6" />
        </button>
        <Link to="/" className="h-logo">
          <CloudUploadIcon className="h-8 w-8" />
        </Link>
        <div className="flex-auto"></div>
        <div className="h-r-btn">
          <button className="h-btn mr-2.5">
            <BellIcon className="h-6 w-6" />
          </button>
          <button className="h-btn">
            <CogIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
