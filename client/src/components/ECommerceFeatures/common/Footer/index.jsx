import Logo from "../Others/Logo";
//import Mu2 from "../../../../assets/Mu2-dark.png";
import logo_white from "../../../../assets/logo_white.png";
import FooterContent from "./footer";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* Back to Top Section */}
      <div className="bg-[#F3F4F6] py-3 text-center hover:bg-[#F3F4F6]-700">
        <a className="text-black hover:text-black-400" href="#home">
          Back to Top
        </a>
      </div>

      {/* Footer Content */}
      <FooterContent />

      {/* Footer Bottom Branding Section */}
      <div className="bg-[#134B70] flex justify-between px-10 py-5">
        <Logo />
        <div className="flex items-center">
          <img
            className="w-8 cursor-pointer hover:opacity-80"
            src={logo_white}
            alt="Arfa Logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
