/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import React from 'react'
import toast from 'react-hot-toast';

interface ButtonAddProps {
    cons: any;
    user: any;
}

const ButtonAdd:React.FC<ButtonAddProps> = ({cons, user}) => {
  return user ? (
    <li
      className="mt-3 lg:mt-0 cursor-pointer transition-all w-fit duration-300 hover:text-gray-500 relative hover:before:w-full before:transition-all before:duration-300 before:content-[''] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-0 before:h-0.5 before:bg-gray-500"
    >
      <Link href={cons.id}>{cons.title}</Link>
    </li>
  ) : (
    <li
      className="mt-3 lg:mt-0 cursor-pointer transition-all w-fit duration-300 hover:text-gray-500 relative hover:before:w-full before:transition-all before:duration-300 before:content-[''] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-0 before:h-0.5 before:bg-gray-500"
    >
      <Link
        href={""}
        onClick={() => toast.error("You need to login to add property")}
      >
        {cons.title}
      </Link>
    </li>
  );
}

export default ButtonAdd
