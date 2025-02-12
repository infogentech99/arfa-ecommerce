import { useNavigate, Link } from "react-router-dom";

const FilterTitles = ({
  lawn,
  velvet,
  chiffon,
  cotton,
 // net,
  // watches,
  // handbag,
  // sunglass,
  trending,
  bestseller,
  todaydeal,
  newarrival,
  allproducts,
}) => {
  const navigate = useNavigate();

  // Caegories to be displayed in the sidebar
  const fabrics = [
    {
      navigate: "/filter/lawn",
      style: lawn,
      title: "Lawn",
    },
    {
      navigate: "/filter/velvet",
      style: velvet,
      title: "Velvet",
    },
    {
      navigate: "/filter/chiffon",
      style: chiffon,
      title: "Chiffon",
    },
    {
      navigate: "/filter/cotton",
      style: cotton,
      title: "Cotton",
    },
    // {
    //   navigate: "/filter/net",
    //   style: net,
    //   title: "Net",
    // },





    // {
    //   navigate: "/filter/watches",
    //   style: watches,
    //   title: "Watches",
    // },
    // {
    //   navigate: "/filter/handbag",
    //   style: handbag,
    //   title: "Handbags",
    // },
    // {
    //   navigate: "/filter/sunglass",
    //   style: sunglass,
    //   title: "Sunglasses",
    // },
  ];

  // Special picks like Trending, Bestsellers, etc.
  const toppicks = [
    {
      navigate: "/filter/trending",
      style: trending,
      title: "Trending",
    },
    {
      navigate: "/filter/bestseller",
      style: bestseller,
      title: "Best Sellers",
    },
    {
      navigate: "/filter/todaydeal",
      style: todaydeal,
      title: "Today's Deals",
    },
    {
      navigate: "/filter/newarrival",
      style: newarrival,
      title: "New Arrivals",
    },
  ];

  // Function to navigate to the search page and refresh
  const handleClick = () => {
    navigate("/search");
    window.location.reload();
  };

  return (
    <section className="sm:flex-grow basis-1/4 md:basis-1/5 border-r border-r-gray-300 p-2 sm:px-5 sm:pb-5">
      <h2 className="pt-3 sticky top-12 sm:top-16 z-40 bg-white text-lg sm:text-xl md:text-2xl text-gray-900 font-medium border-b border-b-gray-300 pb-1 sm:pb-3">
        <a
          className="hover:text-green-500 hover:underline hover:underline-offset-4"
          href="#home"
        >
          Filters
        </a>
      </h2>

      {/* Filter option for all products */}
      <p
        onClick={handleClick}
        className={`cursor-pointer py-3 text-xs md:text-sm lg:text-base hover:text-blue-500 border-b border-b-gray-300 ${allproducts}`}
      >
        All Products
      </p>

      {/* Fabric filters */}
      <div className="border-b border-b-gray-300 pb-3">
        <h3 className="text-sm sm:text-base text-gray-500 font-medium py-2">
          FABRICS
        </h3>
        {fabrics.map((item, index) => {
          return (
            <Link key={index} to={item.navigate}>
              <p
                className={`mb-1 text-xs md:text-sm lg:text-base hover:text-blue-500 ${item.style}`}
              >
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Top picks filters */}
      <div className="border-b border-b-gray-300 pb-3">
        <h3 className="text-sm sm:text-base text-gray-500 font-medium py-2">
          TOP PICKS
        </h3>
        {toppicks.map((item, index) => {
          return (
            <Link key={index} to={item.navigate}>
              <p
                className={`mb-1 text-xs md:text-sm lg:text-base hover:text-blue-500 ${item.style}`}
              >
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default FilterTitles;
