import React from 'react';
import { Link } from 'react-router-dom';
import { serviceCategories, servicesMetaDescription } from '../data/servicesData';
import ArrowIcon from '../components/icons/ArrowIcon';

export default function ServicesPage() {
  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="bg-white text-primary">
      <section className="bg-secondary text-accent">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold">Deep capability across strategy, technology, and growth</h1>
          <p className="text-base md:text-lg text-gray-200 max-w-4xl">
            We consolidate technology consulting, AI and automation, R and D and engineering, and creative growth systems
            into one accountable partner. Every track below is delivered by cross functional pods with senior operators.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={(e) => handleAnchorClick(e, category.id)}
              className="px-4 py-2 rounded-full border border-border bg-white text-sm font-medium text-gray-700 hover:bg-muted hover:text-primary transition-colors cursor-pointer"
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-16">
        {serviceCategories.map((category) => (
          <div key={category.id} id={category.id} className="scroll-mt-24">
            <div className="flex flex-col gap-3 mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{category.label}</p>
              <h2 className="text-2xl font-semibold">{category.label}</h2>
              <p className="text-gray-600 max-w-4xl">{category.description}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {category.services.map((service) => (
                <article key={service.title} className="border border-border rounded-2xl p-6 bg-white flex flex-col hover:bg-muted transition-colors">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">{service.description}</p>
                  {service.bullets && service.bullets.length > 0 && (
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Key outcomes</p>
                      <ul className="space-y-2 text-sm text-gray-700 list-none">
                        {service.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

