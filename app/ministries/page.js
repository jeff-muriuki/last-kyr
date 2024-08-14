"use client";

import AfricaMap from '../../public/Africa.jpg'

const ministries = {
    cabinetSecretaries: [
      { name: 'Musalia Mudavadi', ministry: 'Prime Cabinet Secretary and Foreign Affairs' },
      { name: 'Kithure Kindiki', ministry: 'Ministry of Interior and National Administration' },
      { name: 'Njuguna Ndung\'u', ministry: 'Ministry of National Treasury and Planning' },
      { name: 'Aisha Jumwa', ministry: 'Ministry of Gender, Culture, the Arts & Heritage' },
      { name: 'Aden Duale', ministry: 'Ministry of Defence' },
      { name: 'Alice Wahome', ministry: 'Ministry of Lands, Public Works, Housing and Urban Development' },
      { name: 'Hon (Dr.) Alfred Mutua, EGH', ministry: 'Ministry of Tourism and Wildlife' },
      { name: 'Moses K. Kuria, HSC', ministry: 'Ministry of Public Service, Performance and Delivery Management' },
      { name: 'Rebecca Miano', ministry: 'Ministry of Investments, Trade & Industry' },
      { name: 'Onesimus Kipchumba Murkomen', ministry: 'Ministry of Roads and Transport' },
      { name: 'Zacharia Mwangi Njeru', ministry: 'Ministry of Water, Sanitation and Irrigation' },
      { name: 'Peninah Malonza, OGW', ministry: 'East African Community, The ASALs & Regional Development' },
      { name: 'Mithika Linturi', ministry: 'Ministry of Agriculture and Livestock Development' },
      { name: 'Ezekiel Machogu', ministry: 'Ministry of Education' },
      { name: 'Davis Chirchir', ministry: 'Ministry of Energy and Petroleum' },
      { name: 'Ababu Namwamba', ministry: 'Ministry of Youth Affairs and Sports' },
      { name: 'Simon Chelugui', ministry: 'Ministry of Co-operatives and Micro, Small and Medium Enterprises (MSME) Development' },
      { name: 'Salim Mvurya', ministry: 'Ministry of Mining, Blue Economy and Maritime Affairs' },
      { name: 'Florence Bore', ministry: 'Ministry of Labour and Social Protection' },
      { name: 'Susan Nakhumicha Wafula', ministry: 'Ministry of Health' },
      { name: 'Eliud Owalo', ministry: 'Ministry of Information, Communications and the Digital Economy' },
      { name: 'Roselinda Soipan Tuya', ministry: 'Ministry of Environment and Forestry' },
    ],
    principalSecretaries: [
      { name: 'Julius Korir', department: 'State Department for Cabinet Affairs' },
      { name: 'Teresia Mbaika Malokwe', department: 'State Department for Devolution' },
      { name: 'Esther Ngero', department: 'State Department for Performance and Delivery Management' },
      { name: 'Aurelia Rono', department: 'State Department for Parliamentary Affairs' },
      { name: 'Raymond Omollo', department: 'State Department for Interior and National Administration' },
      { name: 'Caroline Nyawira Murage', department: 'State Department for Correctional Services' },
      { name: 'Amb. Julius Bitok', department: 'State Department for Citizen Services' },
      { name: 'Dr. Chris Kiptoo', department: 'The National Treasury' },
      { name: 'James Muhati', department: 'State Department for Economic Planning' },
      { name: 'Patrick Mariro', department: 'Defence' },
      { name: 'Korir Sing\'oei', department: 'State Department for Foreign Affairs' },
      { name: 'Roseline Njogu', department: 'State Department for Diaspora Affairs' },
      { name: 'Amos Gathecha', department: 'State Department for Public Service' },
      { name: 'Veronica Mueni Nduva', department: 'State Department for Gender and Affirmative Action' },
      { name: 'Joseph Mungai Mbugua', department: 'State Department for Roads' },
      { name: 'Mohamed Dhagar', department: 'State Department for Transport' },
      { name: 'Nixon Korir', department: 'State Department for Lands and Physical Planning' },
      { name: 'Charles Hinga', department: 'State Department for Housing and Urban Development' },
      { name: 'Joel Arumonyang', department: 'State Department for Public Works' },
      { name: 'Prof. Edward Kisiangani', department: 'State Department for Broadcasting and Telecommunications' },
      { name: 'Eng. John Kipchumba Tanui', department: 'ICT and Digital Economy' },
      { name: 'Eng. Peter Tum', department: 'State Department for Medical Services' },
      { name: 'Dr. Joseph Mburu', department: 'State Department for Health Standards and Professional Management' },
      { name: 'Dr. Belio Kipsang', department: 'State Department for Basic Education' },
      { name: 'Esther Thaara Muhoria', department: 'State Department for TVET' },
      { name: 'Beatrice Inyangala', department: 'State Departments for Higher Education and Research' },
      { name: 'Phillip Kello Harsama', department: 'State Department for Crop Development' },
      { name: 'Harry Kimutai', department: 'State Department for Livestock Development' },
      { name: 'Alfred K\'Ombundo', department: 'State Department for Trade' },
      { name: 'Abubakar Hassan', department: 'State Department for Investment Promotion' },
      { name: 'Juma Mukhwana', department: 'State Department for Industry' },
      { name: 'Patrick Kiburi Kilemi', department: 'State Department for Cooperatives' },
      { name: 'Susan Mangeni', department: 'State Department for MSMEs Development' },
      { name: 'Ismail Madey', department: 'State Department for Youth Affairs' },
      { name: 'Jonathan Mueke', department: 'State Department for Sports and The Arts' },
      { name: 'Festus Ngeno', department: 'State Department for Environment' },
      { name: 'Ephantus Kimotho', department: 'State Department for Forestry' },
      { name: 'John Ololtuaa', department: 'State Department for Tourism' },
      { name: 'Sylvia Naseya Muhoro', department: 'State Department for Wildlife' },
      { name: 'Ummy Mohammed Bashir', department: 'State Department for Culture and Heritage' },
      { name: 'Dr. Paul Ronoh', department: 'State Department for Water and Sanitation' },
      { name: 'Gitonga Mugambi', department: 'State Department for Irrigation' },
      { name: 'Alex Wachira', department: 'State Department for Energy' },
      { name: 'Mohamed Liban', department: 'State Department for Petroleum' },
      { name: 'Geoffrey Kaituko', department: 'State Department for Labour and Skills Development' },
      { name: 'Joseph Mugosi Mutavi', department: 'State Department for Social Protection and Senior Citizen Affairs' },
      { name: 'Abdi Dubart', department: 'State Department for East African Community Development' },
      { name: 'Idris Dogota', department: 'State Department for The ASALs and Regional Development' },
      { name: 'Elijah Mwangi', department: 'State Department for Mining' },
      { name: 'Betsy Muthoni Njagi', department: 'State Department for Blue Economy and Fisheries' },
      { name: 'Shadrack Mwadime', department: 'State Department for Shipping and Maritime Affairs' },
    ],
  };

  const Ministries = () => {
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
            {ministries.cabinetSecretaries.map((cs, index) => (
              <div key={index} className="yellow text-black rounded-full border border-black flex flex-col justify-center items-center text-center">
                <h3 className="font-bold">{cs.name}</h3>
                <p>{cs.ministry}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Principal Secretaries Section */}
        <section className="my-8 p-4 md:p-12">
          <h2 className="text-xl md:text-2xl text-black font-bold mb-8 md:mb-16">The Principal Secretaries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ministries.principalSecretaries.map((ps, index) => (
              <div key={index} className="bg-black rounded-full border border-black flex flex-col justify-center items-center text-yellow text-center">
                <h3 className="font-bold">{ps.name}</h3>
                <p>{ps.department}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };

export default Ministries;
