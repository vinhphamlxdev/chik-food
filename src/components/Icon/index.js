import React from "react";

const Icon = ({ children, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="text-white add-cart-btn bg-secondary cursor-pointer w-[35px] h-[35px] transition-5 hover:bg-primary"
    >
      {children}
    </button>
  );
};

export default Icon;
