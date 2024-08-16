"use client";

import { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Presidency = () => {
  const [members, setMembers] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("https://necessary-card-750e65ba7c.strapiapp.com/api/members");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Debugging: Check the structure of the data
        console.log(data);

        // Ensure that `data.data` exists and is an array
        if (Array.isArray(data.data)) {
          const membersList = data.data.map(member => ({
            id: member.id,
            name: member.attributes.Name,
            email: member.attributes.Email,
            phone: member.attributes.Phone_Number,
            // Updated photo URLs
            photo: member.attributes.Name.includes('William Samoei Ruto') 
              ? 'https://www.president.go.ke/wp-content/uploads/administration.jpg' 
              : member.attributes.Name.includes('Rigathi Gachagua') 
              ? 'https://www.president.go.ke/wp-content/uploads/IMG_20221101_210855.jpg' 
              : 'https://via.placeholder.com/150', // Default placeholder
            // Use placeholder links for social media
            socialMedia: {
              facebook: '#',
              twitter: '#',
              instagram: '#',
              linkedin: '#',
            },
          }));

          // You might need to manually set roles based on names or some other logic
          const mappedMembers = {
            president: membersList.find(member => member.name.includes('William Samoei Ruto')),
            deputyPresident: membersList.find(member => member.name.includes('Rigathi Gachagua')),
          };

          setMembers(mappedMembers);
        } else {
          throw new Error("Unexpected data structure");
        }
      } catch (error) {
        console.error("Error fetching members:", error.message);
      }
    };

    fetchMembers();
  }, []);

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
        
        {selectedPerson && members[selectedPerson] && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={handleOverlayClick} // Close the popup on overlay click
          >
            <div className="bg-black p-8 max-w-4xl w-full flex min-h-[300px]">
              {/* Image Column */}
              <div className="flex-shrink-0 w-1/3 border-8 border-yellow-300">
                <img 
                  src={members[selectedPerson].photo} 
                  alt={members[selectedPerson].name} 
                  className="w-full h-auto"
                />
              </div>

              {/* Details Column */}
              <div className="w-2/3 pl-8">
                <h2 className="text-xl font-bold mb-4 text-white">{members[selectedPerson].name}</h2>

                <div className="mb-4 text-white">
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-gray-400" />
                    <span>{members[selectedPerson].phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <FaEnvelope className="text-gray-400" />
                    <span>{members[selectedPerson].email}</span>
                  </div>
                </div>

                <div className="flex space-x-4 mb-4 text-white">
                  {Object.entries(members[selectedPerson].socialMedia).map(([platform, url]) => (
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
