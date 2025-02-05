"use client";

import { useState } from "react";

const ThirdInputs = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | string>("");
  return (
    <form className="max-w-96 mx-auto">
      <div className="flex flex-col gap-1">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          className="inputs"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          value={description}
          className="inputs resize-none"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="pr">Price</label>
        <input
          type="number"
          id="pr"
          value={price}
          className="inputs"
          onChange={(e) => setPrice(e.target.valueAsNumber)}
          min={0}
        />
      </div>
    </form>
  );
};

export default ThirdInputs;
