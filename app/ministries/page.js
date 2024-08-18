"use client";

import { useState, useEffect } from 'react';
import { useSearch } from '../components/common/SearchContext';

const Ministries = () => {
  const [cabinetSecretaries, setCabinetSecretaries] = useState([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    const fetchMinistries = async () => {
      try {
        // Fetching ministers from the new endpoint
        const response = await fetch('https://necessary-card-750e65ba7c.strapiapp.com/api/ministers');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Extract data from API response
        const cabinetSecretaries = data.data.map((item) => ({
          name: item.attributes.Name || 'Name Not Provided', // Use 'Name Not Provided' if name is missing
          ministry: item.attributes.Ministry || 'Ministry Not Provided', // Handle missing ministry names
        }));
        
        setCabinetSecretaries(cabinetSecretaries);
      } catch (error) {
        console.error('Error fetching ministers:', error);
      }
    };

    fetchMinistries();
  }, []);

  // Filtered list of cabinet secretaries based on searchTerm
  const filteredCabinetSecretaries = cabinetSecretaries.filter(
    (cs) =>
      cs.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cs.ministry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-4" style={{
      backgroundImage: 'url(/Africa.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <h1 className="text-2xl md:text-4xl text-black font-bold text-center my-8">The Ministries</h1>

      {/* Cabinet Secretaries Section */}
      <section className="my-8 p-4 md:p-12">
        <h2 className="text-xl md:text-2xl text-black font-bold mb-8 md:mb-16">The Cabinet Secretaries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredCabinetSecretaries.map((cs, index) => (
            <div key={index} className="yellow text-black rounded-full border border-black flex flex-col justify-center items-center text-center">
              <h3 className="font-bold">{cs.name}</h3>
              <p>{cs.ministry}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ministries;
