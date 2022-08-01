import React from "react";

const InputField = ({ error_message, className, title, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={title} className="text-sm mb-1">
        {title}
      </label>
      <input
        id={title}
        className={`${className} bg-white border-b-[3px] border-b-transparent transition text-lg px-[3px] focus:outline-offset-0 focus:outline-none focus-within:border-b-[3px] focus-within:border-b-red-600`}
        {...rest}
      />
      {false && <p className="text-red-600 text-xs">{error_message}</p>}
    </div>
  );
};

export default InputField;
