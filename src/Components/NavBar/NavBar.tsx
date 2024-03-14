import Button from '@/Components/Button/Button';
import React from 'react';

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
    href: '/videos'
  },
  {
    label: 'Contacts',
    href: '/contacts'
  },
  {
    label: 'Login',
    type: 'primary',
    href: '/login'
  }
];

const NavBar = ({containerStyle} : {containerStyle: string}) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className='flex items-center gap-1'>
        {
            navList.map((item, pos) => (
                <li key={pos}>
                    <Button href={item.href} type={item.type}>{item.label}</Button>
                </li>
            ))
        }
      </menu>
    </nav>
  );
};

export default NavBar;
