import { useNavigate } from "react-router-dom";
//import infinity from "../../../assets/infinity-black.png";

import arfa from "../../../assets/arfa.png";

const Header = () => {
  const navigate = useNavigate();

  // Handle click on the header to navigate to the home page and reload
  const handleClick = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <header
      onClick={handleClick}
      className="flex items-center p-2 cursor-pointer"
    >
      {/* Display the logo */}

      <img
        className="w-8 h-8 inline-block"
        src={arfa}
        alt="Arfa Logo"
      />
      <h1 className="text-2xl text-black font-medium italic">
        Arfa<span className="text-sm">.in</span>
      </h1>
    </header>
  );
};

export default Header;
