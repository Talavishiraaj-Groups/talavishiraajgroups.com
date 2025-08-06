import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Talavishiraaj Groups delivered beyond our expectations. Their expertise in AI and web development is unmatched.',
    name: 'Priya S.',
    role: 'CTO, FinTech Startup',
  },
  {
    quote: 'Professional, innovative, and always on time. Highly recommended for any tech project.',
    name: 'Rahul M.',
    role: 'Founder, HealthTech Solutions',
  },
  {
    quote: 'Their consulting and R&D support helped us launch our product faster and smarter.',
    name: 'Ananya D.',
    role: 'Product Manager, EduTech Co.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white px-8 py-16">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            className="rounded-lg bg-secondary shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <p className="text-text italic mb-4">"{t.quote}"</p>
            <span className="font-semibold text-primary">{t.name}</span>
            <span className="text-xs text-gray-500">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 