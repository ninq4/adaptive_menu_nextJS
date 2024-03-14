'use client';
import React, { useState } from 'react';
import Button from '../Button/Button';
import { FaBars } from 'react-icons/fa6';
const navList = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Videos',
    href: '/videos',
  },
  {
    label: 'Contacts',
    href: '/contacts',
  },
  {
    label: 'Login',
    type: 'primary',
    href: '/login',
  },
];
const NavBarMobile = () => {
  const [openNav, setOpenNav] = useState(false);
  const navState = openNav ? 'right-4 block' : '-right-[100%] hidden';
  return (
    <>
      <button onClick={() => setOpenNav(!openNav)} className="text-2xl text-white p-4 hover:bg-blue-900 md:hidden">
        <FaBars />
      </button>

      <nav className={`${navState} absolute top-[70px] transition-all md:hidden`}>
        <menu className="flex items-center flex-col gap-4 bg-blue-900 py-6 px-12">
          {navList.map((item, pos) => (
            <li key={pos}>
              <Button href={item.href} type={item.type}>
                {item.label}
              </Button>
            </li>
          ))}
        </menu>
      </nav>
    </>
  );
};

export default NavBarMobile;
