import React, { HTMLAttributes } from "react";

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...args }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`w-full text-base text-neutral-800 rounded-md p-3 border-neutral-300 bg-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 ${className}`}
        rows={4}
        {...args}
      />
    );
  }
);

export default Textarea;
