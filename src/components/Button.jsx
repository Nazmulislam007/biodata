import React from "react";

const Button = ({ title, className, ...rest }) => {
  return (
    <button
      className={`bg-green-600 px-10 py-2 text-white text-lg ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
