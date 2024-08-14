import React from 'react';

const Sidebar = () => {
  return (
    <aside className="p-4 bg-white text-black space-y-4" style={{ width: '217px' }}>
      {/* Top Section */}
      <div className="sidebar-section bg-white text-black border border-gray-300" style={{ height: '527px' }}>
        <h2 className="text-lg font-bold">Top</h2>
        <ul className="space-y-2">
          <li>#Citizens have a right to better services</li>
          <li>#MumaringRightsKE</li>
          <li>#JusticeForAll</li>
          <li>#LegalAidKenya</li>
          <li>#EndGBV</li>
          <li>#YouthEmpowermentKE</li>
          <li>#RightToEducation</li>
          <li>#FreedomOfSpeechKE</li>
        </ul>
      </div>

      {/* Latest Section */}
      <div className="sidebar-section bg-white text-black border border-gray-300" style={{ height: '274px' }}>
        <h2 className="text-lg font-bold">Latest</h2>
        <ul className="space-y-2">
          <li>#Citizens have a right to better services</li>
          <li>#JusticeForAll</li>
          <li>#LegalAidKenya</li>
        </ul>
      </div>

      {/* News and Updates Section */}
      <div className="sidebar-section bg-white text-black border border-gray-300" style={{ height: '382px' }}>
        <h2 className="text-lg font-bold">News and Updates</h2>
        <ul className="space-y-2">
          <li>#Citizens have a right to better services</li>
          <li>#MumaringRightsKE</li>
          <li>#JusticeForAll</li>
          <li>#LegalAidKenya</li>
        </ul>
      </div>

      {/* About Section */}
      <div className="sidebar-section bg-white text-black border border-gray-300" style={{ height: '108px' }}>
        <h2 className="text-lg font-bold">About</h2>
        <p>About. Terms and Conditions. Careers. Cookies. More.</p>
      </div>
    </aside>
  );
};

export default Sidebar;