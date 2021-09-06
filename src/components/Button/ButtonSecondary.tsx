import Button, { ButtonProps } from "components/Button/Button";
import React from "react";

export interface ButtonSecondaryProps extends ButtonProps {}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  containerClassName = "dark:bg-neutral-700 dark:text-neutral-300",
  ...args
}) => {
  return (
    <Button
      containerClassName={`ttnc-ButtonSecondary bg-neutral-200 text-neutral-700 ${containerClassName}`}
      {...args}
    />
  );
};

export default ButtonSecondary;
