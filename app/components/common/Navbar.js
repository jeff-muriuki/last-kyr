"use client"
import { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { MdGTranslate } from 'react-icons/md'
import { HiOutlineDotsVertical } from "react-icons/hi";

const Navbar = () => {

  const [menuIcon, setMenuIcon] = useState(false)

  const handleSmallerScreensNavigation = () => {

    setMenuIcon(!menuIcon);


  } 
  return (
    <div>
        <header className='bg-black text-white w-full ease-in duration-300  top-0 left-0 z-10 lg:mt-12'>
          <nav className='max-w-[1366px] mx-auto h-[100px] flex items-center lg:justify-center justify-between p-4'>
            <div className='lg:mr-3'>
              <Link href='/' onClick={handleSmallerScreensNavigation}>
                  <img src='Logo.png' className='w-auto max-h-[100px]'></img>
                  {/* <span className='uppercase font-extrabold text-3xl md:text-2xl xl:text-3xl '>avascript</span> */}
              </Link>
            </div>

            {/* large screen navigation */}
            <ul className='hidden md:flex font-semibold text-white items-center justify-center cursor-pointer'>
                <li className='mr-5 lg:mr-8 hover:text-[#E0E21C] sm:text-[11px] lg:text-[14px] text-center'>
                    <Link href=''>
                    Home
                    </Link>
                </li>
                <li className='mr-5 lg:mr-8 hover:text-[#E0E21C] sm:text-[11px] md:text-[11px] lg:text-[14px] text-center'>
                    <Link href='/talk-to-my-government'>
                    Talk to my <br/> government
                    </Link>
                </li>
                <li className='mr-5 lg:mr-8 hover:text-[#E0E21C] sm:text-[11px] lg:text-[14px] text-center'>
                    <Link href='/talk-to-my-organisation'>
                    Talk to my <br/> Organization
                    </Link>
                </li>
                <li className='mr-5 lg:mr-8 hover:text-[#E0E21C] sm:text-[11px] lg:text-[14px] text-center'>
                    <Link href='/Get Legal Assistance'>
                      Get legal <br/> Assistance
                    </Link>
                </li>
                <li className='mr-5 lg:mr-8 hover:text-[#E0E21C] sm:text-[11px] lg:text-[14px] text-center'>
                  <Link href='/Educate'>Educate</Link>
                </li>
                <li className='mr-5 lg:mr-8 hover:text-[#E0E21C] sm:text-[11px] lg:text-[14px] text-center'>
                  <Link href='/about'>
                        About
                  </Link>
                </li>
                <li className='hover:text-[#E0E21C] sm:text-[11px] text-center flex flex-col items-center'>
                  <MdGTranslate className="hover:font-bold lg:bg-red lg: lg:text-black lg:bg-white lg:p-1 lg:mb-1 font-bold sm:p-1 sm:w-7 p-2 w-8 h-8"/>
                  <span className='sm:text-[7px] lg:text-[10px] text-center'>Translate</span> </li>
              
            </ul>
            <div className="hidden text-white gap-3 md:flex lg:mx-6">
               <HiOutlineDotsVertical />
            </div>

            <div className = "hidden md:flex">
              <div className='flex'>
              <Link href='/login'>
                  <button className=" mr-5 md:mr-2 lg:mr-8 border-2 border-[#E0E21C] text-[#E0E21C] sm:text-[11px] sm:px-2 lg:text-[13px] rounded lg:px-4 lg:py-2 sm:py-1 sm:px:1">Login</button>
                </Link>
                <Link href='/signup'>
                  <button className="bg-[#E0E21C] text-black hover:bg-white hover:text-[#E0E21C] sm:text-[11px] sm:px-2 lg:text-[13px] rounded lg:px-2 lg:py-2.5 sm:py-1.5">Sign Up</button>
                </Link>
              </div>
            </div>


            {/* smaller screens: Navigation icons */}
            {/* on click - change the icon*/}

            <div onClick={handleSmallerScreensNavigation} className='flex md:hidden'>
                {menuIcon ? (<AiOutlineClose size={25} className = 'text-[#E0E21C]'/>) 
                : (<AiOutlineMenu size={25} className = 'text-[#E0E21C]'/>)}

            </div>

            {/* small screen navbar*/}
            <div className={menuIcon ? 
              
              'md:hidden absolute top-[100px] right-o left-0 flex w-full h-screen bg-black text-white text-center ease-in duration-300' : 
              
              'md:hidden absolute top-[100px] right-0 left-[-100%] flex w-full h-screen bg-black text-white text-center ease-in duration-300'}>
                
                <div className='w-full'>
                  <ul className='uppercase font-bold text-[12px]'>
                    <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#E0E21C] cursor-pointer'>
                      <Link href='/'>Home</Link>
                    </li>
                    <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#E0E21C] cursor-pointer'>
                    <Link href='/talk-to-my-government'>Talk to my government</Link>
                    </li>
                    <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#E0E21C] cursor-pointer'>
                    <Link href='/talk-to-my-organisation'>Talk to my organization</Link>
                    </li>
                    <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#E0E21C] cursor-pointer'>
                    <Link href='/Get Legal Assistance'>Get legal assistance</Link>
                    </li>
                    <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#E0E21C] cursor-pointer'>
                    <Link href='/'>Talk to my government</Link>
                    </li>
                    <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#E0E21C] cursor-pointer'>
                    <Link href='/Educate'>Educate</Link>
                    </li>
                    <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#E0E21C] cursor-pointer'>
                    <Link href='/about'>About</Link>
                    </li>
                  </ul>

                  
           <div className='flex flex-col justify-center items-center mt-8'>
               <Link href='/login' onClick={handleSmallerScreensNavigation} className='w-[200px] mb-5'>
                <button className='bg-[#E0E21C] text-slate-800 rounded uppercase py-1 w-full'>Login</button>
              </Link>
  
             <Link href='/signup' onClick={handleSmallerScreensNavigation} className='w-[200px] mb-5'>
              <button className='bg-[#E0E21C] text-slate-800 rounded uppercase py-1 w-full'>Sign Up</button>
              </Link>
             </div>
            </div>

          </div>


          </nav>
        </header>

    </div>
  )
}

export default Navbar