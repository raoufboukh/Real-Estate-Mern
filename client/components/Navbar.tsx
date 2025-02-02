"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import OutsideClickHandler from "react-outside-click-handler";
import { links } from "./constants";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scr, setScr] = useState(0);
  useEffect(() => {
    const scrollHandler = () => {
      setScr(window.scrollY);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <header
      className={`sticky py-3 top-0 ${
        scr > 0 ? `z-30 bg-gray-900 ` : `z-20 bg-gray-950`
      }`}
    >
      <div className="container flex items-center justify-between relative w-full">
        <Image
          src="/assets/logo_2.png"
          // className="w-28"
          width={112}
          height={28}
          alt=""
        />
        <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
          <RiMenu4Fill
            className="lg:hidden text-white text-xl cursor-pointer"
            onClick={() => setMenu(!menu)}
          />
          <div className={menu ? "show links" : "links"}>
            <ul className="lg:flex lg:gap-6 lg:items-center text-gray-400 text-lg">
              {links.map((cons, index) => {
                return index === links.length - 1 ? (
                  <li
                    key={index}
                    className="bg-blue-600 mt-3 lg:mt-0 cursor-pointer text-white rounded-md transition-all duration-300 py-2 px-3 hover:scale-105"
                  >
                    <Link href={cons.id}>{cons.title}</Link>
                  </li>
                ) : (
                  <li
                    key={index}
                    className="mt-3 lg:mt-0 cursor-pointer transition-all w-fit duration-300 hover:text-gray-500 relative hover:before:w-full before:transition-all before:duration-300 before:content-[''] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-0 before:h-0.5 before:bg-gray-500"
                  >
                    <Link href={cons.id}>{cons.title}</Link>
                  </li>
                );
              })}
              <li className="bg-blue-600 mt-3 lg:mt-0 cursor-pointer text-white rounded-md transition-all duration-300 hover:scale-105"></li>
            </ul>
          </div>
        </OutsideClickHandler>
      </div>
    </header>
  );
}

export default Navbar;
