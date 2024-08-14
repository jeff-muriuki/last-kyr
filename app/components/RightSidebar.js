import React from 'react';
import { FaWhatsapp, FaSearch } from 'react-icons/fa';

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      {/* Main Community Container */}
      <div className="community-container">
        <h2 className="community-heading">Community</h2>

        {/* WhatsApp Button Subcontainer */}
        <div className="whatsapp-container">
          <button className="whatsapp-button">
            <FaWhatsapp className="whatsapp-icon" /> WhatsApp
          </button>
        </div>

        {/* Search Bar Subcontainer */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>

        {/* Groups List */}
        <ul className="groups-list">
          {[
            { name: 'Justice Seekers KE', imgSrc: '/path/to/image1.jpg' },
            { name: 'Human Rights Forum', imgSrc: '/path/to/image2.jpg' },
            { name: 'Legal Aid Network', imgSrc: '/path/to/image3.jpg' },
            { name: 'Youth Rights Alliance', imgSrc: '/path/to/image4.jpg' },
            { name: 'Civil Rights Coalition', imgSrc: '/path/to/image5.jpg' }
          ].map((group, index) => (
            <li key={index} className="group-item">
              <div className="group-img-wrapper">
                <div className="group-img-background">
                  <img src={group.imgSrc} alt={`${group.name} logo`} className="group-img" />
                </div>
              </div>
              <div className="group-content-container">
                <div className="group-content">{group.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;