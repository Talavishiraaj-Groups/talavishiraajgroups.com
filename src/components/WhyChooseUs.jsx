import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaHandshake, FaLightbulb, FaUserShield, FaRocket, FaUsers, FaChartLine, FaHeart } from 'react-icons/fa';

const points = [
  {
    icon: <FaAward className="text-4xl text-accent" />,
    title: 'Proven Expertise',
    desc: 'Skilled professionals delivering innovative solutions with measurable results.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: <FaHandshake className="text-4xl text-accent" />,
    title: 'Trusted Partnerships',
    desc: 'Building long-term collaborations with clients and institutions worldwide.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: <FaLightbulb className="text-4xl text-accent" />,
    title: 'Innovation-Driven',
    desc: 'Constantly evolving with the latest technology and industry best practices.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: <FaUserShield className="text-4xl text-accent" />,
    title: 'Integrity & Security',
    desc: 'Commitment to transparency, privacy, and secure solutions for all clients.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: <FaRocket className="text-4xl text-accent" />,
    title: 'Fast Delivery',
    desc: 'Rapid development cycles with agile methodologies and quick turnaround times.',
    color: 'from-red-400 to-pink-500'
  },
  {
    icon: <FaUsers className="text-4xl text-accent" />,
    title: 'Expert Team',
    desc: 'Skilled professionals with diverse expertise across multiple technology domains.',
    color: 'from-indigo-400 to-purple-500'
  },
  {
    icon: <FaChartLine className="text-4xl text-accent" />,
    title: 'Measurable Results',
    desc: 'Data-driven approach ensuring every project delivers quantifiable business value.',
    color: 'from-teal-400 to-blue-500'
  },
  {
    icon: <FaHeart className="text-4xl text-accent" />,
    title: 'Client-Centric',
    desc: 'Dedicated to understanding and exceeding client expectations at every step.',
    color: 'from-rose-400 to-red-500'
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-secondary via-primary to-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-accent">Talavishiraaj Groups</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={point.title}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
              
              <div className="relative z-10">
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                    {point.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {point.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional value propositions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">What Sets Us Apart</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Innovation", description: "Cutting-edge technology solutions" },
                { title: "Quality", description: "Excellence in every project" },
                { title: "Partnership", description: "Long-term client relationships" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-accent mb-2">{item.title}</div>
                  <div className="text-gray-800 text-sm">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
