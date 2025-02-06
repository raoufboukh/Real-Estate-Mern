/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
interface Props {
  handleChange: (name: string, value: any) => void;
  form: any;
  handleBar: (name: string, value: any) => void;
  errors: any;
}

const ThirdInputs: React.FC<Props> = ({
  handleChange,
  form,
  handleBar,
  errors,
}) => {
  return (
    <form className="max-w-96 mx-auto">
      <div className="flex flex-col gap-1">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={form.title}
          className={`${
            errors.title ? "border-red-500" : "border-black"
          } inputs`}
          onChange={(e) => handleChange("title", e.target.value)}
          onBlur={(e) => handleBar("title", e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          value={form.description}
          className={`${
            errors.description ? "border-red-500" : "border-black"
          }  inputs resize-none`}
          onChange={(e) => handleChange("description", e.target.value)}
          onBlur={(e) => handleBar("description", e.target.value)}
        />
        {errors.description && (
          <p className="text-red-500 text-xs">{errors.description}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="pr">Price</label>
        <input
          type="number"
          id="pr"
          value={form.price ?? ""}
          className={`${
            errors.price ? "border-red-500" : "border-black"
          } inputs`}
          onChange={(e) => handleChange("price", e.target.valueAsNumber)}
          onBlur={(e) => handleBar("price", e.target.valueAsNumber)}
          min={0}
        />
        {errors.price && <p className="text-red-500 text-xs">{errors.price}</p>}
      </div>
    </form>
  );
};

export default ThirdInputs;
