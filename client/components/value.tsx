import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import { values } from "./constants";
function Value() {
  const [current, setCurrent] = useState("best");
  return (
    <section id="value">
      <div className="container py-2 flex gap-3 justify-center xl:gap-0 xl:justify-between flex-wrap">
        <div className="basis-full md:basis-[75%] lg:basis-[60%] lg:text-left text-center xl:basis-[43%]">
          <div className="w-full border-8 border-gray-400 rounded-t-full overflow-hidden">
            <Image
              src="/assets/value.png"
              width={1000}
              className="size-full"
              height={1000}
              alt=""
            />
          </div>
        </div>
        <div className="basis-full md:basis-[75%] lg:basis-[60%] lg:text-left text-center xl:basis-[43%]">
          <h3 className="text-orange-400 font-bold text-2xl py-1">Our Value</h3>
          <h4 className="text-blue-900 font-bold text-4xl pt-1 pb-2">
            Value We Give to You
          </h4>
          <p className="text-gray-400">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </p>
          <div className="flex flex-col mt-8 gap-4">
            {values.map((val, ind) => (
              <div
                key={ind}
                data-current={val.current}
                className={`border cursor-pointer p-4 ${
                  current === val.current
                    ? " shadow-xl shadow-blue-100 border-gray-200"
                    : " border-gray-200"
                }`}
                onClick={(e) =>
                  setCurrent(
                    e.currentTarget.getAttribute("data-current") || val.current
                  )
                }
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-blue-50 text-blue-900 rounded-md">
                    {val.icon}
                  </div>
                  <h4 className="text-lg font-bold text-blue-900">
                    {val.title}
                  </h4>
                  <div className="p-2 bg-blue-50 text-blue-900 rounded-md">
                    <FaCaretDown />
                  </div>
                </div>
                <div
                  className={
                    current === val.current
                      ? "block text-sm text-gray-400"
                      : "hidden"
                  }
                >
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Value;
