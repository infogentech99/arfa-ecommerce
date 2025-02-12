import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Filtered products for search
  const [filteredProducts, setFilteredProducts] = useState([]);

  /// Selected product for detailed view
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Caegory data
  const fabrics = [
    "Lawn",
    "Velvet",
    "Chiffon",
    "Cotton",
    "Net",
    // "Watches",
    // "Handbags",
    // "Sunglasses",
  ];

  const [lawnClothing, setLawnclothing] = useState([]);
  const [velvetClothing, setVelvetclothing] = useState([]);
  const [chiffon, setChiffon] = useState([]);
  const [cotton, setCotton] = useState([]);
  const [net, setNet] = useState([]);
  // const [watches, setWatches] = useState([]);
  // const [handbags, setHandbags] = useState([]);
  // const [sunGlasses, setSunGlasses] = useState([]);

  // Fetch catgory data from API
  useEffect(() => {
    Promise.all([
      axios.get("https://arfa-ecommerce.onrender.com/api/lawn"),
      axios.get("https://arfa-ecommerce.onrender.com/api/velvet"),
      axios.get("https://arfa-ecommerce.onrender.com/api/chiffon"),
      axios.get("https://arfa-ecommerce.onrender.com/api/cotton"),
      axios.get("https://arfa-ecommerce.onrender.com/api/net"),
      // axios.get("https://arfa-ecommerce.onrender.com/api/watches"),
      // axios.get("https://arfa-ecommerce.onrender.com/api/handbags"),
      // axios.get("https://arfa-ecommerce.onrender.com/api/sunglass"),
    ])
      .then(
        ([
          lawnRes,
          velvetRes,
          chiffonRes,
          cottonRes,
          netRes,
          // watchRes,
          // handbagRes,
          // sunglassRes,
        ]) => {
          setLawnclothing(lawnRes.data);
          setVelvetclothing(velvetRes.data);
          setChiffon(chiffonRes.data);
          setCotton(cottonRes.data);
          setNet(netRes.data);
          // setWatches(watchRes.data);
          // setHandbags(handbagRes.data);
          // setSunGlasses(sunglassRes.data);
        }
      )
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  const fabricMapping = {
    "Lawn": lawnClothing,
    "Velvet": velvetClothing,
    "Chiffon": chiffon,
    Cotton: cotton,
    "Net": net,
    // Watches: watches,
    // Handbags: handbags,
    // Sunglasses: sunGlasses,
  };

  // Featured Items
  const features = [
    "Trending",
    "Best Sellers",
    "Today's deals",
    "New Arrivals",
  ];

  const [trending, setTrending] = useState([]);
  const [bestseller, setBestseller] = useState([]);
  const [todaydeal, setTodaydeal] = useState([]);
  const [newarrival, setNewarrival] = useState([]);

  // Fetch featured items from API
  useEffect(() => {
    Promise.all([
      axios.get("https://arfa-ecommerce.onrender.com/api/trending"),
      axios.get("https://arfa-ecommerce.onrender.com/api/bestseller"),
      axios.get("https://arfa-ecommerce.onrender.com/api/todaydeals"),
      axios.get("https://arfa-ecommerce.onrender.com/api/newarrival"),
    ])
      .then(([trendingRes, bestsellerRes, todaydealRes, newarrivalRes]) => {
        setTrending(trendingRes.data);
        setBestseller(bestsellerRes.data);
        setTodaydeal(todaydealRes.data);
        setNewarrival(newarrivalRes.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  const featureMapping = {
    Trending: trending,
    "Best Sellers": bestseller,
    "Today's deals": todaydeal,
    "New Arrivals": newarrival,
  };

  return (
    <ProductContext.Provider
      value={{
        // Filtered Products
        filteredProducts,
        setFilteredProducts,

        // Products
        selectedProduct,
        setSelectedProduct,
        fabrics,
        fabricMapping,
        features,
        featureMapping,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Hook for consuming ProductContext
export const useProduct = () => useContext(ProductContext);
