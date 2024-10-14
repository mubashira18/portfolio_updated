import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

import { auth } from "./firebase";
const Navbar = () => {
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="profilpic" />
      </div>
      <div className="m-8 flex flex-item-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/shaik-mubashira-b59b14212/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/mubashira18">
          <FaGithub />
        </a>
        <a>
          <FaSquareXTwitter />
        </a>
        <button className="btn btn-primary" onClick={handleLogout}>
          <IoMdLogOut />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
