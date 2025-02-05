/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const SecondInputs = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const handleImage = (e: any) => {
    const file = e.target.files?.[0];
    if (!file.type.startWith("image/")) {
      toast.error("please select an image");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result as string);
    };
  };
  return (
    <div>
      <form>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileRef}
          onChange={handleImage}
        />
      </form>
    </div>
  );
};

export default SecondInputs;
