import Link from 'next/link';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import NavBarMobile from '../NavBarMobile/NavBarMobile';

const Header = () => {
  return (
    <header className="w-full bg-blue-700">
      <div className="container mx-auto h-full flex items-center justify-between relative  p-4">
        <Link className="text-white text-3xl" href={'/'}>
          Logo
        </Link>
        <NavBar containerStyle="hidden md:block" />
        <NavBarMobile  />
      </div>
    </header>
  );
};

export default Header;
