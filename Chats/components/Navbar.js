//Navbar.js
import React from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">Linkly</span> 
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/">
              <span className="hover:text-gray-200">Home</span> 
            </Link>
          </li>
          <li>
            <Link href="/Forems">
              <span className="hover:text-gray-200">Forems</span> 
            </Link>
          </li>
          <li>
            <Link href="/Userchats">
              <span className="hover:text-gray-200">Userchats</span> 
            </Link>
          </li>
          <UserButton></UserButton>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
// Navbar.js
