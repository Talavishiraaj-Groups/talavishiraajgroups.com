import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TechnologyPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect users visiting /technology to the Technology and AI section on Services
    if (location.pathname === '/technology') {
      navigate('/services#tech', { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="bg-white text-primary">
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold text-black">Technology capabilities live under Services</h1>
        <p className="text-base text-gray-700 leading-relaxed max-w-3xl">
          Our technology and AI work is part of the Services view. You will be redirected to the Technology and AI
          section of our Services page.
        </p>
      </main>
    </div>
  );
}


