import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-scroll';

const Navbar = ({ searchQuery, setSearchQuery }) => {
    const [menu, setMenu] = useState(false);

    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Books' },
        { id: 3, text: 'About' },
        { id: 4, text: 'Contact' },
    ];

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 left-0 z-50 bg-white '>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex items-center space-x-2'>
                        <h1 className='font-semibold text-xl cursor-pointer'>
                            <span>BOOK <span className='text-blue-500'>HAVEN</span></span>
                            <p className='text-sm'>Read, Relax, Repeat</p>
                        </h1>
                    </div>
                    {/* Search Input */}
                    <div className='flex-grow mx-4'>
                        <input
                            type='text'
                            placeholder='Search books...'
                            className='max-w-8xl py-2 px-4 border rounded'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    {/* Desktop Navbar */}
                    <div className='flex items-center space-x-4'>
                        <ul className='hidden md:flex space-x-8'>
                            {navItems.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 cursor-pointer font-semibold text-1xl' key={id}>
                                    <Link
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass='active'
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className='cursor-pointer'>
                            <FaShoppingCart size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
