"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { FaRegIdBadge } from 'react-icons/fa';

const OrganizationReviewPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrganizations, setFilteredOrganizations] = useState([]);
  const [organizations, setOrganizations] = useState([
    {
      name: 'GT BANK',
      locations: '20 locations',
      reviews: 25,
      industry: 'Banking',
      description: 'Guaranty Trust Bank is a leading African Financial Institution...',
      logo: '/gt.jpeg',
    },
    {
      name: 'RUBIS',
      locations: '50 locations',
      reviews: 99,
      industry: 'Petroleum',
      description: 'Rubis Energy Kenya is part of the leading Pan-African oil marketing company...',
      logo: '/rubis.jpeg',
    },
    {
      name: 'NAIVAS',
      locations: '103 outlets',
      reviews: 990,
      industry: 'Supply chain',
      description: 'Naivas supermarket is the largest supermarket chain in Kenya...',
      logo: '/naivas.png',
    },
    {
      name: 'BRITAM',
      locations: '7 African countries',
      reviews: 79,
      industry: 'Insurance',
      description: 'Britam holdings is a leading diversified financial services group...',
      logo: '/britam.png',
    },
    {
      name: 'QUICKMART',
      locations: '84 locations',
      reviews: 109,
      industry: 'Supply chain',
      description: 'Quickmart is the second largest supply chain in Kenya...',
      logo: '/quickmart.jpeg',
    },
    {
      name: 'SAFARICOM',
      locations: '56 locations',
      reviews: 9990,
      industry: 'Communication',
      description: 'Safaricom is the largest telecomunication provider in Kenya...',
      logo: '/safari.png',
    },
    {
      name: 'EQUITY',
      locations: '50 locations',
      reviews: 101,
      industry: 'Banking',
      description: 'Equity is a financial services holding company based in the African great lakes region...',
      logo: '/equity.png',
    },
    {
      name: 'BAMBURI CEMENT',
      locations: '3 locations',
      reviews: 120,
      industry: 'Construction',
      description: 'Bamburi cement is a leading cement and concrete producer in East Africa that is listed on the Nairobi securities exchange...',
      logo: '/BAMBURI-CEMENT-LOGO.jpg',
    },
  ]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [newReview, setNewReview] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const counties = [
    'Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo-Marakwet', 'Embu', 'Garissa', 
    // ... (other counties)
  ];

  const sectors = ['Finance', 'Trade', 'Construction', 'Transport', 'Energy',  'Hospitality'];
  const industries = ['Supply chain', 'Banking', 'Petroleum', 'Hotel', 'Insurance', 'Communication'];

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    filterOrganizations(value, selectedIndustry);
  };

  const handleIndustryChange = (event) => {
    const value = event.target.value;
    setSelectedIndustry(value);
    filterOrganizations(searchTerm, value);
  };

  const filterOrganizations = (searchTerm, industry) => {
    let filtered = organizations;

    if (searchTerm) {
      filtered = filtered.filter(org =>
        org.name.toLowerCase().includes(searchTerm) ||
        org.industry.toLowerCase().includes(searchTerm) ||
        org.description.toLowerCase().includes(searchTerm)
      );
    }

    if (industry) {
      filtered = filtered.filter(org => org.industry === industry);
    }

    setFilteredOrganizations(filtered);
  };

  const handleOrganizationClick = (organization) => {
    setSelectedOrganization(organization);
  };

  const handleReviewSubmit = () => {
    if (selectedOrganization) {
      const updatedOrganizations = organizations.map(org => {
        if (org.name === selectedOrganization.name) {
          return { ...org, reviews: org.reviews + 1 };
        }
        return org;
      });

      setOrganizations(updatedOrganizations);
      setFilteredOrganizations(updatedOrganizations);
      setSelectedOrganization(null);
      setNewReview('');
    }
  };

  const displayedOrganizations = searchTerm || selectedIndustry ? filteredOrganizations : organizations;

  return (
    <div className="min-h-screen">
        
          <div className="flex justify-center m-8 p-8 items-center space-x-4" style={{backgroundColor: 'rgba(224, 226, 28, 0.15)'}}>
            <h2 className="text-3xl font-semibold mb-4 text-black">Want to shine a light on an organization? Post company reviews on our website</h2>
          </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className=" p-6">
          <div className='flex flex-row justify-between'>
          <div>
          <h2 className='font-bold'>Have a company you want to review?</h2>
          </div>
          {/* Search bar */}
          <div className="relative mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="SEARCH FOR AN ORGANIZATION"
              className="w-full py-2 px-4 border rounded-full pr-10 text-black"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
          </div>

          {/* Filters and results */}
          <div className="flex flex-col md:flex-row">
            {/* Filters */}
            <div className="w-full md:w-1/4 p-4 md:pr-4 mb-4 md:mb-0" style={{backgroundColor: 'rgba(224, 226, 28, 0.15)'}}>
              <h3 className="font-semibold mb-2 text-black">Filter organizations</h3>
              <div className="space-y-12">
                <select className="w-full p-2 border rounded text-black">
                  <option className="text-black">Select a location</option>
                  {counties.map((county, index) => (
                    <option key={index} value={county} className="text-black">{county}</option>
                  ))}
                </select>
                <select className="w-full p-2 border rounded text-black">
                  <option className="text-black">Select a sector</option>
                  {sectors.map((sector, index) => (
                    <option key={index} value={sector} className="text-black">{sector}</option>
                  ))}
                </select>
                <select 
                  className="w-full p-2 border rounded text-black"
                  value={selectedIndustry}
                  onChange={handleIndustryChange}
                >
                  <option className="text-black" value="">Select an industry</option>
                  {industries.map((industry, index) => (
                    <option key={index} value={industry} className="text-black">{industry}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className=' border bg-black m-6 p-1'></div>

            {/* Results */}
            <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {displayedOrganizations.map((org, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-md cursor-pointer" 
                  onClick={() => handleOrganizationClick(org)}
                  style={{backgroundColor: 'rgba(224, 226, 28, 0.15)'}}>
                  <div className="flex items-center">
                    <img src={org.logo} alt={`${org.name} logo`} className="w-16 h-16 rounded mr-4" />
                    <div>
                      <h3 className="font-bold text-black">{org.name}</h3>
                      <p className="text-sm text-black">{org.locations}</p>
                      <p className="font-bold text-black">{org.reviews} Reviews</p>
                      <p className="text-sm text-black">Industry: {org.industry}</p>
                    </div>
                  </div>
                  <p className="text-sm mt-2 text-black">{org.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedOrganization && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-black">Review {selectedOrganization.name}</h3>
            <textarea
              className="w-full p-2 border rounded mb-4 text-black"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Write your review..."
            />
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleReviewSubmit}
            >
              Submit Review
            </button>
            <button 
              className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
              onClick={() => setSelectedOrganization(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationReviewPage;

