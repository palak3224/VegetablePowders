import React from 'react';
import { motion } from 'framer-motion';
import spice1 from '../../../assets/spice1.png';
import spice2 from '../../../assets/spice2.png';
import spice3 from '../../../assets/spice3.png';
import spice4 from '../../../assets/spice4.png';
import spice5 from '../../../assets/spice5.png';
import spice6 from '../../../assets/spice6.png';

const AboutSection = () => {
  const imageSources = [
    spice1, spice2, spice3, spice4, spice5, spice6
  ];

  return (
    <div className="bg-white py-20 px-0">
      <div className="mx-auto px-4">
        {/* Heading with decorative dots */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex space-x-2 mr-6">
            <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 text-center">
            About Section
          </h2>
          <div className="flex space-x-2 ml-6">
            <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-800 rounded-full"></div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl shadow-sm border border-amber-100 max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-4 font-medium">
              Vegetable powders are a modern kitchen essential — packed with nutrition, easy to use, 
              and with a long shelf life.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1"></div>
              <div className="bg-amber-800 text-orange-50 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                Perfect for everyday cooking, ready-to-eat meals, bakeries, and global food brands
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1"></div>
            </div>
          </div>
        </div>

        {/* Images in a row with animation - Full width */}
        <div className="w-full mt-16">
  <div className="flex flex-wrap justify-center gap-6 lg:justify-between lg:flex-nowrap">
    {imageSources.map((src, index) => (
      <motion.img 
        key={index}
        src={src}
        alt={`Vegetable Powder ${index + 1}`} 
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 object-cover rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          ease: "easeOut"
        }}
        whileHover={{ scale: 1.05 }}
      />
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default AboutSection;