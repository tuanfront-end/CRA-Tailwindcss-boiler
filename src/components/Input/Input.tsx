import React, { HTMLAttributes } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...args }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full h-11 text-base text-neutral-800 rounded-lg p-3 ring-1 ring-offset-2 ring-neutral-300 bg-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 ${className}`}
        {...args}
      />
    );
  }
);

export default Input;
