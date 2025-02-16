/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import Link from "next/link";
import { logout } from "./store/AuthSlices";
import { linksUser } from "./constants";

interface ButtonProps {
  user: any;
}

const Button: React.FC<ButtonProps> = ({ user }) => {
  const [second, setSecond] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  // console.log(user["favourites"].length);
  return (
    <li
      className="bg-blue-600 size-fit rounded-full flex justify-center items-center cursor-pointer text-white transition-all duration-300 relative"
      onClick={() => setSecond(!second)}
    >
      <p className="py-1 px-2  hover:scale-105">
        {user.email.slice(0, 2).toUpperCase()}
      </p>
      <div
        className={`${
          second ? "absolute" : "hidden"
        } top-10  right-2 px-4 py-2 rounded-md bg-white text-gray-600 `}
      >
        <ul>
          {linksUser.map((cons, index) => {
            return cons.title === "Logout" ? (
              <li
                key={index}
                className="hover:text-gray-900  hover:translate-x-1 transition-all duration-300"
                onClick={() => dispatch(logout())}
              >
                {cons.title}
              </li>
            ) : (
              <li
                key={index}
                className={`${
                  cons.role.some((co) => co === user.role) ? "block" : "hidden"
                } hover:text-gray-900 hover:translate-x-1 w-28 transition-all duration-300 relative`}
                onClick={() => setSecond(!second)}
              >
                <div
                  className={`${
                    user[cons.title.toLowerCase()].length ? "block" : "hidden"
                  } absolute right-0 top-1/2 -translate-y-1/2 text-white text-xs bg-red-500 size-3 rounded-full flex justify-center items-center`}
                >
                  {user[cons.title.toLowerCase()].length}
                </div>
                <Link className="block size-full" href={cons.id}>
                  {cons.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default Button;
