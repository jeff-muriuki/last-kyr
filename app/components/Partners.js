import React from 'react';

function Partners() {
  return (
    <div className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-12 text-left px-4 md:px-16">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/4 flex flex-col items-center text-center p-4">
            <img
              src="moringa.png"
              alt="Partner 1"
              className="w-29 h-24 mb-4"
            />
          </div>
          <div className="w-full sm:w-1/4 flex flex-col items-center text-center p-4">
            <img
              src="hill.png"
              alt="Partner 2"
              className="w-29 h-29 mb-4"
            />
          </div>
          <div className="w-full sm:w-1/4 flex flex-col items-center text-center p-4">
            <img
              src="meru.png"
              alt="Partner 3"
              className="w-35 h-24 mb-6"
            />
          </div>
          <div className="w-full sm:w-1/4 flex flex-col items-center text-center p-4">
            <img
              src="africa.png"
              alt="Partner 4"
              className="w-30 h-24 mb-4"
            />
          </div>

          <div className="w-full sm:w-1/4 flex flex-col items-center text-center p-4">
            <img
              src="mwaura.png"
              alt="Partner 5"
              className="w-30 h-24 mb-4"
            />
          </div>
          <div className="w-full sm:w-1/4 flex flex-col items-center text-center p-4">
            <img
              src="research.png"
              alt="Partner 6"
              className="w-30 h-24 mb-4"
            />
          </div>
          <div className="w-full sm:w-1/4 flex flex-col items-center text-center p-4">
            <img
              src="talk.png"
              alt="Partner 7"
              className="w-24 h-24 mb-4"
            />
          </div>
          <div className="w-full sm:w-1/4 flex flex-col items-center text-center p-4">
            <img
              src="tabler.png"
              alt="Partner 8"
              className="w-24 h-24 mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
