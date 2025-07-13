import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiShield, FiHeart, FiMegaphone } = FiIcons;

const Mission = () => {
  const issues = [
    {
      icon: FiShield,
      title: "Stop Illegal Arrests",
      description: "Because due process isn't just a suggestion, it's the law."
    },
    {
      icon: FiUsers,
      title: "Prevent Citizen Deportation",
      description: "Kidnapping Americans isn't immigration policy—it's a crime."
    },
    {
      icon: FiHeart,
      title: "Protect Public Benefits",
      description: "Medicaid and SNAP aren't luxuries. They're lifelines."
    },
    {
      icon: FiMegaphone,
      title: "Amplify Voices",
      description: "Your beard might be loud, but your voice needs to be louder."
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            OUR <span className="text-orange-400">MISSION</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Look, we get it. You didn't grow this magnificent facial forest to become a political activist. 
            But here's the thing: <span className="text-orange-400 font-bold">sometimes being a good human requires action.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {issues.map((issue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300"
            >
              <SafeIcon icon={issue.icon} className="text-4xl text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{issue.title}</h3>
              <p className="text-gray-300">{issue.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-orange-400 mb-4">The BGWBFK Promise</h3>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We promise to keep the beard jokes coming while we tackle the serious stuff. 
            Because fighting injustice doesn't mean we can't have fun doing it. 
            <span className="text-orange-400 font-semibold"> Big beards, bigger impact.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;