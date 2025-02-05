"use client";
import { useState } from "react";

const FirstInputs = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      <form>
        <div className="flex flex-col gap-1">
          <label htmlFor="cou">Country</label>
          <input
            type="text"
            id="cou"
            value={country}
            className="inputs"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            className="inputs"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="ad">Address</label>
          <input
            type="text"
            id="ad"
            value={address}
            className="inputs"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default FirstInputs;
