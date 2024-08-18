// components/pages/NationalAssembly.js
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearch } from '../components/common/SearchContext';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const NationalAssembly = () => {
  const [counties, setCounties] = useState([]);
  const [constituencies, setConstituencies] = useState([]);
  const [countyConstituencyMap, setCountyConstituencyMap] = useState({});
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedConstituency, setSelectedConstituency] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const { searchTerm } = useSearch();

  useEffect(() => {
    // Fetch counties data
    axios.get('https://necessary-card-750e65ba7c.strapiapp.com/api/counties')
      .then(response => {
        setCounties(response.data.data.map(item => ({
          id: item.id,
          name: item.attributes.County
        })));
      })
      .catch(error => console.error('Error fetching counties:', error));

    // Fetch constituencies data
    axios.get('https://necessary-card-750e65ba7c.strapiapp.com/api/constituencies')
      .then(response => {
        const constituenciesData = response.data.data.map(item => ({
          id: item.id,
          name: item.attributes.constituency,
          countyId: item.attributes.County // Assuming County field refers to county ID
        }));
        setConstituencies(constituenciesData);

        // Create a mapping from county ID to constituencies
        const mapping = constituenciesData.reduce((acc, curr) => {
          if (!acc[curr.countyId]) acc[curr.countyId] = [];
          acc[curr.countyId].push(curr.name);
          return acc;
        }, {});
        setCountyConstituencyMap(mapping);
      })
      .catch(error => console.error('Error fetching constituencies:', error));
  }, []);

  const handleCountySelect = (county) => {
    setSelectedCounty(county);
  };

  const handleConstituencyClick = (constituency) => {
    setSelectedConstituency(constituency);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedConstituency(null);
  };

  const selectedCountyId = counties.find(c => c.name === selectedCounty)?.id;
  const constituenciesForSelectedCounty = selectedCountyId ? countyConstituencyMap[selectedCountyId] || [] : [];

  // Filter counties and constituencies based on searchTerm
  const filteredCounties = counties.filter(county =>
    county.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredConstituencies = constituenciesForSelectedCounty.filter(constituency =>
    constituency.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-4">
      <div className={`${showPopup ? 'hidden' : 'block'}`}>
        <h1 className="text-2xl md:text-4xl text-black font-bold text-center my-8">Find My Legislator/National Assembly</h1>

        <div className="flex justify-center my-8">
          <Image
            src="/CountiesMap.jpg"
            alt="Map of Kenya"
            width={300}
            height={100}
            className="cursor-pointer border-8 border-yellow"
          />
        </div>

        <section className="my-8 p-4 md:p-12 text-center">
          <h2 className="text-xl md:text-2xl text-black font-bold mb-8">Search for your county</h2>
          <div className="relative max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="Search for your county"
              value={selectedCounty}
              onChange={(e) => handleCountySelect(e.target.value)}
              className="border border-black rounded-full bg-black p-2 pr-10 px-8 text-white w-full"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.343 4.343a1 1 0 01-1.414 1.414l-4.343-4.343zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          <div className="flex flex-wrap yellow justify-center gap-4 p-4">
            {filteredCounties.map((county, index) => (
              <button
                key={index}
                onClick={() => handleCountySelect(county.name)}
                className={`py-2 px-4 ${selectedCounty === county.name ? 'bg-black font-bold border rounded-xl text-white' : ' text-black font-bold'} transition-colors duration-300`}
              >
                {county.name}
              </button>
            ))}
          </div>
        </section>

        {/* Constituencies Section */}
        {selectedCounty && (
          <section className="my-8 p-4 md:p-12 text-center">
            <h2 className="text-xl md:text-2xl text-black font-extrabold mb-8">List of constituencies in {selectedCounty}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-4xl">
              {filteredConstituencies.length > 0 ? (
                filteredConstituencies.map((constituency, index) => (
                  <div
                    key={index}
                    className="text-black rounded-2xl flex justify-center items-center py-2 m-4 yellow-hover transition-colors duration-300 cursor-pointer"
                    onClick={() => handleConstituencyClick(constituency)}
                  >
                    <span className="custom-underline">{constituency}</span>
                  </div>
                ))
              ) : (
                <div className="text-black">No constituencies available</div>
              )}
            </div>
          </section>
        )}
      </div>

      {/* Popup Section */}
      {showPopup && selectedConstituency && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleClosePopup}
        >
          <div className="bg-black p-8 max-w-4xl w-full flex min-h-[300px]">
            {/* Image Column */}
            <div className="flex-shrink-0 w-1/3 border-8">
              <img
                src="/path-to-your-image.jpg"  // Replace with actual image source
                alt="Constituency Image"
                className="w-full h-full"
              />
            </div>

            {/* Details Column */}
            <div className="w-2/3 pl-8">
              <h2 className="text-xl font-bold mb-4 text-white">{selectedConstituency}</h2>

              {/* Display MPs related to the selected constituency */}
              {/* Placeholder for MP details; adjust according to your data structure */}
              <div className="mb-4 text-white">
                <p>No MP details available</p>
              </div>

              <div className="mb-4 text-white">
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-gray-400" />
                  <span>Contact Number</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <FaEnvelope className="text-gray-400" />
                  <span>Email Address</span>
                </div>
              </div>

              <div className="flex space-x-4 mb-4 text-white">
                <FaFacebook className="text-gray-400" />
                <FaTwitter className="text-gray-400" />
                <FaInstagram className="text-gray-400" />
                <FaLinkedin className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NationalAssembly;
