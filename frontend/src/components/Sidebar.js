import { useGlobalContext } from "../context.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CloudUploadIcon } from "@heroicons/react/outline";

function Sidebar() {
  const { isOpen, setOpen } = useGlobalContext();

  const clickOutside = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className={isOpen ? "fixed top-0 left-0 z-50" : "invisible"}>
      <div
        className={isOpen ? "themeNav opacity-1" : "themeNav opacity-0"}
        onClick={clickOutside}
      ></div>
      <nav className={isOpen ? "nav" : "nav translate-x-[-300px]"}>
        <div className="px-3 py-3">
          <Link to="/" onClick={() => setOpen(!isOpen)}>
            <CloudUploadIcon className="h-8 w-8 text-violet-500" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
