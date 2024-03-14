import Link from 'next/link';
import React from 'react';

const Button = ({ children, href, type }: { children: string; href?: string; type?: string }) => {
  if (href) {
    return (
      <Link
        className={`${
          type == 'primary'
            ? 'bg-white font-bold text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition-colors ease-in'
            : ' text-1xl text-white font-bold py-2 px-4 rounded '
        }`}
        href={href}>
        {children}
      </Link>
    );
  }
  return <button>{children}</button>;
};

export default Button;
