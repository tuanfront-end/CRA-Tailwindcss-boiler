import React, { FC } from "react";

export interface NextPrevProps {
  containerClassName?: string;
  btnClass?: string;
}

const NextPrev: FC<NextPrevProps> = ({
  containerClassName = "space-x-3 md:space-x-4",
  btnClass = "border border-white rounded-full bg-transparent text-white",
}) => {
  return (
    <div
      className={`ttnc-NextPrev inline-flex items-center text-3xl ${containerClassName}`}
      data-glide-el="controls"
    >
      <button
        className={`${btnClass} flex items-center justify-center w-9 h-9 md:h-11 md:w-11 focus:outline-none `}
        data-glide-dir="<"
      >
        <i className="pe-7s-angle-left"></i>
      </button>
      <button
        className={`${btnClass} flex items-center justify-center w-9 h-9 md:h-11 md:w-11 focus:outline-none `}
        data-glide-dir=">"
      >
        <i className="pe-7s-angle-right"></i>
      </button>
    </div>
  );
};

export default NextPrev;
