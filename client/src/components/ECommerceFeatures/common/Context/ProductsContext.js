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
      axios.get("http://localhost:4000/api/lawn"),
      axios.get("http://localhost:4000/api/velvet"),
      axios.get("http://localhost:4000/api/chiffon"),
      axios.get("http://localhost:4000/api/cotton"),
      axios.get("http://localhost:4000/api/net"),
      // axios.get("http://localhost:4000/api/watches"),
      // axios.get("http://localhost:4000/api/handbags"),
      // axios.get("http://localhost:4000/api/sunglass"),
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
      axios.get("http://localhost:4000/api/trending"),
      axios.get("http://localhost:4000/api/bestseller"),
      axios.get("http://localhost:4000/api/todaydeals"),
      axios.get("http://localhost:4000/api/newarrival"),
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
