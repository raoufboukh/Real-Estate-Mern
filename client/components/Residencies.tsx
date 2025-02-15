"use client";
/* eslint-disable no-var */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { useEffect } from "react";
import { GetProps } from "./store/PropSlices";
import Spinner from "./Spinner";
import Link from "next/link";

function Residencies() {
  const { props, loading } = useSelector((state: RootState) => state.props);
  const dispatch = useDispatch<AppDispatch>();
  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    dispatch(GetProps());
  }, [dispatch]);
  return (
    <section id="resid">
      <div className="container">
        <h2 className="text-orange-500 text-xl md:text-2xl font-bold">
          Best Choices
        </h2>
        <h3 className="text-blue-950 font-bold text-2xl md:text-4xl">
          Popular Residencies
        </h3>
        {loading ? (
          <Spinner />
        ) : (
          <Slider className="my-10" {...settings}>
            {props.map((prop) => {
              return (
                <Link
                  href={`/properties/${prop._id}`}
                  className="overflow-hidden hover:bg-indigo-100 hover:scale-[1.03] transition-all duration-300 p-4 cursor-pointer rounded-md my-5"
                  key={prop._id}
                >
                  <div>
                    <Image
                      className="size-full"
                      src={prop.image}
                      width={1000}
                      height={1000}
                      alt="prop"
                    />
                  </div>
                  <div className="py-2 px-3">
                    <p className="text-2xl text-gray-400 my-1 font-bold">
                      <span className="text-yellow-400">$</span>
                      {prop.price}
                    </p>
                    <h3 className="font-bold text-blue-900 text-2xl my-1">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-gray-400">{prop.description}</p>
                  </div>
                </Link>
              );
            })}
          </Slider>
        )}
      </div>
    </section>
  );
}

export default Residencies;
