import React from "react";

const TextInput = ({ no, className, ...props }) => {
  return (
    <div className="flex items-center mb-2">
      <label htmlFor="anwser1" className="text-lg mr-3">
        {no}
      </label>
      <textarea
        className="w-full bg-white border-b-[3px] border-b-transparent transition text-lg px-[3px] focus:outline-offset-0 focus:outline-none focus-within:border-b-[3px] focus-within:border-b-red-600"
        maxLength={80}
        rows="1"
        {...props}
      ></textarea>
    </div>
  );
};

export default TextInput;
