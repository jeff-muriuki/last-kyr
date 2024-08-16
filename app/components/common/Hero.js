import React from 'react';

function Page() {
  return (
    <>
      <div
        className="relative bg-cover bg-center w-full h-[525px]"
        style={{ backgroundImage: 'url(Africa.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <div className="w-full flex flex-col md:flex-row items-center h-full">
          <div className="w-full md:w-3/5 p-4 md:p-8 lg:p-16 z-10">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-poppins p-4 md:p-6 lg:p-8 font-bold text-black leading-tight mb-4">
              Welcome to Know Your Rights (KYR) Africa
            </h1>
            <p className="text-base md:text-lg lg:text-xl px-4 md:px-6 lg:px-8 text-black font-poppins mb-4 md:mb-6">
              Know Your Rights Africa is a Social Platform providing access to user-friendly and affordable justice education and advice on their individual freedom and rights.
            </p>
            <p className="text-base md:text-lg lg:text-xl p-4 md:p-6 lg:p-8 text-black font-poppins mb-4 md:mb-6">
              We do this via Mobile (Call or text), Social Media (YouTube and Podcast), and website (Q&A Forum, Chatbot).
            </p>
          </div>
          <div className="w-full md:w-[350px] lg:w-[450px] h-[525px] mt-4 md:mt-0 z-10 ml-auto">
            <img
              src="HomeHero.png"
              alt="A welcoming hero image representing legal assistance and education provided by Know Your Rights Africa"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
