import React from 'react';

const divisions = [
  {
    title: 'Infrastructure',
    desc: 'Building the foundation for tomorrow with robust, sustainable infrastructure solutions.',
  },
  {
    title: 'Technology',
    desc: 'Driving digital transformation with innovative tech and smart solutions.',
  },
  {
    title: 'Consulting',
    desc: 'Empowering businesses with expert advice and strategic guidance.',
  },
];

export default function Divisions() {
  return (
    <section id="divisions" className="bg-secondary px-8 py-16">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Divisions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {divisions.map((div, idx) => (
          <div key={div.title} className="rounded-lg bg-white shadow-md p-6 flex flex-col items-center">
            <div className="h-16 w-16 mb-4 bg-primary text-white flex items-center justify-center rounded-full text-2xl font-bold">
              {idx + 1}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">{div.title}</h3>
            <p className="text-text text-center">{div.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 