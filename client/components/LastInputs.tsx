/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
interface Props {
  handleChange: (name: string, value: any) => void;
  form: any;
  handleBar: (name: string, value: any) => void;
  errors: any;
}

const LastInputs: React.FC<Props> = ({
  handleChange,
  form,
  handleBar,
  errors,
}) => {
  return (
    <form className="max-w-96 mx-auto">
      <div className="flex flex-col gap-1">
        <label htmlFor="bed">Bedrooms</label>
        <input
          type="number"
          id="bed"
          value={form.bedroom ?? ""}
          className={`${
            errors.bedroom ? "border-red-500" : "border-black"
          }  inputs`}
          onChange={(e) => handleChange("bedroom", e.target.valueAsNumber)}
          onBlur={(e) => handleBar("bedroom", e.target.valueAsNumber)}
          min={0}
        />
        {errors.bedroom && (
          <p className="text-red-500 text-xs">{errors.bedroom}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="par">Parkings</label>
        <input
          type="number"
          id="par"
          value={form.parking ?? ""}
          className={`${
            errors.parking ? "border-red-500" : "border-black"
          }  inputs`}
          onChange={(e) => handleChange("parking", e.target.valueAsNumber)}
          onBlur={(e) => handleBar("parking", e.target.valueAsNumber)}
          min={0}
        />
        {errors.parking && (
          <p className="text-red-500 text-xs">{errors.parking}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="br">Bathrooms</label>
        <input
          type="number"
          id="br"
          value={form.bathroom ?? ""}
          className={`${
            errors.bathroom ? "border-red-500" : "border-black"
          }  inputs`}
          onChange={(e) => handleChange("bathroom", e.target.valueAsNumber)}
          onBlur={(e) => handleBar("bathroom", e.target.valueAsNumber)}
          min={0}
        />
        {errors.bathroom && (
          <p className="text-red-500 text-xs">{errors.bathroom}</p>
        )}
      </div>
    </form>
  );
};

export default LastInputs;
