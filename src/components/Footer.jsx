import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiMail, FiExternalLink } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">🧔</div>
              <div>
                <h3 className="text-xl font-bold text-orange-400">BGWBFK</h3>
                <p className="text-sm text-gray-400">Big Guys With Beards For Kindness</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Fighting for justice, one magnificent beard at a time. 
              Because kindness isn't weakness—it's our superpower.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#mission" className="block text-gray-300 hover:text-orange-400 transition-colors">Our Mission</a>
              <a href="#representatives" className="block text-gray-300 hover:text-orange-400 transition-colors">Find Representatives</a>
              <a href="#resources" className="block text-gray-300 hover:text-orange-400 transition-colors">Resources</a>
              <a href="#signup" className="block text-gray-300 hover:text-orange-400 transition-colors">Join Us</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@bgwbfk.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors"
              >
                <SafeIcon icon={FiMail} className="text-lg" />
                <span>hello@bgwbfk.com</span>
              </a>
              <p className="text-sm text-gray-400">
                Have questions? Ideas? Epic beard photos? We want to hear from you.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 BGWBFK. Made with <SafeIcon icon={FiHeart} className="inline text-orange-400 mx-1" /> and facial hair.
            </p>
            <p className="text-gray-400 text-sm">
              This is a grassroots advocacy site. We're not affiliated with any political party—just good humans.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;