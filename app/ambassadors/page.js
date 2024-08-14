"use client";

const kenyanAmbassadors = {
  uk: {
    name: "Catherine Kirumba Karemu",
    location: "London, United Kingdom",
  },
  zambia: {
    name: "Lilian Tomitom",
    location: "Lusaka, Zambia",
  },
  canada: {
    name: "Caroline Kamende Daudi",
    location: "Ottawa, Canada",
  },
  egypt: {
    name: "Fred Outa",
    location: "Cairo, Egypt",
  },
  ghana: {
    name: "Vincent Mogaka Kemosi",
    location: "Accra, Ghana",
  },
  usa: {
    name: "David Kiplagat Kerich",
    location: "Washington D.C., United States",
  },
  russia: {
    name: "Dr. Peter Mutuku Mathuki",
    location: "Moscow, Russia",
  },
  senegal: {
    name: "Anne Kisaka Nanguli",
    location: "Dakar, Senegal",
  },
  morocco: {
    name: "Jessica Muthoni Gakinya",
    location: "Rabat, Morocco",
  },
  netherlands: {
    name: "Halima Yusuf Mucheke",
    location: "The Hague, Netherlands",
  },
  cuba: {
    name: "Everylyne Mwenda Karisa",
    location: "Havana, Cuba",
  },
  losAngeles: {
    name: "Ezra Chiloba",
    location: "Los Angeles, United States",
  },
  pakistan: {
    name: "Lt. Gen. Peter Mbogo Njiru",
    location: "Islamabad, Pakistan",
  },
  iran: {
    name: "Lt. Gen. Jonah Mwangi",
    location: "Tehran, Iran",
  },
  uganda: {
    name: "Joash Maangi",
    location: "Kampala, Uganda",
  },
};

const Ambassadors = () => {
  return (
    <div
      className="bg-white p-4"
      style={{
        backgroundImage: 'url(/Africa.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-2xl md:text-4xl text-black font-bold text-center my-8">
        Kenyan Ambassadors
      </h1>

      <section className="my-8 p-4 md:p-12">
        <h2 className="text-xl md:text-2xl text-black font-bold mb-8 md:mb-16">
          Current Ambassadors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(kenyanAmbassadors).map(([country, ambassador], index) => (
            <div
              key={index}
              className="yellow text-black rounded-full border border-black flex flex-col justify-center items-center text-center p-4"
            >
              <h3 className="font-bold">{ambassador.name}</h3>
              <p>({ambassador.location})</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ambassadors;
