import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiExternalLink, FiPhone, FiMapPin, FiStar } = FiIcons;

const Representatives = () => {
  const resources = [
    {
      title: "Find Your Federal Representatives",
      description: "Senators and House members who need to hear from you",
      url: "https://www.congress.gov/members/find-your-member",
      type: "Federal"
    },
    {
      title: "State & Local Officials",
      description: "Governors, state legislators, mayors, and city councils",
      url: "https://www.usa.gov/elected-officials",
      type: "State/Local"
    },
    {
      title: "Ballotpedia",
      description: "Comprehensive database of all elected officials",
      url: "https://ballotpedia.org/",
      type: "All Levels"
    },
    {
      title: "5 Calls",
      description: "Pre-written scripts and direct phone numbers",
      url: "https://5calls.org/",
      type: "Action Tool"
    }
  ];

  const tips = [
    "Call during business hours (9 AM - 5 PM) for better response rates",
    "Be polite but firm. Staffers are people too, even if their boss isn't acting like it",
    "State your name, city, and that you're a constituent",
    "Keep it short and specific. Think elevator pitch, not beard-growing timeline",
    "Follow up with emails and letters for a paper trail"
  ];

  return (
    <section id="representatives" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            FIND YOUR <span className="text-orange-400">TARGETS</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Time to put those representatives to work. They work for YOU, not the other way around. 
            <span className="text-orange-400 font-bold"> Let's remind them.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-orange-500/50 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {resource.title}
                </h3>
                <SafeIcon icon={FiExternalLink} className="text-orange-400 text-xl flex-shrink-0 ml-2" />
              </div>
              <p className="text-gray-300 mb-3">{resource.description}</p>
              <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold">
                {resource.type}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-8"
        >
          <div className="flex items-center mb-6">
            <SafeIcon icon={FiPhone} className="text-3xl text-orange-400 mr-4" />
            <h3 className="text-3xl font-bold text-white">Pro Tips for Contacting Reps</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <SafeIcon icon={FiStar} className="text-orange-400 text-lg mt-1 flex-shrink-0" />
                <p className="text-gray-200">{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Representatives;