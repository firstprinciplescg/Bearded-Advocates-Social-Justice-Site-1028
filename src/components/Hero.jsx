import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowDown, FiHeart, FiShield } = FiIcons;

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-8xl mb-4">🧔</div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 leading-tight">
            BIG<span className="text-orange-400">BEARDS</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-orange-300 mb-6">
            BIGGER HEARTS
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed">
            Think your beard makes you intimidating? <span className="text-orange-400 font-bold">Good.</span> 
            Now let's use that power for something that actually matters.
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We're big guys with beards who believe kindness isn't weakness—it's our superpower. 
            Join the movement fighting against policies that harm our communities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <a
            href="#signup"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <SafeIcon icon={FiHeart} className="text-2xl" />
            <span>JOIN THE MOVEMENT</span>
          </a>
          <a
            href="#mission"
            className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-gray-900 px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 flex items-center space-x-2"
          >
            <SafeIcon icon={FiShield} className="text-2xl" />
            <span>LEARN MORE</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="animate-bounce"
        >
          <SafeIcon icon={FiArrowDown} className="text-4xl text-orange-400 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;