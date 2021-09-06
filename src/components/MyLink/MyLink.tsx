import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { LocationStates } from "routers/types";

export interface MyLinkProps {
  href?: keyof LocationStates | "#" | "" | LinkProps["to"];
  containerClassName?: string;
  targetBlank?: boolean;
}
const MyLink: React.FC<MyLinkProps> = ({
  children,
  href = "#",
  containerClassName = "",
  targetBlank = false,
  ...args
}) => {
  if (targetBlank && typeof href === "string") {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...args}>
        {children}
      </a>
    );
  }
  return (
    <Link className={` ${containerClassName}`} to={href} {...args}>
      {children}
    </Link>
  );
};

export default MyLink;
