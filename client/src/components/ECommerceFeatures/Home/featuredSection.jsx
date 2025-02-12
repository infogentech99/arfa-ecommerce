import SingleProduct from "../common/SingleProduct";
import { useProduct } from "../common/Context/ProductsContext";

const FeaturedSection = () => {
  const { selectedProduct, setSelectedProduct, features, featureMapping } =
    useProduct();

  return (
    <section id="top-picks" className="pt-1 pb-3 px-2 sm:px-3 bg-green-200">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-900 mt-5 font-medium">
        Top Picks for You
      </h2>
      <div className="flex justify-evenly gap-3 flex-wrap">
        {features.map((feature, index) => {
          const featureItems = featureMapping[feature];
          return (
            <div
              key={index}
              className="my-3 p-3 rounded-lg bg-white shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] flex-grow basis-1/2 sm:basis-1/3 lg:basis-1/5"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl italic font-semibold mb-3 text-gray-900">
                {feature}
              </h3>
              <div className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-base">
                {featureItems.map((item) => {
                  return (
                    <div
                      className="flex-grow basis-1/3 flex flex-col items-center border rounded-md p-2"
                      key={item._id}
                      onClick={() => setSelectedProduct(item)}
                    >
                      <img
                        className="w-3/4 h-20 min-[400px]:h-48 rounded-md"
                        src={item.image}
                        alt={item.subtitle}
                      />
                      <p className="mt-2 text-xs md:text-sm">{item.subtitle}</p>
                      <p className="font-medium text-xs md:text-base mt-1">
                        ₹.{item.price}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <SingleProduct
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </section>
  );
};

export default FeaturedSection;
