import React from 'react';

const Partners: React.FC = () => {
  return (
    <div className="px-6 mb-20">
      <p className="text-center text-gray-600 mb-8">Trusted partners</p>
      
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
        <div className="text-gray-500 font-semibold">Hotel St. James</div>
        <div className="text-gray-500 font-semibold flex items-center gap-1">
          <span className="inline-block w-5 h-5 rounded-full bg-gray-500"></span>
          Wynyard Hotel
        </div>
        <div className="text-gray-500 font-semibold flex items-center gap-1">
          <span className="inline-block w-5 h-5 rounded-full bg-gray-500"></span>
          Starloka Hotel
        </div>
        <div className="text-gray-500 font-semibold">La Bella Hotel</div>
        <div className="text-gray-500 font-semibold">Hotel Palisade</div>
        <div className="text-gray-500 font-semibold flex items-center gap-1">
          <span className="inline-block w-5 h-5 rounded-full bg-gray-500"></span>
          Villa GreenSpace
        </div>
      </div>
    </div>
  );
};

export default Partners;