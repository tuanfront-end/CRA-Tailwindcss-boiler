import React from "react";

const Heading: React.FC = ({ children }) => {
  return (
    <h2 className="text-2xl xl:text-3xl 2xl:text-4xl">
      {children || `TRENDS`}
    </h2>
  );
};

export default Heading;
