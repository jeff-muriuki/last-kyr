import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div>
            <h3 className="font-bold mb-3 text-lg">Social Media</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/kyrafrica" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-2xl hover:text-gray-400" />
              </a>
              <a href="https://twitter.com/kyrafrica" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-2xl hover:text-gray-400" />
              </a>
              <a href="https://www.linkedin.com/company/kyrafrica" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl hover:text-gray-400" />
              </a>
              <a href="https://www.instagram.com/kyrafrica" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:text-gray-400" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg">Contacts</h3>
            <p className="text-base">Address: Riverside, Moi, Kenya, 00200</p>
            <p className="text-base">Phone: 0101129466</p>
            <p className="text-base">Email: consult@kyrafrica.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg">Newsletter</h3>
            <input type="email" placeholder="Your email" className="p-2 rounded text-black" />
            <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-2">Subscribe</button>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg">Legal</h3>
            <p className="text-base">Terms of Service</p>
            <p className="text-base">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
