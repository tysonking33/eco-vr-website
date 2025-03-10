// src/components/IntroSection.js
import React from 'react';
import { Link } from 'react-router-dom';


function IntroSection() {
  return (
    <section id="hero" className="bg-blue-100 text-center py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Explore a Greener Future with VR</h2>
        <p className="text-lg mb-8">Join us in exploring an immersive virtual world where primary school students learn about sustainable practices and envision a more eco-friendly world.</p>
        <Link to="/page_b">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
}

export default IntroSection;
