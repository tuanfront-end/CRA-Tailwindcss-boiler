import Button, { ButtonProps } from "components/Button/Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  containerClassName = "dark:bg-primary-700",
  ...args
}) => {
  return (
    <Button
      containerClassName={`ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 text-neutral-50 ${containerClassName}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
