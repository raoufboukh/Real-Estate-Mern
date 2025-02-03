import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-12 mb-5">
      <div className="container flex gap-4 lg:gap-0 justify-center lg:justify-between flex-col lg:flex-row">
        <div className="text-center mx-auto lg:text-left md:w-[224px]">
          <Image
            className="w-28 my-2 lg:mx-0 mx-auto"
            src="/assets/logo2.png"
            width={1000}
            height={1000}
            alt="footer"
          />
          <p>
            Our vision is to make all people the best place to live for them.
          </p>
        </div>
        <div className="text-center mx-auto lg:text-left md:w-[313px]">
          <h3 className="text-4xl font-bold my-1 text-blue-950">Information</h3>
          <p className="text-gray-400 text-sm mb-5">
            145 New York, FL 5467, USA
          </p>
          <ul className="flex text-sm md:text-base gap-3 lg:justify-normal justify-center font-medium">
            {["Property", "Services", "Product", "About Us"].map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
