import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaChartLine, FaAward } from 'react-icons/fa';
import logo from '../assets/logo.png';

const features = [
  {
    icon: <FaLightbulb className="text-3xl text-accent" />,
    title: "Innovation First",
    description: "Pioneering cutting-edge solutions that drive business transformation"
  },
  {
    icon: <FaUsers className="text-3xl text-accent" />,
    title: "Expert Team",
    description: "Skilled professionals passionate about delivering exceptional results"
  },
  {
    icon: <FaChartLine className="text-3xl text-accent" />,
    title: "Growth Focused",
    description: "Solutions designed to scale with your business needs"
  },
  {
    icon: <FaAward className="text-3xl text-accent" />,
    title: "Quality Excellence",
    description: "Maintaining highest standards in every project we undertake"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About <span className="text-accent">Talavishiraaj Groups</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A forward-thinking organization committed to excellence and innovation across multiple sectors
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-6">
              Where Vision Meets Innovation
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Talavishiraaj Groups is a forward-thinking organization committed to excellence and innovation 
                across multiple sectors. Our journey is defined by a passion for quality, a vision for the 
                future, and a dedication to our clients and partners.
              </p>
              <p>
                We believe in transforming ideas into reality, leveraging cutting-edge technology to solve 
                complex business challenges and drive sustainable growth for our clients.
              </p>
              <p>
                Our team combines creativity with technical expertise to deliver solutions that not only meet 
                current needs but also anticipate future challenges and opportunities.
              </p>
            </div>

            {/* Key strengths */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { title: "Innovation", description: "Cutting-edge solutions" },
                { title: "Quality", description: "Excellence in delivery" },
                { title: "Growth", description: "Scalable solutions" },
                { title: "Partnership", description: "Long-term relationships" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-white rounded-lg shadow-md"
                >
                  <div className="text-xl font-bold text-primary">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Logo/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="bg-gradient-to-br from-white to-accent p-8 rounded-full shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={logo} 
                  alt="Talavishiraaj Logo" 
                  className="h-48 w-48 object-contain" 
                />
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 