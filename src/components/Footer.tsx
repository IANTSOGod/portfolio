import { Link } from "react-router-dom";
import Logo from "../assets/technology.png";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <p className="text-xl">
          Made by Iantso Christian
          <br />
          <Link
            to="https://www.flaticon.com/free-icons/technology"
            title="technology icons"
            className="hover:underline"
          >
            Technology icons created by RanuKumbolo.lab - Flaticon
          </Link>
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Integrating frontend</a>
        <a className="link link-hover">Making backend</a>
        <a className="link link-hover">Making UML conception</a>
        <a className="link link-hover">Deploy apps</a>
      </nav>
      <nav>
        <h6 className="footer-title">More info</h6>
        <a className="link link-hover">About me</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Projects</a>
        <a className="link link-hover">Experience</a>
      </nav>
    </footer>
  );
}
