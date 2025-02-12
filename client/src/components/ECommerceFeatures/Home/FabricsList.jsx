// import React, { useRef } from "react";
// import { useProduct } from "../common/Context/ProductsContext";
// import SingleProduct from "../common/SingleProduct";
// import leftArrow from "../../../assets/left-arrow.png";
// import rightArrow from "../../../assets/right-arrow.png";

// const FabricsList = () => {
//   const { selectedProduct, setSelectedProduct, fabrics, fabricMapping } =
//     useProduct();

//   // Ref for each caegory's scrollable list
//   const refs = useRef(fabrics.map(() => React.createRef()));

//   // Scroll left for the specified caegory
//   const scrollLeft = (index) => {
//     refs.current[index].current.scrollBy({
//       left: -300,
//       behavior: "smooth",
//     });
//   };

//   // Scroll right for the specified catgory
//   const scrollRight = (index) => {
//     refs.current[index].current.scrollBy({
//       left: 300,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="py-5 px-2 sm:px-3 bg-blue-100">
//       <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-900 mt-5 font-medium">
//         Shop By Fabrics
//       </h2>
//       {fabrics.map((fabric, index) => {
//         const fabricItems = fabricMapping[fabric];

//         return (
//           <div
//             key={index}
//             id={fabric.toLowerCase().replace(" ", "-")}
//             className="my-3 px-2 pt-2 pb-3 sm:px-5 sm:py-3 rounded-lg bg-white shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]"
//           >
//             <h3 className="text-lg sm:text-xl md:text-2xl italic font-semibold mb-3 text-gray-900">
//               {fabric}
//             </h3>
//             <div className="relative">
//               {/* Left Scroll Button */}
//               <button
//                 onClick={() => scrollLeft(index)}
//                 aria-label={`Scroll Left for ${fabric}`}
//                 className="absolute top-1/2 left-1 transform -translate-y-1/2 px-1 md:px-2 py-2 md:py-5 border-2 border-transparent hover:border-gray-800 hover:ring-2 ring-white z-10 bg-white opacity-70"
//               >
//                 <img className="w-5 lg:w-6" src={leftArrow} alt="Left Arrow" />
//               </button>

//               {/* Right Scroll Button */}
//               <button
//                 onClick={() => scrollRight(index)}
//                 aria-label={`Scroll Right for ${fabric}`}
//                 className="absolute top-1/2 right-1 transform -translate-y-1/2 px-1 md:px-2 py-2 md:py-5 border-2 border-transparent hover:border-gray-800 hover:ring-2 ring-white z-10 bg-white opacity-50"
//               >
//                 <img className="w-5 lg:w-6" src={rightArrow} alt="Left Arrow" />
//               </button>
//               <div
//                 ref={refs.current[index]}
//                 className="flex gap-2 sm:gap-5 text-xs sm:text-base overflow-x-auto scrollbar-hide scroll-smooth"
//               >
//                 {fabricItems.map((item) => {
//                   return (




// <div
//   className="flex flex-col w-32 min-w-32 sm:min-w-52 md:min-w-60 border rounded-md p-2"
//   key={item._id}
//   onClick={() => setSelectedProduct(item)}
// >
//   {/* <img
//     className="h-56 sm:h-72 md:h-96 rounded-md"
//     src={item.image}
//     alt={item.subtitle}
//   /> */}

  
// <img
//   className="h-48 sm:h-64 md:h-72 rounded-md"
//     src={item.image}
//    alt={item.subtitle}
//  />
//   <p className="my-2">{item.title}</p>
//   <div className="sm:flex items-center gap-2">
//     <img className="w-20" src={item.rating} alt="Rating" />
//     <p>
//       {item.review}{" "}
//       <span className="sm:hidden">Reviews</span>
//     </p>
//   </div>
//   <p className="font-medium text-sm sm:text-lg mt-1">
//     ₹.{item.price}
//   </p>
// </div>

//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         );
//       })}

//       <SingleProduct
//         selectedProduct={selectedProduct}
//         setSelectedProduct={setSelectedProduct}
//       />
//     </section>
//   );
// };

// export default FabricsList;











import React, { useRef, useEffect } from "react";
import { useProduct } from "../common/Context/ProductsContext";
import SingleProduct from "../common/SingleProduct";
import leftArrow from "../../../assets/left-arrow.png";
import rightArrow from "../../../assets/right-arrow.png";

const FabricsList = () => {
  const { selectedProduct, setSelectedProduct, fabrics = [], fabricMapping = {} } = useProduct();

  // Initialize refs only when fabrics is available
  const refs = useRef([]);

  useEffect(() => {
    refs.current = fabrics.map(() => React.createRef());
  }, [fabrics]);

  // Scroll functions with safety checks
  const scrollLeft = (index) => {
    if (refs.current[index]?.current) {
      refs.current[index].current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (index) => {
    if (refs.current[index]?.current) {
      refs.current[index].current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-5 px-2 sm:px-3 bg-blue-100">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-900 mt-5 font-medium">
        Shop By Fabrics
      </h2>

      {fabrics.length > 0 ? (
        fabrics.map((fabric, index) => {
          const fabricItems = fabricMapping[fabric] || [];

          return (
            <div
              key={index}
              id={fabric.toLowerCase().replace(" ", "-")}
              className="my-3 px-2 pt-2 pb-3 sm:px-5 sm:py-3 rounded-lg bg-white shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl italic font-semibold mb-3 text-gray-900">
                {fabric}
              </h3>
              <div className="relative">
                <button
                  onClick={() => scrollLeft(index)}
                  aria-label={`Scroll Left for ${fabric}`}
                  className="absolute top-1/2 left-1 transform -translate-y-1/2 px-1 md:px-2 py-2 md:py-5 border-2 border-transparent hover:border-gray-800 hover:ring-2 ring-white z-10 bg-white opacity-70"
                >
                  <img className="w-5 lg:w-6" src={leftArrow} alt="Left Arrow" />
                </button>

                <button
                  onClick={() => scrollRight(index)}
                  aria-label={`Scroll Right for ${fabric}`}
                  className="absolute top-1/2 right-1 transform -translate-y-1/2 px-1 md:px-2 py-2 md:py-5 border-2 border-transparent hover:border-gray-800 hover:ring-2 ring-white z-10 bg-white opacity-50"
                >
                  <img className="w-5 lg:w-6" src={rightArrow} alt="Right Arrow" />
                </button>

                <div
                  ref={refs.current[index]}
                  className="flex gap-2 sm:gap-5 text-xs sm:text-base overflow-x-auto scrollbar-hide scroll-smooth"
                >
                  {fabricItems.length > 0 ? (
                    fabricItems.map((item) => (
                      <div
                        className="flex flex-col w-32 min-w-32 sm:min-w-52 md:min-w-60 border rounded-md p-2"
                        key={item._id}
                        onClick={() => setSelectedProduct(item)}
                      >
                        <img className="h-48 sm:h-64 md:h-72 rounded-md" src={item.image} alt={item.subtitle} />
                        <p className="my-2">{item.title}</p>
                        <div className="sm:flex items-center gap-2">
                          <img className="w-20" src={item.rating} alt="Rating" />
                          <p>
                            {item.review} <span className="sm:hidden">Reviews</span>
                          </p>
                        </div>
                        <p className="font-medium text-sm sm:text-lg mt-1">₹{item.price}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No items available</p>
                  )}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500">No fabrics available</p>
      )}

      <SingleProduct selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
    </section>
  );
};

export default FabricsList;
