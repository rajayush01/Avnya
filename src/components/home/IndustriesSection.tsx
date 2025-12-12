import React from 'react';

const IndustriesSection = () => {
  const industries = [
    'Warehouses', 'Industrial Buildings', 'Godowns', 'Shopping Malls',
    'Supermarkets', 'Rice Mills', 'Oil Extraction Units', 'Stadiums',
    'Sports Complexes', 'Cold Storage', 'Aircraft Hangars', 'School Buildings', 'Showrooms'
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-110 cursor-default text-sm sm:text-base animate-fadeInUp"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;