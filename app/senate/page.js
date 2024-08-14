"use client";

const senators = {
  "elected": [
    "Adan Dullo Fatuma",
    "Agnes Kavindu",
    "Ali Ibrahim Roba",
    "Ali Mohamed Abdi",
    "Beatrice Ogolla",
    "Boniface Mutinda Kabaka",
    "Charles Kibiru",
    "Christopher Langat",
    "Cleophas Malala",
    "Dr. Ochillo Ayacko",
    "Gideon Moi",
    "Godana Hargura",
    "Godfrey Osotsi",
    "Ibrahim Yusuf Haji",
    "Irungu Kang'ata",
    "John Kinyua Nderitu",
    "Johnson Sakaja",
    "Kimani Wamatangi",
    "Kipchumba Murkomen",
    "Lennox Mumelo",
    "Ledama Olekina",
    "Margaret Kamar",
    "Michael Mbito",
    "Mohamed Faki Mwinyihaji",
    "Mwangi Githiomi",
    "Mwaura Isaac",
    "Mutula Kilonzo Jr.",
    "Njeru Ndwiga",
    "Onyango Kajwang",
    "Phillip Mpaayei",
    "Prengei Victor",
    "Sakaja Johnson",
    "Sam Ongeri",
    "Susan Kihika",
    "Tabitha Mutinda",
    "Wario Golich Juma",
    "Isaac Mwaura",
    "Gertrude Musuruve",
  ],
  "nominated": [
    "Amos Wako",
    "Beatrice Ogolla",
    "Rose Nyamunga",
    "Millicent Omanga",
    "Naomi Jillo Waqo",
    "Mercy Chebeni",
    "Beth Mugo",
  ],
  "political": [
    "Ali Mohamed Abdi",
    "Cleophas Malala",
    "Ledama Olekina",
    "Mutula Kilonzo Jr.",
    "John Kinyua Nderitu",
  ]
};

const Senate = () => {
  return (
    <div className="bg-white p-4" style={{
      backgroundImage: 'url(/Africa.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <h1 className="text-2xl md:text-4xl text-black font-bold text-center my-8">Legislature</h1>

      {/* Elected Senators Section */}
      <section className="my-8 p-4 md:p-12">
        <h2 className="text-xl md:text-2xl text-black font-bold mb-8 md:mb-16">Elected Senators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {senators.elected.map((senator, index) => (
            <div key={index} className="bg-black text-yellow rounded-full border border-black flex flex-col justify-center items-center text-center p-4">
              <h3 className="font-bold">{senator}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Nominated Senators Section */}
      <section className="my-8 p-4 md:p-12">
        <h2 className="text-xl md:text-2xl text-black font-bold mb-8 md:mb-16">Nominated Senators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {senators.nominated.map((senator, index) => (
            <div key={index} className="bg-black text-yellow rounded-full border border-black flex flex-col justify-center items-center text-center p-4">
              <h3 className="font-bold">{senator}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Political Senators Section */}
      <section className="my-8 p-4 md:p-12">
        <h2 className="text-xl md:text-2xl text-black font-bold mb-8 md:mb-16">Political Senators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {senators.political.map((senator, index) => (
            <div key={index} className="bg-black text-yellow rounded-full border border-black flex flex-col justify-center items-center text-center p-4">
              <h3 className="font-bold">{senator}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Senate;
