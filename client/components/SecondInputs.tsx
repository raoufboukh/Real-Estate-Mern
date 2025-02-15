/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

declare global {
  interface Window {
    cloudinary: any;
  }
}
import Image from "next/image";
import Script from "next/script";
import toast from "react-hot-toast";
import { AiOutlineCloudUpload } from "react-icons/ai";

interface Props {
  handleChange: (name: string, value: any) => void;
  form: any;
  errors: any;
}

const SecondInputs: React.FC<Props> = ({ handleChange, form, errors }) => {
  const openUploadWidget = () => {
    if (window.cloudinary) {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dxnadohtn",
          uploadPreset: "tqosnvyh",
          sources: [
            "local",
            "camera",
            "url",
            "google_drive",
            "shutterstock",
            "getty",
            "unsplash",
          ],
          multiple: false,
          maxFiles: 1,
          cropping: true,
          showAdvancedOptions: true,
        },
        (
          error: any,
          result: { event: string; info: { secure_url: string } }
        ) => {
          if (!error && result?.event === "success") {
            console.log("✅ Uploaded:", result.info.secure_url);
            handleChange("image", result.info.secure_url);
          }
        }
      );

      widget.open();
    } else {
      toast.error("Cloudinary script not loaded");
    }
  };

  return (
    <>
      <Script
        src="https://upload-widget.cloudinary.com/global/all.js"
        strategy="beforeInteractive"
        onLoad={() => console.log("✅ Cloudinary script loaded successfully")}
        onError={() => console.error("❌ Failed to load Cloudinary script")}
      />

      <div className="lg:px-20 -mt-10">
        <div
          className="w-full h-96 border-dashed border-2 rounded-md overflow-hidden cursor-pointer border-gray-400 flex justify-center items-center"
          onClick={openUploadWidget}
        >
          {form.image ? (
            <Image
              src={form.image}
              className="size-full"
              alt="Uploaded"
              width={1000}
              height={1000}
            />
          ) : (
            <div className="size-full bg-gray-300 flex justify-center items-center flex-col gap-2 text-gray-600">
              <AiOutlineCloudUpload className="size-16" />
              <p>Upload Image</p>
            </div>
          )}
        </div>
        {errors.image && <p className="text-red-500 text-xs">{errors.image}</p>}
      </div>
    </>
  );
};

export default SecondInputs;
