import logo from "./assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <nav className="flex justify-between">
        <div className=" flex mb-20 justify-between py-6 px-6">
            <img className=" m-2 w-13" src={logo} alt="logo"/>
        </div>
        <div className=" m-8 flex justify-around gap-4  ">
        <FaLinkedin className="size-7 cursor-pointer"></FaLinkedin>
        <FaGithub className="size-7 cursor-pointer"></FaGithub>
        <FaSquareXTwitter className="size-7 cursor-pointer"></FaSquareXTwitter>
        <FaInstagram className="size-7 cursor-pointer"></FaInstagram>

        </div>
    </nav>
  )
};

export default Navbar;