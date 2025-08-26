import React from 'react';
import { motion } from 'framer-motion';

const VegetablePowdersHero = () => {
  const powders = [
    { name: 'Onion Powder', color: 'bg-amber-100 text-amber-800' },
    { name: 'Tomato Powder', color: 'bg-red-100 text-red-800' },
    { name: 'Garlic Powder', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Beetroot Powder', color: 'bg-pink-100 text-pink-800' },
    { name: 'Spinach Powder', color: 'bg-green-100 text-green-800' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10 font-sans">
      {/* Main Container */}
      <div className="w-full  bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl overflow-hidden relative" style={{
        boxShadow: '0 35px 100px rgba(139, 69, 19, 0.3), 0 20px 50px rgba(139, 69, 19, 0.2), 0 10px 30px rgba(139, 69, 19, 0.1)'
      }}>
        {/* Background Gradient Effects */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/30 via-transparent to-amber-100/40 rounded-3xl"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-radial from-yellow-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-radial from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh] p-8 lg:p-12">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 lg:pr-16 flex flex-col justify-center text-left mb-12 lg:mb-0 max-w-2xl mx-auto lg:mx-0">
            <motion.h1 
              className="text-6xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Nature's Flavor,{' '}
              <span className="text-amber-600">Made Simple</span>
            </motion.h1>
            
            <motion.div
              className="text-amber-700 text-xl font-semibold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Premium Vegetable Powders
            </motion.div>
            
            <motion.p 
              className="text-gray-700 text-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Onion, Tomato, Garlic, Spinach, Beetroot & more – convenient powders with the same nutrition and taste as fresh vegetables.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl">
                Shop Vegetable Powders
              </button>
              <button className="bg-white hover:bg-gray-50 text-amber-700 font-semibold py-5 px-10 rounded-xl border-2 border-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl">
                Bulk Enquiry for Export
              </button>
            </motion.div>
          </div>
          
          {/* Right Side - Animated Circle */}
          <div className="flex-2 flex items-center justify-center relative min-h-[700px] lg:min-h-[800px]">
            <div className="relative w-[600px] h-[600px] lg:w-[750px] lg:h-[750px] xl:w-[800px] xl:h-[800px] flex items-center justify-center">
              
              {/* Decorative Background Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-amber-200 opacity-20"></div>
              <div className="absolute inset-8 rounded-full border border-amber-300 opacity-30"></div>
              <div className="absolute inset-16 rounded-full border border-amber-400 opacity-25"></div>
              
              {/* Central Circle - Properly Centered */}
              <motion.div 
                className="w-56 h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 bg-gradient-to-br from-amber-800 via-amber-900 to-orange-900 rounded-full shadow-2xl flex items-center justify-center border-4 border-amber-600 relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
              >
                <div className="text-center">
                  <h3 className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Vegetable
                  </h3>
                  <h3 className="text-amber-200 text-2xl lg:text-3xl xl:text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Powders
                  </h3>
                </div>
              </motion.div>
              
              {/* Orbiting Powder Circles */}
              {powders.map((powder, index) => {
                const angle = (360 / powders.length) * index;
                const radius = 220; // Increased radius for larger animation area
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={powder.name}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{ 
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{ 
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 1.2 + index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div
                      className={`w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 ${powder.color} rounded-full shadow-xl flex items-center justify-center text-center text-sm lg:text-base xl:text-lg font-semibold border-4 border-white`}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        transform: `translate(${x - 56}px, ${y - 56}px)`,
                        boxShadow: '0 12px 30px rgba(0,0,0,0.2), 0 6px 15px rgba(0,0,0,0.15)'
                      }}
                      animate={{
                        x: [x - 56, ...Array(72).fill(0).map((_, i) => {
                          const newAngle = angle + (i + 1) * 5;
                          return Math.cos((newAngle * Math.PI) / 180) * radius - 56;
                        })],
                        y: [y - 56, ...Array(72).fill(0).map((_, i) => {
                          const newAngle = angle + (i + 1) * 5;
                          return Math.sin((newAngle * Math.PI) / 180) * radius - 56;
                        })]
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.8
                      }}
                    >
                      <div className="text-center px-3 leading-tight">
                        {powder.name.split(' ').map((word, wordIndex) => (
                          <div key={wordIndex} className="font-bold">
                            {word}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Connecting Lines (Flower Petals Effect) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                {powders.map((_, index) => {
                  const angle = (360 / powders.length) * index;
                  const startRadius = 24;
                  const endRadius = 35;
                  const startX = 50 + Math.cos((angle * Math.PI) / 180) * startRadius;
                  const startY = 50 + Math.sin((angle * Math.PI) / 180) * startRadius;
                  const endX = 50 + Math.cos((angle * Math.PI) / 180) * endRadius;
                  const endY = 50 + Math.sin((angle * Math.PI) / 180) * endRadius;
                  
                  return (
                    <motion.line
                      key={index}
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="url(#gradient)"
                      strokeWidth="0.8"
                      opacity="0.4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 2 + index * 0.1 }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VegetablePowdersHero;