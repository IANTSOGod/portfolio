import { Menu } from "lucide-react";
import Logo from "../assets/technology.png";

export default function Header() {
  return (
    <div className="w-full bg-blue-800 md:h-[100px] h-[60px]">
      <div className="drawer md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button mt-2 ml-4"
          >
            <Menu></Menu>
          </label>
        </div>
        <div className="drawer-side z-[100]">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 z-50">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="flex md:justify-start text-center md:pt-8 pt-2 pb-3 gap-x-5 md:ml-5 ml-30 mt-[-50px] md:mt-0 cursor-pointer"
        onClick={() => {
          window.location.href = "/portfolio/";
        }}
      >
        <img src={Logo} alt="logo" className="w-10 h-10" />
        <p className="font-[PoppinsBlack] text-2xl mt-1">Portfolio</p>
      </div>
    </div>
  );
}
