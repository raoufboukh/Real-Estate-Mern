/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useRef } from "react";
import toast from "react-hot-toast";
import { AiOutlineCloudUpload } from "react-icons/ai";

interface Props {
  handleChange: (name: string, value: any) => void;
  form: any;
  errors: any;
}

const SecondInputs: React.FC<Props> = ({ handleChange, form, errors }) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const handleImage = (e: any) => {
    const file = e.target.files?.[0];
    if (!file.type.startsWith("image/")) {
      toast.error("please select an image");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      handleChange("image", reader.result as string);
    };
  };
  return (
    <div className="px-20 -mt-10">
      <form>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileRef}
          onChange={handleImage}
        />
      </form>
      <div
        className="w-full h-96 border-dashed border-2 rounded-md overflow-hidden cursor-pointer border-gray-400 flex justify-center items-center"
        onClick={() => fileRef.current?.click()}
      >
        {form.image ? (
          <Image
            src={form.image}
            className="size-full"
            alt="add"
            width={1000}
            height={1000}
          />
        ) : (
          <div className="size-full bg-gray-300 flex justify-center items-center flex-col gap-2  text-gray-600">
            <AiOutlineCloudUpload className="size-16" />
            <p>Upload Image</p>
          </div>
        )}
      </div>
      {errors.image && <p className="text-red-500 text-xs">{errors.image}</p>}
    </div>
  );
};

export default SecondInputs;
