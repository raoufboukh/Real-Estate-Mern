/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { AppDispatch, RootState } from "@/components/store/store"; // Adjust the import path according to your project structure
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { useEffect } from "react";
import { GetProps } from "@/components/store/PropSlices";
import Spinner from "@/components/Spinner";
import Navbar from "@/components/Navbar";
import toast from "react-hot-toast";
import { addFavorite, removeFavorite } from "@/components/store/AuthSlices";
import Link from "next/link";

function Properties() {
  const { user } = useSelector((state: RootState) => state.auth);
  const { props, loading } = useSelector((state: RootState) => state.props);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(GetProps());
  }, [dispatch]);

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
      <section id="resid">
        <div className="container">
          <div className="flex items-center gap-2 w-[500px] mx-auto my-5 border border-gray-300 p-3 rounded-3xl">
            <FaMapMarkerAlt className="text-blue-900 text-lg" />
            <input
              type="text"
              placeholder="Search by title/country/city..."
              className="flex-grow border-none outline-none text-lg"
            />
            <button className="bg-gradient-to-tl from-blue-900 to-blue-700 hover:bg-gradient-to-br text-white rounded-xl p-1">
              Search
            </button>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-x-7 my-5">
              {props.map((prop) => (
                <Link
                  href={`/properties/${prop._id}`}
                  key={prop._id}
                  className="rounded-lg shadow-md overflow-hidden cursor-pointer hover:bg-indigo-100 hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="relative">
                    <div
                      className="absolute top-3 right-5 cursor-pointer z-10"
                      onClick={() => handleFavoriteClick(prop)}
                    >
                      <FaRegHeart
                        className={`${
                          !user?.favourites.some(
                            (fav: any) => fav._id === prop._id
                          )
                            ? "block"
                            : "hidden"
                        } text-red-500 text-2xl`}
                      />
                      <FaHeart
                        className={`${
                          user?.favourites.some(
                            (fav: any) => fav._id === prop._id
                          )
                            ? "block"
                            : "hidden"
                        } text-red-500 text-2xl`}
                      />
                    </div>
                    <Image
                      src={prop.image}
                      alt={prop.title}
                      width={1000}
                      height={1000}
                      className="w-full"
                    />
                  </div>
                  <div className="px-3 py-1">
                    <h3 className="text-2xl my-1 text-gray-400 font-bold">
                      <span className="text-yellow-400 ">$</span>
                      {prop.price}
                    </h3>
                    <h2 className="text-blue-900 text-2xl font-bold">
                      {prop.title}
                    </h2>
                    <p className="text-gray-400 my-2 text-sm">
                      {prop.description}
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
}

export default Properties;
