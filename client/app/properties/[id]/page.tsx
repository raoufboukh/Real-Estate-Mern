/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import { addBooking, addFavorite, removeBooking, removeFavorite } from "@/components/store/AuthSlices";
import { getProperty } from "@/components/store/PropSlices";
import { AppDispatch, RootState } from "@/components/store/store";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FaHeart,
  FaRegHeart,
  FaBath,
  FaCar,
  FaDoorOpen,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SinglePage = () => {
  const [data, setData] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { user } = useSelector((state: RootState) => state.auth);
  const { id } = useParams<{ id: string }>();
  const { prop, loading } = useSelector((state: RootState) => state.props);
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

  const sendToServer = (prop: any) => {
    if (selectedDate) {
      const data = {
        prop: prop,
        date: selectedDate,
      };
      dispatch(addBooking(data));
      setData(false);
    } else {
      toast.error("Please select a date");
    }
  };

  const cancelBooking = (id: string) => {
    dispatch(removeBooking(id));
  };

  useEffect(() => {
    dispatch(getProperty(id));
  }, [dispatch, id]);
  return (
    <div className={`relative ${data ? "overflow-hidden" : ""}`}>
      <div
        className={
          data
            ? "size-full absolute bg-black/80 z-50 flex items-center justify-center"
            : "hidden"
        }
      >
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => {
              if (date) {
                const adjustedDate = new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate(),
                  12,
                  0,
                  0,
                  0
                );
                setSelectedDate(adjustedDate);
              }
            }}
            inline
          />
          <div className="flex justify-between -mt-1">
            <button
              className="bg-blue-800 text-white py-2 px-5 rounded-md hover:scale-105 transition-all duration-300"
              onClick={() => setData(false)}
            >
              Close
            </button>
            <button
              className="bg-blue-800 text-white py-2 px-5 rounded-md hover:scale-105 transition-all duration-300"
              onClick={() => sendToServer(prop)}
            >
              Book
            </button>
          </div>
        </div>
      </div>
      <Navbar />
      <section>
        <div className="container px-3 my-5">
          {loading ? (
            <Spinner />
          ) : prop ? (
            <div>
              <div className="w-full h-[500px] relative">
                <div
                  className="absolute top-3 right-5 cursor-pointer z-10"
                  onClick={() => handleFavoriteClick(prop)}
                >
                  <FaRegHeart
                    className={`${
                      !user?.favourites.some((fav: any) => fav._id === prop._id)
                        ? "block"
                        : "hidden"
                    } text-red-500 text-2xl`}
                  />
                  <FaHeart
                    className={`${
                      user?.favourites.some((fav: any) => fav._id === prop._id)
                        ? "block"
                        : "hidden"
                    } text-red-500 text-2xl`}
                  />
                </div>
                <Image
                  src={prop.image}
                  alt="property"
                  className="size-full rounded-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex items-center justify-between flex-wrap lg:gap-0 gap-10 mt-8 lg:mt-1">
                <div className="basis-full lg:basis-[45%]">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl text-blue-900 font-bold">
                      {prop.title}
                    </h2>
                    <h3 className="text-2xl text-gray-400 font-bold ml-3">
                      <span className="text-yellow-400">$</span>
                      {prop.price}
                    </h3>
                  </div>
                  <ul className="flex gap-3 my-5">
                    <li className="flex gap-1 items-center text-sm">
                      <FaBath className="text-blue-900" />{" "}
                      <span>{prop.bathrooms} Bathroom/s</span>
                    </li>
                    <li className="flex gap-1 items-center text-sm">
                      <FaCar className="text-blue-900" />{" "}
                      <span>{prop.parkings} Parking/s</span>
                    </li>
                    <li className="flex gap-1 items-center text-sm">
                      <FaDoorOpen className="text-blue-900" />{" "}
                      <span>{prop.bedrooms} Bedroom/s</span>
                    </li>
                  </ul>
                  <p className="text-gray-400 my-5">{prop.description}</p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-950" /> {prop.city}
                  </p>
                  {user?.booking.some(
                    (book: any) => book.prop._id === prop._id
                  ) ? (
                    <button
                      className="w-full my-2 bg-red-500 text-white py-2 rounded-md hover:scale-105 transition-all duration-300"
                      onClick={() => {
                        const booking = user.booking.find(
                          (book) => book.prop._id == prop._id
                        );
                        if (booking) cancelBooking(booking._id);
                      }}
                    >
                      Cancel Booking
                    </button>
                  ) : (
                    <button
                      className="w-full my-2 bg-blue-800 text-white py-2 rounded-md hover:scale-105 transition-all duration-300"
                      onClick={() => {
                        if (user) {
                          setData(true);
                        } else {
                          toast.error("Please login to book a visit");
                        }
                      }}
                    >
                      Book Your Visit
                    </button>
                  )}
                  {user?.booking.some(
                    (book: any) => book.prop._id === prop._id
                  ) && (
                    <p className="text-red-500 text-center">
                      You have a booking for this property{" "}
                      {
                        user.booking.find(
                          (book: any) => book.prop._id === prop._id
                        )?.date.slice(0,10)
                      }
                    </p>
                  )}
                </div>
                <div className="basis-full lg:basis-1/2">
                  <Map
                    address={prop.address}
                    city={prop.city}
                    country={prop.country}
                  />
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-red-500">Property not found</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SinglePage;
