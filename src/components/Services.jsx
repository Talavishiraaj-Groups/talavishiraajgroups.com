import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBrain, FaGlobe, FaMobileAlt, FaRobot, FaCogs, FaBoxes, FaShieldAlt, FaMicrosoft, FaDraftingCompass, FaFlask, FaSyncAlt, FaUserTie, FaPalette, FaPenNib, FaBullhorn, FaChartLine
} from 'react-icons/fa';

const serviceCategories = [
  {
    label: 'Tech Services',
    id: 'tech',
    services: [
      {
        icon: <FaBrain className="text-4xl text-accent mb-4" aria-label="AI & Machine Learning icon" />,
        title: 'AI & Machine Learning',
        description: 'NLP, Vision AI, Chatbots, Prediction for business growth.',
        bullets: [
          'Custom AI solutions',
          'Advanced analytics',
          'OCR & Vision AI',
          'Model training',
        ],
        color: 'from-purple-500 to-pink-500',
      },
      {
        icon: <FaGlobe className="text-4xl text-accent mb-4" aria-label="Web Development icon" />,
        title: 'Web Development',
        description: 'Corporate sites, SaaS, CMS. SEO-first, secure, scalable.',
        bullets: [
          'SEO-first builds',
          'Modern frameworks',
          'Security best practices',
          'Scalable architecture',
        ],
        color: 'from-blue-500 to-cyan-500',
      },
      {
        icon: <FaMobileAlt className="text-4xl text-accent mb-4" aria-label="Mobile Apps icon" />,
        title: 'Mobile Apps',
        description: 'iOS, Android, Cross-platform. UI/UX optimized.',
        bullets: [
          'React Native & Flutter',
          'UI/UX best practices',
          'Cross-platform',
        ],
        color: 'from-green-500 to-emerald-500',
      },
      {
        icon: <FaRobot className="text-4xl text-accent mb-4" aria-label="Automation Solutions icon" />,
        title: 'Automation Solutions',
        description: 'Business & backend automation, workflow bots.',
        bullets: [
          'n8n, Zapier, CRON',
          'API integrations',
          'No-code automation',
          'Workflow bots',
        ],
        color: 'from-yellow-400 to-orange-400',
      },
      {
        icon: <FaCogs className="text-4xl text-accent mb-4" aria-label="Custom Software Development icon" />,
        title: 'Custom Software Development',
        description: 'Tailored internal tools & systems for your needs.',
        bullets: [
          'Automation & integrations',
          'Desktop/web apps',
          'Process optimization',
        ],
        color: 'from-indigo-500 to-purple-500',
      },
      {
        icon: <FaBoxes className="text-4xl text-accent mb-4" aria-label="White-label Solutions icon" />,
        title: 'White-label Solutions',
        description: 'Rebrandable SaaS & products for resellers.',
        bullets: [
          'Reseller kits',
          'Custom dashboards',
          'Licensed delivery',
        ],
        color: 'from-gray-700 to-gray-400',
      },
      {
        icon: <FaShieldAlt className="text-4xl text-accent mb-4" aria-label="Data Analytics & Security icon" />,
        title: 'Data Analytics & Security',
        description: 'Data pipelines, ETL, dashboards, compliance.',
        bullets: [
          'Business intelligence',
          'Compliance & audits',
          'Threat analysis',
        ],
        color: 'from-teal-500 to-blue-500',
      },
      {
        icon: <FaMicrosoft className="text-4xl text-accent mb-4" aria-label="Microsoft Dynamics & ERP icon" />,
        title: 'Microsoft Dynamics & ERP',
        description: 'Dynamics 365/Business Central deployment & support.',
        bullets: [
          'Module setup',
          'Ongoing support',
          'Custom deployment',
        ],
        color: 'from-blue-800 to-blue-400',
      },
      {
        icon: <FaDraftingCompass className="text-4xl text-accent mb-4" aria-label="Mechanical Design & Simulation icon" />,
        title: 'Mechanical Design & Simulation',
        description: 'CAD, FEA, prototyping, real-world analysis.',
        bullets: [
          'Design validation',
          '3D modeling',
          'Simulation & prototyping',
        ],
        color: 'from-orange-500 to-red-500',
      },
    ],
  },
  {
    label: 'R&D + Consulting',
    id: 'rnd',
    services: [
      {
        icon: <FaFlask className="text-4xl text-accent mb-4" aria-label="R&D and Product Innovation icon" />,
        title: 'R&D and Product Innovation',
        description: 'MVP creation, GTM testing, prototyping.',
        bullets: [
          'Innovation as a service',
          'Market fit testing',
          'Hardware-software prototyping',
        ],
        color: 'from-pink-500 to-fuchsia-500',
      },
      {
        icon: <FaSyncAlt className="text-4xl text-accent mb-4" aria-label="Digital Transformation icon" />,
        title: 'Digital Transformation',
        description: 'Cloud, modernization, digital ops, change mgmt.',
        bullets: [
          'Roadmap & strategy',
          'Change management',
          'Cloud-native apps',
        ],
        color: 'from-cyan-500 to-blue-500',
      },
      {
        icon: <FaUserTie className="text-4xl text-accent mb-4" aria-label="Business & Innovation Consulting icon" />,
        title: 'Business & Innovation Consulting',
        description: 'Strategy + tech validation for founders, B2B.',
        bullets: [
          'Pitch decks',
          'Growth models',
          'Feasibility studies',
        ],
        color: 'from-yellow-600 to-yellow-400',
      },
    ],
  },
  {
    label: 'Creative & Growth Services',
    id: 'creative',
    services: [
      {
        icon: <FaPalette className="text-4xl text-accent mb-4" aria-label="UI/UX & Brand Identity icon" />,
        title: 'UI/UX & Brand Identity',
        description: 'Logos, systems, wireframes, product UIs.',
        bullets: [
          'Modern & responsive',
          'Scalable design',
          'User-first approach',
        ],
        color: 'from-rose-400 to-pink-400',
      },
      {
        icon: <FaPenNib className="text-4xl text-accent mb-4" aria-label="Content & SEO Strategy icon" />,
        title: 'Content & SEO Strategy',
        description: 'Copywriting, blogs, technical SEO, schema.',
        bullets: [
          'Indexing & schema',
          'Keyword targeting',
          'Semantic writing',
        ],
        color: 'from-yellow-400 to-orange-300',
      },
      {
        icon: <FaBullhorn className="text-4xl text-accent mb-4" aria-label="Social Media & Marketing icon" />,
        title: 'Social Media & Marketing',
        description: 'LinkedIn, Instagram, video, ads, automation.',
        bullets: [
          'Content calendars',
          'Post automation',
          'Growth funnels',
        ],
        color: 'from-blue-400 to-indigo-400',
      },
      {
        icon: <FaChartLine className="text-4xl text-accent mb-4" aria-label="SaaS Growth & Funnels icon" />,
        title: 'SaaS Growth & Funnels',
        description: 'LP optimization, onboarding, analytics.',
        bullets: [
          'Demo flows',
          'Conversion-first design',
          'Retargeting',
        ],
        color: 'from-green-400 to-teal-400',
      },
    ],
  },
];

