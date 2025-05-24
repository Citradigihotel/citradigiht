import React from 'react';

const About: React.FC = () => {
  return (
    <div className="gradient-blue text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            
            <div className="mt-8">
              <img 
                src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern Hotel Website" 
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <p className="text-sm mb-4">
              Kami hadir untuk membantu hotel anda tampil profesional secara digital tanpa harus ribet dan mahal. Berawal dari kebutuhan teman pemilik homestay, kami merancang solusi website ringan, cepat, dan dilengkapi customer service AI yang siap melayani tamu 24 jam.
            </p>
            
            <p className="text-sm mb-4">
              Kami percaya setiap vila, guesthouse, hingga kos eksklusif layak memiliki brand digital—tanpa biaya besar.
            </p>
            
            <div className="flex gap-8 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <span>@jacksmith81</span>
              </div>
              <div className="flex items-center gap-2">
                <span>+880 5950 723</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About