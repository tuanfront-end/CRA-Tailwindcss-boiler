import React from "react";
export interface ButtonCloseProps {
  containerClassName?: string;
  onClick?: () => void;
}

const ButtonClose: React.FC<ButtonCloseProps> = ({
  containerClassName = "",
  onClick = () => {},
}) => {
  return (
    <button
      className={`text-3xl flex items-center justify-center ${containerClassName}`}
      onClick={onClick}
    >
      <span className="sr-only">Close</span>
      <i className="pe-7s-close"></i>
    </button>
  );
};

export default ButtonClose;
