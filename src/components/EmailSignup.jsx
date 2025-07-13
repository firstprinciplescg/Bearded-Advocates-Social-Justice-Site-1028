import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiCheck, FiArrowRight } = FiIcons;

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, you'd send this to your email service
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="signup" className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            JOIN THE <span className="text-yellow-300">BROTHERHOOD</span>
          </h2>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Get action alerts, talking points, and beard maintenance tips. 
            <br className="hidden sm:block" />
            <span className="text-yellow-300 font-bold">Just kidding about the beard tips.</span> 
            (But seriously, we'll keep you informed.)
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <SafeIcon icon={FiMail} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@beard.com"
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg font-medium placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <SafeIcon icon={FiCheck} className="text-xl" />
                  <span>WELCOME!</span>
                </>
              ) : (
                <>
                  <span>SIGN ME UP</span>
                  <SafeIcon icon={FiArrowRight} className="text-xl" />
                </>
              )}
            </motion.button>
          </div>
        </motion.form>

        <motion.p
          className="text-orange-100 mt-6 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          We respect your inbox as much as we respect your beard. No spam, ever.
        </motion.p>
      </div>
    </section>
  );
};

export default EmailSignup;