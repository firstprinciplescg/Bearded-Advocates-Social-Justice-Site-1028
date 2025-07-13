import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiExternalLink, FiBook, FiUsers, FiShield, FiMegaphone, FiHeart } = FiIcons;

const Resources = () => {
  const resourceCategories = [
    {
      title: "Legal Aid & Know Your Rights",
      icon: FiShield,
      resources: [
        {
          name: "ACLU Know Your Rights",
          description: "Comprehensive guide to constitutional rights",
          url: "https://www.aclu.org/know-your-rights"
        },
        {
          name: "Immigration Legal Resource Center",
          description: "Legal resources for immigration issues",
          url: "https://www.ilrc.org/"
        },
        {
          name: "National Immigration Law Center",
          description: "Defending immigrant rights through litigation",
          url: "https://www.nilc.org/"
        }
      ]
    },
    {
      title: "Advocacy Organizations",
      icon: FiMegaphone,
      resources: [
        {
          name: "Indivisible",
          description: "Grassroots organizing for progressive change",
          url: "https://indivisible.org/"
        },
        {
          name: "MoveOn",
          description: "Progressive advocacy and campaign organization",
          url: "https://moveon.org/"
        },
        {
          name: "Common Cause",
          description: "Nonpartisan democracy reform organization",
          url: "https://www.commoncause.org/"
        }
      ]
    },
    {
      title: "Community Support",
      icon: FiHeart,
      resources: [
        {
          name: "Benefits.gov",
          description: "Find government benefits you may be eligible for",
          url: "https://www.benefits.gov/"
        },
        {
          name: "2-1-1",
          description: "Dial 2-1-1 for local community services and resources",
          url: "https://www.211.org/"
        },
        {
          name: "National Immigration Forum",
          description: "Immigration advocacy and community resources",
          url: "https://immigrationforum.org/"
        }
      ]
    },
    {
      title: "Voter Resources",
      icon: FiUsers,
      resources: [
        {
          name: "Vote.org",
          description: "Register to vote and find voting information",
          url: "https://vote.org/"
        },
        {
          name: "Ballotpedia Voter Guide",
          description: "Comprehensive election and candidate information",
          url: "https://ballotpedia.org/Sample_Ballot_Lookup"
        },
        {
          name: "Rock the Vote",
          description: "Voter registration and civic engagement",
          url: "https://www.rockthevote.org/"
        }
      ]
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            RESOURCES & <span className="text-orange-400">ALLIES</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            You're not fighting alone. Here are the organizations and resources that have our backs 
            (and deserve our support).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {resourceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={category.icon} className="text-3xl text-orange-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.resources.map((resource, resourceIndex) => (
                  <a
                    key={resourceIndex}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors duration-300 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors mb-2">
                          {resource.name}
                        </h4>
                        <p className="text-gray-300 text-sm">{resource.description}</p>
                      </div>
                      <SafeIcon icon={FiExternalLink} className="text-orange-400 text-lg ml-3 flex-shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-orange-500/10 border border-orange-500/30 rounded-lg p-8 text-center"
        >
          <SafeIcon icon={FiBook} className="text-4xl text-orange-400 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-white mb-4">Stay Informed, Stay Active</h3>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Knowledge is power, and power is what we need to create change. 
            Bookmark these resources, share them with fellow bearded warriors, 
            and most importantly—<span className="text-orange-400 font-bold">use them</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;