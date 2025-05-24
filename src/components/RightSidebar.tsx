import React from 'react';

const RightSidebar: React.FC = () => {
  return (
    <div className="gradient-blue text-white h-full px-8 py-8">
      <div className="mb-12">
        <p className="text-xs text-gray-200 mb-2">Recent projects</p>
        <h3 className="text-2xl font-bold">You name it, we ship<br />it makefast</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-xs mb-8">
        <div className="bg-white/10 px-3 py-2 rounded">Coworking</div>
        <div className="bg-white/10 px-3 py-2 rounded">Branding</div>
        <div className="bg-white/10 px-3 py-2 rounded">Logos & Icons</div>
        <div className="bg-white/10 px-3 py-2 rounded">Landing pages</div>
        <div className="bg-white/10 px-3 py-2 rounded">Websites</div>
        <div className="bg-white/10 px-3 py-2 rounded">Web apps</div>
        <div className="bg-white/10 px-3 py-2 rounded">Mobile apps</div>
        <div className="bg-white/10 px-3 py-2 rounded">Social media assets</div>
        <div className="bg-white/10 px-3 py-2 rounded">Finance/Fintech development</div>
        <div className="bg-white/10 px-3 py-2 rounded">more</div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="bg-white/10 rounded overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Project" 
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="bg-white/10 rounded overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Project" 
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="bg-white/10 rounded overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/5380668/pexels-photo-5380668.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Project" 
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="bg-white/10 rounded overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Project" 
            className="w-full h-40 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar