import React from 'react';
import { motion } from "framer-motion";
import Img1 from '../../../assets/image1.png';
import Img2 from '../../../assets/image2.png';
import Img3 from '../../../assets/image3.png';
import Img4 from '../../../assets/image4.png';
import Img5 from '../../../assets/image5.png';


export default function TopProductsSection() {
  const products = [
    {
      name: "Onion Powder",
      description: "For gravies, snacks & seasoning",
      image: Img1,
      hoverColor: "#F59E0B", // Amber/Yellow for onion
      nameColor: "text-amber-500"
    },
    {
      name: "Tomato Powder", 
      description: "Perfect for sauces & soups",
      image: Img2,
      hoverColor: "#DC2626", // Red for tomato
      nameColor: "text-red-600"
    },
    {
      name: "Garlic Powder",
      description: "Enhances flavor instantly", 
      image: Img3,
      hoverColor: "#6B7280", // Gray for garlic
      nameColor: "text-gray-600"
    },
    {
      name: "Beetroot Powder",
      description: "Natural color & iron-rich",
      image: Img4, 
      hoverColor: "#BE185D", // Pink/Magenta for beetroot
      nameColor: "text-pink-600"
    },
    {
      name: "Spinach Powder",
      description: "A super-green for health",
      image: Img5,
      hoverColor: "#16A34A", // Green for spinach
      nameColor: "text-green-600"
    }
  ];

  return (
    <div className="bg-white w-full max-w-7xl mx-auto px-4 py-24">
      {/* Title Section with decorative dots */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="flex space-x-2 mr-6">
            <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800">
            Top Products
          </h2>
          <div className="flex space-x-2 ml-6">
            <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
          </div>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our premium collection of vegetable powders, carefully crafted for exceptional flavor and nutrition in every grain.
        </p>
      </div>

      {/* Equal-height responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch [grid-auto-rows:1fr] mb-8">
        
        {/* Large card - Onion Powder */}
        <motion.div 
          className="lg:col-span-2 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg border border-orange-100 transition-all duration-300 flex flex-col lg:flex-row h-full min-h-[320px]"
          whileHover={{ 
            boxShadow: `0 0 0 4px ${products[0].hoverColor}, 0 25px 50px -12px rgba(0, 0, 0, 0.25)` 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Left side - Content */}
          <div className="flex-1 flex flex-col justify-center pr-0 lg:pr-8 mb-6 lg:mb-0">
            <h3 className={`text-3xl md:text-4xl font-bold ${products[0].nameColor} mb-4`}>
              {products[0].name}
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              {products[0].description}
            </p>
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 inline-flex items-center w-fit">
              <span className="text-amber-800 font-semibold">Premium Quality</span>
            </div>
          </div>
          
          {/* Right side - Image (hidden on mobile) */}
          <div className="hidden lg:flex flex-1 items-center">
            <img 
              src={products[0].image}
              alt={products[0].name}
              className="w-full h-[250px] object-contain rounded-xl"
            />
          </div>
        </motion.div>

        {/* Other product cards */}
        {products.slice(1).map((product, idx) => (
          <motion.div 
            key={idx}
            className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg border border-orange-100 transition-all duration-300 flex flex-col justify-center h-full"
            whileHover={{ 
              boxShadow: `0 0 0 4px ${product.hoverColor}, 0 25px 50px -12px rgba(0, 0, 0, 0.25)` 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="mb-4">
              <img 
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
            </div>
            <h3 className={`text-2xl md:text-3xl font-bold ${product.nameColor} mb-3`}>
              {product.name}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {product.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <motion.button
          className="bg-amber-800 text-orange-50 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-amber-900 transition-all duration-300 inline-flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View All Vegetable Powders</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}