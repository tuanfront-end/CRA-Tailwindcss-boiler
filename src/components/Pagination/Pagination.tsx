import React, { FC } from "react";

export interface PaginationProps {
  containerClassName?: string;
}

const Pagination: FC<PaginationProps> = ({ containerClassName = "" }) => {
  return (
    <div
      className={`wil-pagination text-gray-900 dark:text-gray-200 flex items-center justify-center text-neutral-700 dark:text-neutral-300 font-medium text-sm space-x-3 ${containerClassName}`}
    >
      <a
        href="#"
        className="w-10 h-10  flex items-center justify-center text-lg"
      >
        <span className="sr-only">Next</span>
        <i className="pe-7s-angle-left"></i>
      </a>
      <a href="#" className="w-10 h-10  flex items-center justify-center">
        1
      </a>
      <a
        href="#"
        className="wil-pagination--active w-12 h-12 text-neutral-900 bg-primary text-gray-200 flex items-center justify-center border"
      >
        2
      </a>
      <a href="#" className="w-10 h-10  flex items-center justify-center">
        3
      </a>
      <a href="#" className="w-10 h-10  flex items-center justify-center">
        ...
      </a>
      <a href="#" className="w-10 h-10  flex items-center justify-center">
        11
      </a>
      <a
        href="#"
        className="w-10 h-10  flex items-center justify-center text-lg"
      >
        <span className="sr-only">Next</span>
        <i className="pe-7s-angle-right"></i>
      </a>
    </div>
  );
};

export default Pagination;
