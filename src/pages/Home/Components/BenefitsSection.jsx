import React from 'react';
import { motion } from 'framer-motion';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "100% Natural & Pure",
      description: "Made from premium vegetables without any artificial additives or preservatives",
      icon: "🌿"
    },
    {
      title: "Retains Freshness & Nutrients",
      description: "Advanced processing methods preserve the natural vitamins and minerals",
      icon: "💚"
    },
    {
      title: "Easy Storage & Long Shelf Life",
      description: "Store conveniently for months without refrigeration while maintaining quality",
      icon: "📦"
    },
    {
      title: "Cost-Effective Alternative to Fresh Veggies",
      description: "Get the same nutritional benefits at a fraction of the cost of fresh vegetables",
      icon: "💰"
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://5.imimg.com/data5/ANDROID/Default/2024/12/476712000/XQ/YF/FG/237068812/product-jpeg-500x500.jpg')",
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        {/* Title Section with decorative dots */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-2 mr-6">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-200"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Benefits
            </h2>
            <div className="flex space-x-2 ml-6">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-400"></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover the exceptional advantages of our premium vegetable powders
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Unique Card Design */}
              <div className="relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/90 to-orange-50/90 backdrop-blur-sm rounded-3xl transform rotate-1 transition-transform duration-300 group-hover:rotate-2" />
                
                {/* Main Card */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 transition-all duration-300 group-hover:shadow-3xl group-hover:-translate-y-2">
                  {/* Icon */}
                  <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4 group-hover:text-amber-900 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    
                    <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-4 group-hover:via-amber-500 transition-colors duration-300" />
                    
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-ping" />
            <span className="text-white font-semibold text-lg">Premium Quality Guaranteed</span>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-ping" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}