/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import Link from "next/link";
import { logout } from "./store/AuthSlices";

interface ButtonProps {
  index: number;
  user: any;
}

const Button: React.FC<ButtonProps> = ({ index, user }) => {
  const [second, setSecond] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <li
      key={index}
      className="bg-blue-600 size-fit rounded-full flex justify-center items-center cursor-pointer text-white transition-all duration-300 relative"
      onClick={() => setSecond(!second)}
    >
      <p className="py-1 px-2  hover:scale-105">
        {user.email.slice(0, 2).toUpperCase()}
      </p>
      <div
        className={`${
          second ? "absolute" : "hidden"
        } top-10  right-2 p-1 rounded-md bg-white text-gray-600 `}
      >
        <ul>
          <li
            className="hover:text-gray-900"
            onClick={() => setSecond(!second)}
          >
            <Link href={"/favourites"}>Favourites</Link>
          </li>
          <li
            className="hover:text-gray-900"
            onClick={() => setSecond(!second)}
          >
            <Link href={"/booking"}>Booking</Link>
          </li>
          <li
            className="hover:text-gray-900"
            onClick={() => dispatch(logout())}
          >
            logout
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Button;
