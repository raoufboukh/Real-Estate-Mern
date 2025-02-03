import Image from "next/image";
import { companies } from "./constants";

function Companies() {
  return (
    <section className="py-5">
      <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {companies.map((comp, ind) => (
          <div
            key={ind}
            data-aos="fade-down"
            data-aos-delay={100 * ind}
            className=" h-24"
          >
            <Image
              className="w-[60%] md:w-[75%] mx-auto h-full"
              width={100}
              height={100}
              src={comp.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Companies;
