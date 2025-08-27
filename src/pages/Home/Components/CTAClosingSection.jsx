import React from 'react';
import { motion } from 'framer-motion';

export default function CTAClosingSection() {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Single Compact Card */}
        <motion.div
          className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl overflow-hidden shadow-2xl border border-orange-100"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/30 via-transparent to-amber-100/40"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-yellow-200/20 to-amber-300/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-6 sm:p-8 lg:p-12 text-center">
            {/* Title */}
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="flex space-x-1 mr-3">
                  <div className="w-2 h-2 bg-amber-800 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-amber-800 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-amber-800 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-800">
                  Ready to Get Started?
                </h2>
                <div className="flex space-x-1 ml-3">
                  <div className="w-2 h-2 bg-amber-800 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-amber-800 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-amber-800 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-5xl sm:text-6xl mb-4">🌿</div>
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                Experience the convenience of premium vegetable powders. Order for home cooking or partner with us for bulk supply with dedicated support.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Shop Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </motion.button>
              
              <motion.button
                className="bg-white hover:bg-gray-50 text-amber-700 px-8 py-4 rounded-xl border-2 border-amber-600 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Bulk Inquiry</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div 
              className="mt-8 sm:mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-6 py-3 border border-amber-200">
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
                <span className="text-amber-800 font-semibold text-sm">Trusted by 1000+ customers</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">⭐</span>
                  ))}
                </div>
                <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </div>

          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400"></div>
        </motion.div>
      </div>
    </div>
  );
}