import React from "react";
import { motion } from "framer-motion";
import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              Suriya.dev
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Building smart, scalable, and user-centric web applications that
              blend AI innovation with elegant design.
            </p>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-6 text-sm text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-400" />
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-600" />
            <div className="flex items-center space-x-2">
              <Coffee className="w-4 h-4 text-amber-400" />
              <span>Fueled by Coffee</span>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400"
          >
            <div>© {currentYear} Suriya Singaravel. All rights reserved.</div>
            <div className="flex space-x-6">
              <button className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-6 border-t border-white/5"
          >
            <p className="text-xs text-gray-500">
              Built with React, TypeScript, Tailwind CSS, and Framer Motion •
              Hosted with Vercel.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl" />
      </div>
    </footer>
  );
};

export default Footer;
