import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaBoxes, FaLock, FaRobot, FaChartPie, FaSearch, FaVideo, FaChalkboardTeacher } from 'react-icons/fa';

const products = [
  {
    icon: <FaRocket className="text-4xl text-accent mb-4" />,
    title: 'Blindman Stick Using AI',
    category: 'Assistive Technology',
    description: 'AI-powered smart stick designed for the visually impaired, offering real-time obstacle detection and navigation.',
    features: [
      'Ultrasonic + Vibration + Camera-based detection',
      'Image processing with ESP32-CAM',
      'Voice alerts & feedback via Python',
      'Patent filed with innovative AIML integration'
    ],
    status: 'Patented & Delivered',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    icon: <FaBoxes className="text-4xl text-accent mb-4" />,
    title: 'OmniInventory',
    category: 'AI Inventory Management',
    description: 'Smart inventory system powered by AI to track, analyze, and optimize stock for SMEs and enterprises.',
    features: [
      'Automated stock insights & predictions',
      'AI-driven restocking alerts',
      'Visual dashboard & reports',
      'Multi-location support'
    ],
    status: 'Prototype Completed',
    color: 'from-emerald-500 to-green-600'
  },
  {
    icon: <FaLock className="text-4xl text-accent mb-4" />,
    title: 'SecureFlow',
    category: 'AI + Cybersecurity',
    description: 'Automated workflow system with security compliance and AI triggers for enterprise operations.',
    features: [
      'Anomaly detection & activity logging',
      'API security integration',
      'Automation with AI-driven actions'
    ],
    status: 'In Development',
    color: 'from-red-500 to-rose-600'
  },
  {
    icon: <FaRobot className="text-4xl text-accent mb-4" />,
    title: 'SmartBot Assist',
    category: 'Conversational AI',
    description: 'Multilingual AI chatbot for support, helpdesk, and automation.',
    features: [
      'NLP + AIML conversation engine',
      'Workflow integrations',
      'Context-aware responses'
    ],
    status: 'Beta Ready',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: <FaChartPie className="text-4xl text-accent mb-4" />,
    title: 'InsightHub',
    category: 'Business Intelligence',
    description: 'Data-driven insights platform with AI-powered reports and predictive analytics.',
    features: [
      'Real-time KPIs',
      'Custom business insights',
      'Forecasting & dashboards'
    ],
    status: 'In Development',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: <FaSearch className="text-4xl text-accent mb-4" />,
    title: 'AutoPilot Research Engine',
    category: 'R&D Automation',
    description: 'Autonomous AI tool that scrapes and summarizes from web and video for research workflows.',
    features: [
      'OCR + video content summarizer',
      'Prompt learning engine',
      'Autonomous browsing + extraction'
    ],
    status: 'Research Phase',
    color: 'from-indigo-500 to-blue-800'
  },
  {
    icon: <FaVideo className="text-4xl text-accent mb-4" />,
    title: 'Voice2Video Creator',
    category: 'AI Video Automation',
    description: 'AI-based video creator converting text/voice into SEO-ready videos with thumbnails and captions.',
    features: [
      'Voiceover + Thumbnail AI',
      'YouTube Shorts automation',
      'Script to video converter'
    ],
    status: 'Beta',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: <FaChalkboardTeacher className="text-4xl text-accent mb-4" />,
    title: 'AIM-Insight Panel',
    category: 'Learning Analytics',
    description: 'AI dashboard for learners and institutions to track skills, learning gaps, and performance.',
    features: [
      'Skill-gap detection',
      'Performance tracking',
      'Progress visualizations'
    ],
    status: 'Delivered in EdTech Setup',
    color: 'from-fuchsia-500 to-violet-600'
  }
];

const categories = [
  'All',
  ...Array.from(new Set(products.map(p => p.category)))
];

function handleScrollToContact() {
  const contact = document.getElementById('contact');
  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Patented & Delivered':
        return 'bg-green-100 text-green-800';
      case 'Prototype Completed':
        return 'bg-blue-100 text-blue-800';
      case 'In Development':
        return 'bg-yellow-100 text-yellow-800';
      case 'Beta Ready':
      case 'Beta':
        return 'bg-purple-100 text-purple-800';
      case 'Research Phase':
        return 'bg-orange-100 text-orange-800';
      case 'Delivered in EdTech Setup':
        return 'bg-fuchsia-100 text-fuchsia-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our <span className="text-accent">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions designed to transform how businesses operate and grow
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {product.title}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                    {product.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (idx * 0.1) + (index * 0.05) }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleScrollToContact}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Our Products?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get early access and be the first to experience our innovative solutions
            </p>
            <motion.button
              className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToContact}
            >
              Request Early Access
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 