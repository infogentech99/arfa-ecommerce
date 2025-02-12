// // const FooterContent = () => {
// //   // Data for different footer sections
// //   const knowUs = ["About Infinity", "Carrers", "Press Releases", "Contact Us"];
// //   const connectUs = ["Facebook", "Twitter", "Instagram"];
// //   const help = [
// //     "Help and Support",
// //     "Your Account",
// //     "Recalls and Product Safety Alerts",
// //     "Returns Centre",
// //     "100% Purchase Production",
// //     "Infinity App Download",
// //     "Orders",
// //   ];
// //   const moneyWithUs = [
// //     "Sell on Infinity",
// //     "Sell under Infinity Accelerator",
// //     "Protect and Build Your Brand",
// //     "Infinity Global Selling",
// //     "Supply to Infinity",
// //     "Become an Affiliate",
// //     "Fulfilment by Infinity",
// //     "Advertise Your Products",
// //     "Infinity Pay on Merchants",
// //   ];

// //   return (
// //     <div className="bg-[#134B70] p-10 flex justify-around flex-wrap gap-10">
// //       {/* 'Get to Know Us' Section */}
// //       <div className="flex-grow basis-2/5 md:basis-1/5">
// //         <h4 className="text-lg sm:text-xl font-bold">Get to Know Us</h4>
// //         {knowUs.map((item, index) => {
// //           return (
// //             <p
// //               className="mt-2 hover:underline cursor-pointer text-sm sm:text-base"
// //               key={index}
// //             >
// //               {item}
// //             </p>
// //           );
// //         })}
// //       </div>

// //       {/* 'Connect with Us' Section */}
// //       <div className="flex-grow basis-2/5 md:basis-1/5">
// //         <h4 className="text-lg sm:text-xl font-bold">Connect with Us</h4>
// //         {connectUs.map((item, index) => {
// //           return (
// //             <p
// //               className="mt-2 hover:underline cursor-pointer text-sm sm:text-base"
// //               key={index}
// //             >
// //               {item}
// //             </p>
// //           );
// //         })}
// //       </div>

// //       {/* 'Make Money with Us' Section */}
// //       <div className="flex-grow basis-2/5 md:basis-1/5">
// //         <h4 className="text-lg sm:text-xl font-bold">Make Money with Us</h4>
// //         {moneyWithUs.map((item, index) => {
// //           return (
// //             <p
// //               className="mt-2 hover:underline cursor-pointer text-sm sm:text-base"
// //               key={index}
// //             >
// //               {item}
// //             </p>
// //           );
// //         })}
// //       </div>

// //       {/* 'Let Us Help You' Section */}
// //       <div className="flex-grow basis-2/5 md:basis-1/5">
// //         <h4 className="text-lg sm:text-xl font-bold">Let Us Help You</h4>
// //         {help.map((item, index) => {
// //           return (
// //             <p
// //               className="mt-2 hover:underline cursor-pointer text-sm sm:text-base"
// //               key={index}
// //             >
// //               {item}
// //             </p>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FooterContent;










// const FooterContent = () => {
//   // Footer data
//   const footerSections = [
//     {
//       title: "Get to Know Us",
//       links: ["About Arfa", "Careers", "Press Releases", "Contact Us"],
//     },
//     {
//       title: "Connect with Us",
//       links: ["Facebook", "Twitter", "Instagram"],
//     },
//     {
//       title: "Make Money with Us",
//       links: [
//         "Sell on Infinity",
//         "Sell under Infinity Accelerator",
//         "Protect and Build Your Brand",
//         "Infinity Global Selling",
//         "Supply to Infinity",
//         "Become an Affiliate",
//         "Fulfillment by Infinity",
//         "Advertise Your Products",
//         "Infinity Pay on Merchants",
//       ],
//     },
    
//   ];

//   return (
//     <footer className="bg-[#134B70] text-white py-10">
//       <div className="max-w-6xl mx-auto px-5 flex flex-wrap justify-between gap-10">
//         {footerSections.map((section, index) => (
//           <div key={index} className="flex-grow min-w-[180px] md:w-1/4">
//             <h4 className="text-lg sm:text-xl font-bold border-b border-gray-300 pb-2">
//               {section.title}
//             </h4>
//             <ul className="mt-3 space-y-2">
//               {section.links.map((link, linkIndex) => (
//                 <li
//                   key={linkIndex}
//                   className="text-sm sm:text-base hover:underline cursor-pointer transition-all duration-200"
//                 >
//                   {link}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//       {/* Bottom Bar */}
//       <div className="text-center text-sm mt-8 border-t border-gray-400 pt-4">
//         © {new Date().getFullYear()} Arfa. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default FooterContent;










import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const FooterContent = () => {
  // Footer data
  const footerSections = [
    {
      title: "About Arfa",
      links: ["Our Story", "Careers", "Press Releases", "Contact Us"],
    },
    {
      title: "Sell with Arfa",
      links: [
        "Become a Seller",
        "Brand Protection",
        "Arfa Global Selling",
        "Affiliate Program",
        "Advertise Your Products",
      ],
    },
    {
      title: "Customer Support",
      links: [
        "Help Center",
        "Your Account",
        "Return & Refunds",
        "Shipping Policies",
        "Arfa App Download",
      ],
    },
    {
      title: "Shop with Arfa",  // 🆕 New Section
      links: [
        "BestSeller",
        "Trending",
        "New Arrivals",
        "Cotton Fibres",
        "Velvet Clothing",
       
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#134B70] to-[#0F3A5A] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Footer Branding */}
        <div className="text-center mb-12">
          <img src="/logo_white.png" alt="Arfa Logo" className="mx-auto w-28 mb-4 drop-shadow-lg" />
          <p className="text-sm sm:text-base max-w-2xl mx-auto opacity-80">
            Experience a world of seamless shopping with Arfa – Where Quality Meets Trust.
          </p>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">
          {footerSections.map((section, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md p-5 rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              <h4 className="text-lg sm:text-xl font-semibold border-b border-gray-400 pb-2 mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="text-sm sm:text-base hover:text-gray-300 cursor-pointer transition-all duration-200"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription Section */}
        <div className="mt-14 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">Subscribe to Arfa Updates</h3>
          <p className="opacity-80 mb-4">Be the first to know about new arrivals, exclusive deals, and latest trends.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-64 sm:w-80 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-[#FFD700] text-black px-5 py-2 rounded-r-md font-semibold hover:bg-yellow-400 transition duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-6 mt-12">
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 text-2xl transform hover:scale-125">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 text-2xl transform hover:scale-125">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 text-2xl transform hover:scale-125">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300 text-2xl transform hover:scale-125">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright & Legal */}
        <div className="text-center text-sm mt-10 border-t border-gray-500 pt-4 opacity-80">
          © {new Date().getFullYear()} Arfa. All rights reserved. | Privacy Policy | Terms of Use
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