function handleScrollToContact() {
  const contact = document.getElementById('contact');
  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-light-bg to-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-primary drop-shadow mb-6">
            Our <span className="text-accent drop-shadow">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our full suite of professional, technical, and creative services.
          </p>
        </motion.div>

        {serviceCategories.map((cat, catIdx) => (
          <motion.section
            key={cat.id}
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: catIdx * 0.1 }}
            aria-labelledby={`category-${cat.id}`}
          >
            <h3 id={`category-${cat.id}`} className="inline-block text-2xl md:text-3xl font-extrabold text-primary drop-shadow-lg mb-8 text-left bg-white/80 rounded-xl px-6 py-2 shadow-md backdrop-blur-sm">
              {cat.label}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" role="list">
              {cat.services.map((service, idx) => (
                <li key={service.title} className="h-full">
                  <motion.article
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    aria-labelledby={`service-${cat.id}-${idx}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} aria-hidden="true" />
                    <div className="relative p-8 h-full flex flex-col">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                      </div>
                      <h4 id={`service-${cat.id}-${idx}`} className="text-xl font-bold text-primary drop-shadow mb-4 text-center group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-4" aria-label="Key features">
                        {service.bullets.map((point, i) => (
                          <motion.li
                            key={point}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: (idx * 0.1) + (i * 0.05) }}
                            className="flex items-start gap-3"
                          >
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <motion.button
                        className="mt-auto w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Get started with ${service.title}`}
                        onClick={handleScrollToContact}
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </motion.article>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <motion.button
              className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Start your journey with Talavishiraaj Groups"
              onClick={handleScrollToContact}
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 