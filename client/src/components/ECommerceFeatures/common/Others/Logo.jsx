import { useNavigate } from "react-router-dom";
//import infinity from "../../../../assets//infinity-white.png";

import logo_white from "../../../../assets/logo_white.png";

const Logo = () => {
  const navigate = useNavigate();

  // Handles click event to navigate to the home page and reload the page.
  const handleClick = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div onClick={handleClick} className="flex items-center cursor-pointer">
        {/* Logo */}
        <img
          className="w-8 h-6 sm:w-14 sm:h-9 inline-block"
          src={logo_white}
          
          alt="Arfa"
        />
        <h1 className="text-xl sm:text-2xl text-white font-medium italic">
          Arfa<span className="text-sm">.in</span>
        </h1>
      </div>
    </>
  );
};

export default Logo;
