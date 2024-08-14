"use client";

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const people = {
  president: {
    name: 'H.E William Ruto',
    photo: 'https://www.president.go.ke/wp-content/uploads/administration.jpg',
    contactInfo: {
      phone: '123-456-7890',
      email: 'president@example.com',
    },
    socialMedia: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  deputyPresident: {
    name: 'H.E Rigathi Gachagua',
    photo: 'https://www.president.go.ke/wp-content/uploads/IMG_20221101_210855.jpg',
    contactInfo: {
      phone: '098-765-4321',
      email: 'deputy@example.com',
    },
    socialMedia: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
};

const Presidency = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Close the popup when clicking outside of it
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedPerson(null);
    }
  };

  return (
    <div>
      <main className="p-8 pb-40 bg-white">
        <h1 className="text-4xl text-black font-bold text-center mt-8 mb-24 font-poppins">
          The Presidency
        </h1>

        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={() => setSelectedPerson('president')}
            className="w-full max-w-lg py-8 px-8 yellow text-center text-black font-bold border rounded-full shadow-md border-black"
          >
            The President
          </button>
          <button
            onClick={() => setSelectedPerson('deputyPresident')}
            className="w-full max-w-lg px-8 py-8 yellow text-center text-black font-bold border rounded-full shadow-md border-black"
          >
            The Deputy President
          </button>
        </div>
        
        {selectedPerson && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={handleOverlayClick} // Close the popup on overlay click
          >
            <div className="bg-black p-8 max-w-4xl w-full flex min-h-[300px]">
              {/* Image Column */}
              <div className="flex-shrink-0 w-1/3 border-8 border-yellow">
                <img 
                  src={people[selectedPerson].photo} 
                  alt={people[selectedPerson].name} 
                  className="w-full h-auto"
                />
              </div>

              {/* Details Column */}
              <div className="w-2/3 pl-8">
                <h2 className="text-xl font-bold mb-4 text-white">{people[selectedPerson].name}</h2>

                <div className="mb-4 text-white">
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-gray-400" />
                    <span>{people[selectedPerson].contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <FaEnvelope className="text-gray-400" />
                    <span>{people[selectedPerson].contactInfo.email}</span>
                  </div>
                </div>

                <div className="flex space-x-4 mb-4 text-white">
                  {Object.entries(people[selectedPerson].socialMedia).map(([platform, url]) => (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400">
                      {platform === 'facebook' && <FaFacebook />}
                      {platform === 'twitter' && <FaTwitter />}
                      {platform === 'instagram' && <FaInstagram />}
                      {platform === 'linkedin' && <FaLinkedin />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Presidency;
