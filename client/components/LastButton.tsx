/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Button from './Button';
import Link from 'next/link';

interface LastButtonProps {
    user: any;
    cons: any;
}

const LastButton:React.FC<LastButtonProps> = ({user,cons}) => {
  return user ? (
    <Button  user={user} />
  ) : (
    <li
      className="bg-blue-600 mt-3 lg:mt-0 cursor-pointer text-white rounded-md transition-all duration-300  hover:scale-105"
    >
      <Link className="py-2 px-3 size-full block" href={cons.id}>
        {cons.title}
      </Link>
    </li>
  );
}

export default LastButton
