/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
"use client";
import { AddProp } from "@/components/constants";
import FirstInputs from "@/components/FirstInputs";
import LastInputs from "@/components/LastInputs";
import SecondInputs from "@/components/SecondInputs";
import { addProps } from "@/components/store/PropSlices";
import { AppDispatch } from "@/components/store/store";
import ThirdInputs from "@/components/ThirdInputs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";

interface FormState {
  country: string;
  city: string;
  address: string;
  title: string;
  description: string;
  price: string | number;
  bedrooms: string | number;
  parkings: string | number;
  bathrooms: string | number;
  image: string | null;
}
interface ErrorState {
  country: string;
  city: string;
  address: string;
  title: string;
  description: string;
  price: string;
  bedroom: string;
  parking: string;
  bathroom: string;
  image: string;
}

const Add = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [form, setForm] = useState<FormState>({
    country: "",
    city: "",
    address: "",
    title: "",
    description: "",
    price: "",
    bedrooms: "",
    parkings: "",
    bathrooms: "",
    image: "",
  });
  const [errors, setErrors] = useState<ErrorState>({
    country: "",
    city: "",
    address: "",
    title: "",
    description: "",
    price: "",
    bedroom: "",
    parking: "",
    bathroom: "",
    image: "",
  });
  const handleChange = (name: string, value: any) => {
    setForm({ ...form, [name]: value });
    if (value.length < 3) {
      setErrors({ ...errors, [name]: `${name} must be at least 3 characters` });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };
  const handleBar = (name: string, value: any) => {
    if (name === "image" && !value) {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else if (value.length < 3) {
      setErrors({ ...errors, [name]: `${name} must be at least 3 characters` });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };
  const inputs = [
    <FirstInputs
      handleChange={handleChange}
      form={form}
      handleBar={handleBar}
      errors={errors}
    />,
    <SecondInputs handleChange={handleChange} form={form} errors={errors} />,
    <ThirdInputs
      handleChange={handleChange}
      form={form}
      handleBar={handleBar}
      errors={errors}
    />,
    <LastInputs
      handleChange={handleChange}
      form={form}
      handleBar={handleBar}
      errors={errors}
    />,
  ];

  const handleInformation = () => {
    if (count === 0) {
      if (!form.country || !form.city || !form.address) {
        setErrors({
          ...errors,
          country: "Country is required",
          city: "City is required",
          address: "Address is required",
        });
      } else {
        setErrors({
          ...errors,
          country: "",
          city: "",
          address: "",
        });
        setCount(count + 1);
      }
    }
    if(count === 1){
      if(!form.image){
        setErrors({
          ...errors,
          image: "Image is required"
        })
      }else{
        setErrors({
          ...errors,
          image: ""
        })
        setCount(count + 1)
      }
    }
    if (count === 2) {
      if (!form.title || !form.description || !form.price) {
        setErrors({
          ...errors,
          title: "Title is required",
          description: "Description is required",
          price: "Price is required",
        });
      } else {
        setErrors({
          ...errors,
          title: "",
          description: "",
          price: "",
        });
        setCount(count + 1);
      }
    }
    if(count === 3){
      if(!form.bedrooms || !form.parkings || !form.bathrooms){
        setErrors({
          ...errors,
          bedroom: "Bedrooms is required",
          parking: "Parkings is required",
          bathroom: "Bathrooms is required"
        })
      }else{
        setErrors({
          ...errors,
          bedroom: "",
          parking: "",
          bathroom: ""
        })
        dispatch(addProps(form)).then((action) => {
          if (addProps.fulfilled.match(action)) {
            router.push("/properties");
          }
        });
      }
    }
  }
  useEffect(() => {
       if (typeof window !== "undefined") {
         const script = document.createElement("script");
         script.src = "https://upload-widget.cloudinary.com/global/all.js";
         script.async = true;
         document.body.appendChild(script);
       }
     }, []);
  return (
    <div
      className={`${
        count === 0 ? "lg:fixed" : "fixed"
      } w-full h-full flex justify-center items-center bg-black`}
    >
      <div className="w-[90%] py-3 p-1 md:p-10 bg-white">
        <ul className="flex justify-center md:justify-between items-center flex-wrap gap-8">
          {AddProp.map((prop, index) => (
            <div key={index} className="basis-[113px]">
              <li className="flex items-center gap-2">
                {count > index ? (
                  <FaCheckCircle className="text-sky-600 size-10" />
                ) : (
                  <p
                    className={`${
                      index === count ? "border-2 border-sky-600" : ""
                    } p-2 rounded-full bg-gray-300 size-10 flex justify-center items-center`}
                  >
                    {index + 1}
                  </p>
                )}
                <p className="flex flex-col">
                  <span className="font-bold">{prop.title}</span>
                  <span className="text-gray-600">{prop.description}</span>
                </p>
              </li>
            </div>
          ))}
        </ul>
        <div className="mt-16">{inputs[count]}</div>
        <div className="flex gap-2 w-fit mx-auto my-5">
          <button
            onClick={() => setCount(count - 1)}
            className={`${
              count === 0 ? "hidden" : "block"
            } bg-gray-600 text-white py-1 px-2 rounded-sm`}
          >
            Back
          </button>
          <button
            onClick={() => handleInformation()}
            className={`${
              count === 3 ? "hidden" : "block"
            } bg-sky-600 text-white py-1 px-2 rounded-sm`}
          >
            Next
          </button>
          <button
            className={`${
              count === 3 ? "block" : "hidden"
            } bg-green-600 text-white py-1 px-2 rounded-sm`}
            onClick={() => handleInformation()}
          >
            Add Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
