/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Map from "./Map";
import useCountries from "./useCountries";

interface Props {
  handleChange: (name: string, value: any) => void;
  form: any;
  handleBar: (name: string, value: any) => void;
  errors: any;
}

const FirstInputs: React.FC<Props> = ({
  handleChange,
  form,
  handleBar,
  errors,
}) => {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {" "}
      <form>
        <div className="flex flex-col gap-1">
          <label htmlFor="cou">Country</label>
          <select
            id="cou"
            value={form.country}
            className={`${
              errors.country ? "border-red-500" : "border-black"
            } inputs`}
            onChange={(e) => handleChange("country", e.target.value)}
            onBlur={(e) => handleBar("country", e.target.value)}
          >
            {useCountries().map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-red-500 text-xs">{errors.country}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={form.city}
            className={`${
              errors.city ? "border-red-500" : "border-black"
            } inputs`}
            onChange={(e) => handleChange("city", e.target.value)}
            onBlur={(e) => handleBar("city", e.target.value)}
          />
          {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="ad">Address</label>
          <input
            type="text"
            id="ad"
            value={form.address}
            className={`${
              errors.address ? "border-red-500" : "border-black"
            } inputs`}
            onChange={(e) => handleChange("address", e.target.value)}
            onBlur={(e) => handleBar("address", e.target.value)}
          />
          {errors.address && (
            <p className="text-red-500 text-xs">{errors.address}</p>
          )}
        </div>
      </form>
      <div>
        <Map address={form.address} city={form.city} country={form.country} />
      </div>
    </div>
  );
};

export default FirstInputs;
