"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const people = {
  attorneyGeneral: {
    name: 'H.E Justin Muturi',
    photo: 'https://www.statelaw.go.ke/wp-content/uploads/2023/03/Screenshot-from-2023-03-23-16-45-36.png',
    contactInfo: {
      phone: '123-456-7890',
      email: 'attorney@example.com',
    },
    socialMedia: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  directorOfParastatals: {
    name: 'Example This and That',
    photo: '', // Add an appropriate photo URL if available
    contactInfo: {
      phone: '123-456-7890',
      email: 'doparastatals@example.com',
    },
    socialMedia: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
};

const TalkToMyGovernment = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedPerson(null);
    }
  };

  return (
    <div className='yellow'>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl text-black font-extrabold text-center my-8">Talk to My Government</h1>

        {['Executive', 'Legislature', 'Judiciary', 'State Corporations & Parastatals', 'Foreign Relations of Kenya'].map((section, index) => (
          <section key={index} className="my-8 bg-black max-w-4xl mx-auto relative">
            <h2 className="font-normal font-poppins text-center mb-2" style={{ fontSize: '25px' }}>{section}</h2>
            <div className="flex flex-wrap justify-center mt-4 space-x-4">
              {section === 'Executive' && (
                <>
                  <Link 
                    href="/presidency" 
                    className="text-white font-poppins underline" 
                    style={{ fontSize: '20px', textDecorationColor: '#E0E21C' }}
                  >
                    The Presidency
                  </Link>
                  <button
                    onClick={() => setSelectedPerson('attorneyGeneral')}
                    className="text-white font-poppins underline"
                    style={{ fontSize: '20px', textDecorationColor: '#E0E21C' }}
                  >
                    The Attorney General
                  </button>
                  <Link 
                    href="/ministries" 
                    className="text-white font-poppins underline" 
                    style={{ fontSize: '20px', textDecorationColor: '#E0E21C' }}
                  >
                    The Ministries
                  </Link>
                </>
              )}
              {section === 'Legislature' && (
                <>
                  <Link 
                    href="national-assembly" 
                    className="text-white font-poppins underline" 
                    style={{ fontSize: '20px', textDecorationColor: '#E0E21C' }}
                  >
                    National Assembly
                  </Link>
                  <Link 
                    href="/senate" 
                    className="text-white font-poppins underline" 
                    style={{ fontSize: '20px', textDecorationColor: '#E0E21C' }}
                  >
                    Senate
                  </Link>
                </>
              )}
              {section === 'Judiciary' && (
                <>
                  <Link 
                    href="/judiciary" 
                    className="text-white underline" 
                    style={{ fontSize: '20px', textDecorationColor: '#E0E21C' }}
                  >
                    Superior Courts
                  </Link>
                  <Link 
                    href="/judiciary" 
                    className="text-white font-poppins underline" 
                    style={{ fontSize: '20px', textDecorationColor: '#E0E21C' }}
                  >
                    Subordinate Courts
                  </Link>
                </>
              )}
              {section === 'State Corporations & Parastatals' && (
                <button
                  onClick={() => setSelectedPerson('directorOfParastatals')}
                  className="text-white font-poppins underline"
                  style={{ fontSize: '20px', textDecorationColor: '#E0E21C' }}
                >
                  Director of the Parastatal
                </button>
              )}
              {section === 'Foreign Relations of Kenya' && (
                <Link 
                  href="/ambassadors" 
                  className="text-white font-poppins underline" 
                  style={{ fontSize: '20px', textDecorationColor: '#E0E21C' }}
                >
                  Ambassadors
                </Link>
              )}
            </div>

            <button className="absolute right-4 bottom-4 w-12 overflow-hidden flex items-center justify-center">
              <span className="h-8 w-12 bg-yellow-300 rotate-45 transform origin-top-right"></span>
            </button>
          </section>
        ))}

        {/* Popover for Selected Person */}
        {selectedPerson && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={handleOverlayClick}
          >
            <div className="bg-black p-8 max-w-4xl w-full flex min-h-[300px]">
              {/* Image Column */}
              <div className="flex-shrink-0 w-1/3 border-8">
                <img 
                  src={people[selectedPerson].photo} 
                  alt={people[selectedPerson].name} 
                  className="w-full h-full"
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

export default TalkToMyGovernment;
