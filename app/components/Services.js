import React from 'react';

function Services() {
  return (
    <div className="py-16" style={{ backgroundColor: 'rgba(224, 226, 28, 0.2)' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-black mb-12 text-left px-4 md:px-16">
          Services
        </h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-start text-left p-4">
            <div className="bg-black text-white p-4 rounded-md mb-4" style={{ width: '300px' }}>
              Legal Education
            </div>
            <div className="bg-black text-white p-4 rounded-md mb-4" style={{ width: '300px' }}>
              Legal Assistance
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-start text-left p-4">
            <div className="bg-black text-white p-4 rounded-md mb-4" style={{ width: '300px' }}>
              Community Engagement
            </div>
            <div className="bg-black text-white p-4 rounded-md mb-4" style={{ width: '300px' }}>
              Advocacy and Awareness
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col items-start text-left p-4">
            <div className="bg-black text-white p-4 rounded-md mb-4" style={{ width: '300px' }}>
              Resource Access
            </div>
            <div className="bg-black text-white p-4 rounded-md mb-4" style={{ width: '300px' }}>
              User Support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;



