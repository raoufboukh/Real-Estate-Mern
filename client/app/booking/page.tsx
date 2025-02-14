/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import { addFavorite, removeFavorite } from "@/components/store/AuthSlices";
import { AppDispatch, RootState } from "@/components/store/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";


const Booking = () => {
    const { user, isChecking } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();

    const handleFavoriteClick = (prop: any) => {
      if (user) {
        if (!user.favourites.some((fav: any) => fav._id === prop._id)) {
          dispatch(addFavorite(prop));
        } else {
          dispatch(removeFavorite(prop._id));
        }
      } else {
        toast.error("Please login to add to favorites");
      }
    };
  return (
    <>
      <Navbar />
      <section>
        <div className="container my-6">
          <h2 className="text-blue-800 text-4xl text-center">Booking</h2>
          {isChecking ? (
            <Spinner />
          ) : !user?.booking ? (
            <p className="text-center my-9 text-lg">No Bookings Found</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-x-7 my-5">
              {user?.booking.map((book) => (
                <Link
                  href={`/properties/${book.prop._id}`}
                  key={book.prop._id}
                  className="rounded-lg shadow-md overflow-hidden cursor-pointer hover:bg-indigo-100 hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="relative">
                    <div
                      className="absolute top-3 right-5 cursor-pointer"
                      onClick={() =>
                        handleFavoriteClick(book.prop)
                      }
                    >
                      <FaRegHeart
                        className={`${
                          !user?.favourites.some(
                            (fav: any) => fav._id === book.prop._id
                          )
                            ? "block"
                            : "hidden"
                        } text-red-500 text-2xl`}
                      />
                      <FaHeart
                        className={`${
                          user?.favourites.some(
                            (fav: any) => fav._id === book.prop._id
                          )
                            ? "block"
                            : "hidden"
                        } text-red-500 text-2xl`}
                      />
                    </div>
                    <Image
                      src={book.prop.image}
                      alt={book.prop.title}
                      width={1000}
                      height={1000}
                      className="w-full"
                    />
                  </div>
                  <div className="px-3 py-1">
                    <h3 className="text-2xl my-1 text-gray-400 font-bold">
                      <span className="text-yellow-400 ">$</span>
                      {book.prop.price}
                    </h3>
                    <h2 className="text-blue-900 text-2xl font-bold">
                      {book.prop.title}
                    </h2>
                    <p className="text-gray-400 my-2 text-sm">
                      {book.prop.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Booking