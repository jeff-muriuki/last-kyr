"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdGTranslate } from 'react-icons/md';
import { translations } from './translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // Default language

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    setDropdownOpen(false);
  };

  const t = (key) => translations[language][key]; 

  return (
    <nav className="bg-gray-800 text-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="Logo.png" alt="logo" className="md:cursor-pointer h-20" />
          <button onClick={toggleMenu} className="md:hidden text-gray-300 focus:outline-none ml-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('home')}</Link>
          <Link href="/talk-to-my-government" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('talkToMyGovernment')}</Link>
          <Link href="/talk-to-my-organisation" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('talkToMyOrganisation')}</Link>
          <Link href="/Get Legal Assistance" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('getLegalAssistance')}</Link>
          <Link href="/Educate" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('educate')}</Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('about')}</Link>
          <li><Link href="/signup" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('signup')}</Link></li>
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center gap-2">
              <MdGTranslate className="text-black bg-white p-2 w-8 h-8 cursor-pointer" />
              <span className="text-xs">{t('translate')}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white text-black rounded shadow-lg w-32 z-10">
                <ul className="list-none p-2">
                  <li onClick={() => changeLanguage('en')} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">English</li>
                  <li onClick={() => changeLanguage('es')} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Spanish</li>
                  <li onClick={() => changeLanguage('fr')} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">French</li>
                  <li onClick={() => changeLanguage('de')} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">German</li>
                </ul>
              </div>
            )}
          </div>
          <HiOutlineDotsVertical className="text-white text-2xl" />
          <Button />
        </div>

        {/* Mobile menu */}
        <ul className={`md:hidden fixed top-0 left-0 w-full bg-white overflow-y-auto py-24 pl-4 transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <li><Link href="/" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('home')}</Link></li>
          <li><Link href="/talk-to-my-government" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('talkToMyGovernment')}</Link></li>
          <li><Link href="/talk-to-my-organisation" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('talkToMyOrganisation')}</Link></li>
          <li><Link href="/Get Legal Assistance" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('getLegalAssistance')}</Link></li>
          <li><Link href="/Educate" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('educate')}</Link></li>
          <li><Link href="/about" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('about')}</Link></li>
          <li><Link href="/signup" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">{t('signup')}</Link></li>
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
