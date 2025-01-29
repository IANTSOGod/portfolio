import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-base-200 h-[600px] flex">
      <div className="bg-base-300 w-[400px]">
        <p className="text-center text-2xl mt-10">Contact</p>
        <div className="flex justify-center align-middle gap-x-10 mt-10">
          <div className="hover:bg-primary w-10 h-10 rounded-full flex justify-center align-middle pt-2 cursor-pointer">
            <Link
              to={"https://www.facebook.com/christian.razafindrazaka.5/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook></Facebook>
            </Link>
          </div>
          <div className="hover:bg-primary w-10 h-10 rounded-full flex justify-center align-middle pt-2 cursor-pointer">
            <Link
              to={"https://www.instagram.com/iantso079/?hl=en"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram></Instagram>
            </Link>
          </div>
          <div className="hover:bg-primary w-10 h-10 rounded-full flex justify-center align-middle pt-2 cursor-pointer">
            <Link
              to={"https://github.com/IANTSOGod/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github></Github>
            </Link>
          </div>
          <div className="hover:bg-primary w-10 h-10 rounded-full flex justify-center align-middle pt-2 cursor-pointer">
            <Link
              to={"https://www.linkedin.com/in/iantso01/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin></Linkedin>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-950"></div>
    </div>
  );
}
