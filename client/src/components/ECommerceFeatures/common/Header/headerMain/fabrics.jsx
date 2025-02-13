import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Fabrics = () => {
  const navigate = useNavigate();

  const [fabrictitle, setFabrictitle] = useState([]);

  // Fetch fabrics from the API on component mount
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/fabriclist")
      .then((res) => {
        setFabrictitle(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  return (
    <div className="flex justify-around mt-5 overflow-x-auto mb-3">
      {/* Render each caegory with an image and title */}
      {fabrictitle.map((item) => {
        return (
          <a
            href={item.subtitle}
            className="flex flex-col min-w-28 sm:min-w-36 items-center border-2 border-white hover:border-red-300 cursor-pointer"
            key={item._id}
            onClick={() => navigate("/")}
          >
            <img className="w-20 sm:w-28" src={item.image} alt="Fabrics" />
            <p className="text-xs sm:text-base">{item.title}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Fabrics;
