"use client";
import { useState } from "react";

const LastInputs = () => {
  const [bedroom, setBedroom] = useState<number | string>("");
  const [parking, setParking] = useState<number | string>("");
  const [bathroom, setBathroom] = useState<number | string>("");
  return (
    <form className="max-w-96 mx-auto">
      <div className="flex flex-col gap-1">
        <label htmlFor="bed">Bedrooms</label>
        <input
          type="number"
          id="bed"
          value={bedroom}
          className="inputs"
          onChange={(e) => setBedroom(e.target.valueAsNumber)}
          min={0}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="par">Parkings</label>
        <input
          type="number"
          id="par"
          value={parking}
          className="inputs"
          onChange={(e) => setParking(e.target.valueAsNumber)}
          min={0}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="br">Bathrooms</label>
        <input
          type="number"
          id="br"
          value={bathroom}
          className="inputs"
          onChange={(e) => setBathroom(e.target.valueAsNumber)}
          min={0}
        />
      </div>
    </form>
  );
};

export default LastInputs;
