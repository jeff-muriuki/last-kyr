import Image from 'next/image';

const about = () => {
  return (
    <div className="about-background text-gray-800 p-0" >
      
        <div className="w-full flex justify-center mt-3 pt-6">
          <div className="relative w-full -z-10 h-64 mt-2">
            <Image
              src="/Header-image.jpeg"
              alt="Header Image"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mb-6 p-8">About Us</h1>

        <div className="flex flex-col md:flex-row items-start justify-between p-8 sm:flex-col">
          <div className="md:w-1/2 p-4 border-2 border-black ">
            <h2 className="text-2xl font-bold my-16 text-center">Who we are</h2>
            <p className="mb-4 mx-10">
              We are Africa’s #1 platform for legal advice and resources on your rights.
            </p>
            <p className="mb-4 mx-10">
              We educate to empower a million Africans on the continent to understand and defend their own rights, and help people understand how to navigate legal systems within their countries. The goal is to empower individuals by ensuring they are informed about their rights and how to protect them.
            </p>
          </div>
          <div className="md:w-1/2 p-4 relative flex justify-center items-center">
            <div className="relative w-[800px] h-[500px] md:flex flex-col justify-center items-center hidden">
              <div className="absolute z-10  top-0  left-1/2 -translate-x-1/2">
                <Image
                  src="/AboutSmall.png"  
                  alt="We Are Image 1"
                  width={800}
                  height={300}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute z-20 top-[70%] left-1/4 -translate-x-1/4 -translate-y-1/4  sm:top-[60%] sm:left-1/3 md:top-[44%] md:left-1/4 lg:top-[60%] lg:left-1/4">
              <Image
                  src="/About-big.png"  
                  alt="We Are Image 2"
                  width={200}
                  height={300}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <section
      className="flex flex-col sm:flex-row items-center justify-center mb-16 mt-6 p-4 sm:p-8"
      style={{
        backgroundImage: 'url(/World-About.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full sm:w-1/2 p-4 relative flex justify-center items-center mb-8 sm:mb-0">
        <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]">
          <div className="absolute top-0 left-0 w-24 h-24 sm:w-40 sm:h-40 rounded-full border-4 border-white overflow-hidden">
            <Image
              src="/Why-img1.jpeg"
              alt="Image 1"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          <div className="absolute top-[100px] left-[30px] sm:top-[150px] sm:left-[50px] w-32 h-32 sm:w-60 sm:h-60 rounded-full border-4 border-white overflow-hidden">
            <Image
              src="/Why-img2.jpeg"
              alt="Image 2"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          <div className="absolute top-[250px] left-[90px] sm:top-[400px] sm:left-[180px] w-24 h-24 sm:w-40 sm:h-40 rounded-full border-2 border-white overflow-hidden">
            <Image
              src="/Why-img3.jpeg"
              alt="Image 3"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 p-4 text-left border-2 border-black">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mt-6 mb-6">Why</h2>
        <p className="mb-4 px-4 sm:px-8">
          To ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements.
        </p>
        <p className="mb-6 px-4 sm:px-8">
          KYR Africa equips individuals with the knowledge of their legal rights, which is essential in empowering them to protect themselves and their communities.
        </p>
        <p className="mb-6 px-4 sm:px-8">
          Providing accessible and easy-to-understand resources helps individuals better navigate legal systems and make informed decisions.
        </p>
        <p className="mb-6 px-4 sm:px-8">
          KYR Africa offers guidance and support for people facing legal challenges, helping them to understand their options and pursue justice.
        </p>
        <p className="mb-6 px-4 sm:px-8">
          The platform can connect users with legal aid services, templates, and other necessary tools to support their legal needs.
        </p>
        <p className="mb-6 px-4 sm:px-8">
          By promoting awareness of legal rights, KYR Africa contributes to social justice and equality, addressing systemic issues and empowering marginalized communities.
        </p>
        <p className="mb-6 px-4 sm:px-8">
          The platform can serve as a hub for collective action, enabling communities to come together and advocate for policy changes and social reforms.
        </p>
      </div>
        </section>

        <section
          className="flex flex-col items-center justify-center m-8 p-4 sm:p-8"
          style={{
            backgroundImage: 'url(/World-About.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-[#B6B7BB] p-6 border border-black rounded-lg shadow-md relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Image
                  src="/Legal-Education.jpg"
                  alt="Legal Education Icon"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mt-12 mb-4">Legal Education</h3>
              <p>
                • Articles and guides on legal rights; comprehensive written content explaining various legal rights, responsibilities, and procedures specific to different African countries.
              </p>
              <p>
                • Engaging video content that breaks down complex legal topics into easily understandable segments.
              </p>
            </div>

            <div className="bg-[#B6B7BB] p-6 border border-black rounded-lg shadow-md relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Image
                  src="/Legal-Assistance.jpeg"
                  alt="Legal Assistance Icon"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mt-12 mb-4">Legal Assistance</h3>
              <p>
                • A platform where users can submit their legal questions and receive guidance from qualified legal professionals.
              </p>
              <p>
                • Referral to Legal Aid Services: Connecting users with local legal aid organizations and lawyers for more in-depth assistance.
              </p>
            </div>

            <div className="bg-[#B6B7BB] p-6 border border-black rounded-lg shadow-md relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Image
                  src="/Community-Engagement.jpeg"
                  alt="Community Engagement Icon"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mt-12 mb-4">Community Engagement</h3>
              <p>
                • A forum where users can discuss legal issues, share experiences, and seek advice from peers and legal experts.
              </p>
              <p>
                • Social Media Engagement: Active presence on social media platforms to engage with the community, share updates, and provide quick informational snippets.
              </p>
            </div>

            <div className="bg-[#B6B7BB] p-6 border border-black rounded-lg shadow-md relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Image
                  src="/Advocacy and Awareness.jpeg"
                  alt="Advocacy and Awareness Icon"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mt-12 mb-4">Advocacy and Awareness</h3>
              <p>
                • Coordinated campaigns to raise awareness about important legal issues and rights, encouraging civic participation and advocacy.
              </p>
              <p>
                • Partnering with advocacy groups to amplify efforts in promoting legal rights and achieving policy changes.
              </p>
              <p>
                • Initiatives aimed at educating the general public about their legal rights through various media channels and community outreach programs.
              </p>
            </div>

            <div className="bg-[#B6B7BB] p-6 border border-black rounded-lg shadow-md relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Image
                  src="/Resource Access.jpeg"
                  alt="Resource Access Icon"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mt-12 mb-4">Resource Access</h3>
              <p>
                • Downloadable Educational Materials: Providing access to a library of downloadable resources, including guides, pamphlets, and infographics on legal topics.
              </p>
              <p>
                • Offering users access to databases containing legal precedents, laws, and regulations for reference.
              </p>
              <p>
                • Tailored legal information that addresses the unique legal landscape and requirements of different African countries.
              </p>
            </div>

            <div className="bg-[#B6B7BB] p-6 border border-black rounded-lg shadow-md relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Image
                  src="/User Support.jpeg"
                  alt="User Support Icon"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mt-12 mb-4">User Support</h3>
              <p>
                • A dedicated help desk where users can get assistance with navigating the website, understanding legal documents, and other support services.
              </p>
              <p>
                • Providing customized legal advice based on individual user’s circumstances and legal questions.
              </p>
              <p>
                • Sharing real-life success stories and testimonials from users who have benefited from KYR Africa’s services, providing inspiration and validation.
              </p>
            </div>
          </div>
        </section>

    </div>
  );
};

export default about;
