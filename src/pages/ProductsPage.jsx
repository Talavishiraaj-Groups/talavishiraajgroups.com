import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/productsData';
import ArrowIcon from '../components/icons/ArrowIcon';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === 'All' ? products : products.filter((product) => product.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Patented & Delivered':
        return 'bg-gray-100 text-gray-800 border border-gray-300';
      case 'Prototype Completed':
        return 'bg-gray-100 text-gray-800 border border-gray-300';
      case 'In Development':
        return 'bg-gray-100 text-gray-800 border border-gray-300';
      case 'Beta Ready':
      case 'Beta':
        return 'bg-gray-100 text-gray-800 border border-gray-300';
      case 'Research Phase':
        return 'bg-gray-100 text-gray-800 border border-gray-300';
      case 'Delivered in EdTech Setup':
        return 'bg-gray-100 text-gray-800 border border-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-300';
    }
  };

  return (
    <div className="bg-white text-primary">
      <section className="bg-secondary text-accent">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Products</p>
          <h1 className="text-3xl md:text-5xl font-semibold">Our product portfolio</h1>
          <p className="text-base md:text-lg text-gray-200 max-w-4xl">
            Innovative solutions designed to transform how businesses operate and grow. From AI-powered tools to automation platforms, we build products that deliver measurable impact.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors cursor-pointer ${
                selectedCategory === category
                  ? 'bg-primary text-accent border-primary'
                  : 'bg-white text-gray-700 border-border hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="border border-border rounded-2xl p-6 bg-white hover:bg-muted transition-colors flex flex-col"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{product.category}</span>
                <h3 className="text-xl font-semibold mb-2 mt-1">{product.title}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                  {product.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4 flex-1">{product.desc}</p>
              {product.features && product.features.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Features</p>
                  <ul className="space-y-2 text-sm text-gray-700 list-none">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

