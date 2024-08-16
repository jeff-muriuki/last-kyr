import React from 'react';

function ImpactSection() {
  return (
    <div className="py-16" style={{ backgroundColor: 'rgba(224, 226, 28, 0.2)' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-12 text-left px-4 md:px-16">
          Impact
        </h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/5 flex flex-col items-center text-center p-4">
            <img
              src="Meeting Room.png"
              alt="Webinars and Workshops Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
              Webinars/Workshops
            </h3>
            <p className="text-base text-gray-600">
              200 attendees per event
            </p>
          </div>

          <div className="w-full sm:w-1/5 flex flex-col items-center text-center p-4">
            <img
              src="Gold Medal.png"
              alt="Success Stories Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
              Success Stories
            </h3>
            <p className="text-base text-gray-600">
              50 documented cases per year
            </p>
          </div>

          <div className="w-full sm:w-1/5 flex flex-col items-center text-center p-4">
            <img
              src="MultipleMessages.png"
              alt="User Testimonials Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
              User Testimonials
            </h3>
            <p className="text-base text-gray-600">
              200 positive testimonials per year
            </p>
          </div>

          <div className="w-full sm:w-1/5 flex flex-col items-center text-center p-4">
            <img
              src="Globe.png"
              alt="Regional Reach Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
              Regional Reach
            </h3>
            <p className="text-base text-gray-600">
              Active in 10 countries
            </p>
          </div>

          <div className="w-full sm:w-1/5 flex flex-col items-center text-center p-4">
            <img
              src="Download.png"
              alt="Downloads Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-poppins font-semibold text-gray-700 mb-2">
              Downloads
            </h3>
            <p className="text-base text-gray-600">
              1,000 resource downloads per month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImpactSection;
