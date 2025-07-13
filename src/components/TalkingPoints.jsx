import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMessageSquare, FiCopy, FiCheck, FiChevronDown, FiChevronUp } = FiIcons;

const TalkingPoints = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  const talkingPoints = [
    {
      title: "Illegal Arrests & Due Process",
      points: [
        "I'm calling to express my strong opposition to any policies that undermine due process rights and lead to illegal arrests.",
        "Due process is a constitutional right that protects all Americans, regardless of their background or status.",
        "I urge you to support legislation that ensures proper legal procedures are followed in all arrests and detentions.",
        "Illegal arrests erode public trust in law enforcement and our justice system."
      ]
    },
    {
      title: "Preventing Citizen Deportation",
      points: [
        "I'm deeply concerned about reports of U.S. citizens being wrongfully detained or deported.",
        "Deporting American citizens is not immigration enforcement—it's kidnapping and a violation of their constitutional rights.",
        "I urge you to support stronger verification processes to protect citizens from wrongful deportation.",
        "Every American deserves the protection of their citizenship, regardless of their name, appearance, or accent."
      ]
    },
    {
      title: "Protecting Public Benefits",
      points: [
        "I'm calling to urge you to protect vital programs like Medicaid and SNAP that millions of Americans depend on.",
        "These programs provide essential healthcare and nutrition support for working families, seniors, and children.",
        "Cutting these benefits would harm our most vulnerable community members and damage our local economy.",
        "I ask that you vote against any legislation that would reduce funding or eligibility for these critical programs."
      ]
    },
    {
      title: "General Advocacy",
      points: [
        "As your constituent, I expect you to stand up for policies that protect all members of our community.",
        "I'm watching your voting record closely and will remember your positions when I vote.",
        "Our community values compassion, justice, and protecting the vulnerable—I hope you share these values.",
        "I urge you to listen to constituents like me who believe in building a more just and equitable society."
      ]
    }
  ];

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            TALKING <span className="text-orange-400">POINTS</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Not sure what to say? We've got you covered. 
            Copy these scripts or use them as inspiration to craft your own message.
          </p>
        </motion.div>

        <div className="space-y-6">
          {talkingPoints.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-600 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiMessageSquare} className="text-2xl text-orange-400" />
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                </div>
                <SafeIcon 
                  icon={expandedSections[sectionIndex] ? FiChevronUp : FiChevronDown} 
                  className="text-2xl text-orange-400" 
                />
              </button>
              
              {expandedSections[sectionIndex] && (
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    {section.points.map((point, pointIndex) => (
                      <div 
                        key={pointIndex}
                        className="bg-gray-600 p-4 rounded-lg"
                      >
                        <p className="text-gray-200 mb-3 leading-relaxed">{point}</p>
                        <button
                          onClick={() => copyToClipboard(point, `${sectionIndex}-${pointIndex}`)}
                          className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors duration-200"
                        >
                          <SafeIcon 
                            icon={copiedIndex === `${sectionIndex}-${pointIndex}` ? FiCheck : FiCopy} 
                            className="text-lg" 
                          />
                          <span className="text-sm font-medium">
                            {copiedIndex === `${sectionIndex}-${pointIndex}` ? 'Copied!' : 'Copy'}
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 text-center"
        >
          <h3 className="text-2xl font-bold text-orange-400 mb-4">Remember the BGWBFK Way</h3>
          <p className="text-lg text-gray-200 leading-relaxed">
            Be firm but respectful. You're representing all of us bearded warriors for justice. 
            <span className="text-orange-400 font-semibold"> Make us proud.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TalkingPoints;