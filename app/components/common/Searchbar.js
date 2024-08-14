"use client";
import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

function Searchbar() {
  const [search, setSearch] = useState('');

  return (
    <div>
        <div className='lg:flex justify-end z-200000000 hidden'>
            <form className='w-[400px] fixed ml-auto mr-12 top-0'>
                <div className="relative mb-2 mt-2 items-end">
                <input type="search" placeholder='Search Here' className='w-full p-2 pl-4 outline-none rounded-l-full text-sm bg-black text-white'   onChange={(e) => setSearch(e.target.value)}/>
                <button className='absolute right--6 px-3 bg-black top-1/2 -translate-y-1/2 p-2 h-9 rounded-r-full text-white'>
                    <AiOutlineSearch />
                </button>
                </div>
            </form>

        </div>
        
        
    </div>
  );
}

export default Searchbar;
