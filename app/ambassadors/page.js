"use client";
import { useEffect, useState } from "react";

const Ambassadors = () => {
  const [ambassadors, setAmbassadors] = useState([]);

  useEffect(() => {
    const fetchAmbassadors = async () => {
      try {
        const response = await fetch("https://necessary-card-750e65ba7c.strapiapp.com/api/ambassadors");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data); // Log the response to see its structure

        // Extracting ambassador names and locations from the response
        const ambassadorsList = data.data.map(ambassador => ({
          name: ambassador.attributes.Name,
          location: ambassador.attributes.Location
        }));
        setAmbassadors(ambassadorsList);
      } catch (error) {
        console.error("Error fetching ambassadors:", error.message);
      }
    };

    fetchAmbassadors();
  }, []);

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
          {ambassadors.map((ambassador, index) => (
            <div
              key={index}
              className="bg-black text-yellow rounded-full border border-black flex flex-col justify-center items-center text-center p-4"
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
