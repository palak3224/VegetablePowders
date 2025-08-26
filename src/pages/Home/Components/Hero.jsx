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
    <div className=" bg-gray-100 p-4 sm:p-6 lg:p-10 font-sans">
      {/* Main Container */}
      <div className="w-full bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl sm:rounded-3xl overflow-hidden relative" style={{
        boxShadow: '0 35px 100px rgba(139, 69, 19, 0.3), 0 20px 50px rgba(139, 69, 19, 0.2), 0 10px 30px rgba(139, 69, 19, 0.1)'
      }}>
        {/* Background Gradient Effects */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/30 via-transparent to-amber-100/40 rounded-2xl sm:rounded-3xl"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-radial from-yellow-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-radial from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="flex flex-col lg:flex-row items-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] p-4 sm:p-6 lg:p-12">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 lg:pr-16 flex flex-col justify-center text-center lg:text-left mb-8 sm:mb-10 lg:mb-0 max-w-2xl mx-auto lg:mx-0">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-tight px-2 sm:px-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Nature's Flavor,{' '}
              <span className="text-amber-600 block sm:inline">Made Simple</span>
            </motion.h1>
            
            <motion.div
              className="text-amber-700 text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Premium Vegetable Powders
            </motion.div>
            
            <motion.p 
              className="text-gray-700 text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-4 sm:px-2 lg:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Onion, Tomato, Garlic, Spinach, Beetroot & more – convenient powders with the same nutrition and taste as fresh vegetables.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-10 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-xl">
                Shop Vegetable Powders
              </button>
              <button className="bg-white hover:bg-gray-50 text-amber-700 font-semibold py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-10 rounded-lg sm:rounded-xl border-2 border-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-xl">
                Bulk Enquiry for Export
              </button>
            </motion.div>
          </div>
          
          {/* Right Side - Animated Circle */}
          <div className="flex-2 flex items-center justify-center relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] w-full lg:w-auto">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[750px] xl:h-[750px] 2xl:w-[800px] 2xl:h-[800px] flex items-center justify-center">
              
              {/* Decorative Background Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-amber-200 opacity-20"></div>
              <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-full border border-amber-300 opacity-30"></div>
              <div className="absolute inset-8 sm:inset-12 lg:inset-16 rounded-full border border-amber-400 opacity-25"></div>
              
              {/* Central Circle */}
              <motion.div 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 bg-gradient-to-br from-amber-800 via-amber-900 to-orange-900 rounded-full shadow-2xl flex items-center justify-center border-2 sm:border-4 border-amber-600 relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
              >
                <div className="text-center">
                  <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-1 lg:mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Vegetable
                  </h3>
                  <h3 className="text-amber-200 text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Powders
                  </h3>
                </div>
              </motion.div>
              
              {/* Orbiting Powder Circles */}
              {powders.map((powder, index) => {
                const angle = (360 / powders.length) * index;
                // Responsive radius - much closer on mobile
                const radius = window.innerWidth < 640 ? 85 : 
                              window.innerWidth < 768 ? 100 : 
                              window.innerWidth < 1024 ? 130 : 220;
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
                      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 ${powder.color} rounded-full shadow-xl flex items-center justify-center text-center text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-lg font-semibold border-2 sm:border-4 border-white`}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        transform: `translate(${x - (window.innerWidth < 640 ? 32 : window.innerWidth < 768 ? 40 : window.innerWidth < 1024 ? 48 : 56)}px, ${y - (window.innerWidth < 640 ? 32 : window.innerWidth < 768 ? 40 : window.innerWidth < 1024 ? 48 : 56)}px)`,
                        boxShadow: '0 12px 30px rgba(0,0,0,0.2), 0 6px 15px rgba(0,0,0,0.15)'
                      }}
                      animate={{
                        x: [x - (window.innerWidth < 640 ? 32 : window.innerWidth < 768 ? 40 : window.innerWidth < 1024 ? 48 : 56), ...Array(72).fill(0).map((_, i) => {
                          const newAngle = angle + (i + 1) * 5;
                          const currentRadius = window.innerWidth < 640 ? 85 : 
                                              window.innerWidth < 768 ? 100 : 
                                              window.innerWidth < 1024 ? 130 : 220;
                          return Math.cos((newAngle * Math.PI) / 180) * currentRadius - (window.innerWidth < 640 ? 32 : window.innerWidth < 768 ? 40 : window.innerWidth < 1024 ? 48 : 56);
                        })],
                        y: [y - (window.innerWidth < 640 ? 32 : window.innerWidth < 768 ? 40 : window.innerWidth < 1024 ? 48 : 56), ...Array(72).fill(0).map((_, i) => {
                          const newAngle = angle + (i + 1) * 5;
                          const currentRadius = window.innerWidth < 640 ? 85 : 
                                              window.innerWidth < 768 ? 100 : 
                                              window.innerWidth < 1024 ? 130 : 220;
                          return Math.sin((newAngle * Math.PI) / 180) * currentRadius - (window.innerWidth < 640 ? 32 : window.innerWidth < 768 ? 40 : window.innerWidth < 1024 ? 48 : 56);
                        })]
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.8
                      }}
                    >
                      <div className="text-center px-1 sm:px-2 lg:px-3 leading-tight">
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