"use client";

const Judiciary = () => {
  return (
    <div
      className="bg-white p-4"
      style={{
        backgroundImage: 'url(/Africa.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Centered Heading: The Judiciary */}
      <h1 className="text-2xl md:text-4xl text-black font-bold text-center my-8">The Judiciary</h1>

      {/* Superior Courts Section */}
      <section className="my-8 p-4 md:p-12">
        <h2 className="text-xl md:text-2xl text-black font-bold mb-8 md:mb-16">Superior Courts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="yellow text-black rounded-full border border-black flex flex-col justify-center items-center text-center p-4 mx-auto max-w-md w-full">
            <h3 className="font-bold">Supreme Court</h3>
            <p>Youth Affairs, Creative Economy & Sports</p>
          </div>
          <div className="yellow text-black rounded-full border border-black flex flex-col justify-center items-center text-center p-4 mx-auto max-w-md w-full">
            <h3 className="font-bold">Court of Appeal</h3>
            <p>Youth Affairs, Creative Economy & Sports</p>
          </div>
        </div>
      </section>

      {/* High Court Section */}
      <section className="my-8 p-4 md:p-12">
        <h2 className="text-xl md:text-2xl text-black font-bold mb-8 md:mb-16 text-center">High Court</h2>

        {/* Arrows above the headings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-3xl text-black font-bold">↓</div>
            <div className="yellow text-black rounded-full border border-black flex flex-col justify-center items-center text-center p-4 mt-4 mx-auto max-w-md w-full">
              <h3 className="font-bold">Employment and Labour Relations Court</h3>
              <p>National Treasury</p>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-black font-bold">↓</div>
            <div className="yellow text-black rounded-full border border-black flex flex-col justify-center items-center text-center p-4 mt-4 mx-auto max-w-md w-full">
              <h3 className="font-bold">Environment and Land Court</h3>
              <p>Youth Affairs, Creative Economy & Sports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subordinate Courts Section */}
      <section className="my-8 p-4 md:p-12">
        <h2 className="text-xl md:text-2xl text-black font-bold mb-8 md:mb-16">Subordinate Courts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          <div className="yellow text-black rounded-full border border-black flex flex-col justify-center items-center text-center p-4 mx-auto max-w-md w-full my-4">
            <h3 className="font-bold text-black">Magistrate Courts</h3>
          </div>
          <div className="yellow text-black rounded-full border border-black flex flex-col justify-center items-center text-center p-4 mx-auto max-w-md w-full my-4">
            <h3 className="font-bold text-black">Tribunals</h3>
          </div>
          <div className="yellow text-black rounded-full border border-black flex flex-col justify-center items-center text-center p-4 mx-auto max-w-md w-full my-4">
            <h3 className="font-bold text-black">Khadhis Court</h3>
          </div>
          <div className="yellow text-black rounded-full border border-black flex flex-col justify-center items-center text-center p-4 mx-auto max-w-md w-full my-4">
            <h3 className="font-bold text-black">Court Martials</h3>
          </div>
          <div className="yellow text-black rounded-full border border-black flex flex-col justify-center items-center text-center p-4 mx-auto max-w-md w-full col-span-2 my-4">
            <h3 className="font-bold text-black">Small Claims Courts</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Judiciary;
