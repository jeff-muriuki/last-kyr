"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Hero from '../components/common/Hero';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://necessary-card-750e65ba7c.strapiapp.com/api/auth/local/', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier: email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();

      localStorage.setItem('jwt', data.jwt);
      localStorage.setItem('user', JSON.stringify(data.user));

      router.push('/dashboard'); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Hero />
      <div className="flex flex-col lg:flex-row h-screen">
        <div className="w-full lg:w-1/2 bg-[#E0E21C] text-black flex flex-col items-center justify-center p-6 lg:p-10">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Welcome Back</h1>

          {error && <p className="text-red-600">{error}</p>}

          <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex items-center mb-2 lg:mb-0">
                <input
                  type="checkbox"
                  id="keep-logged-in"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  className="h-4 w-4 text-yellow-600 focus:ring-yellow-500"
                />
                <label htmlFor="keep-logged-in" className="ml-2 text-sm">Keep me logged in</label>
              </div>
              <a href="#" className="text-red-600 hover:underline text-sm">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100"
            >
              Log In
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 bg-black text-[#E0E21C] flex flex-col items-center justify-center p-6 lg:p-10">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">KYR AFRICA</h1>
          <img
            src="https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/300516072_418658017037312_6272735957489651603_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fzl_BUcrhKcQ7kNvgGlRBEX&_nc_ht=scontent.fnbo18-1.fna&oh=00_AYCmS5a6dhlGPiNFLWnSTEHjRFETKW8hSs2vO6yS730q_g&oe=66B6F1D7"
            alt="KYR AFRICA"
            className="w-full lg:w-3/4 h-auto"
          />
        </div>
      </div>
    </>
  );
}