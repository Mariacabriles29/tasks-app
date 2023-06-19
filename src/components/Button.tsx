import { ReactNode } from "react";
import styles from "../styles/modules/button.module.scss";

// import { getClasses } from "../utils/getClasses";-> aqui manejo los filter

interface ButtonProps {
  children: ReactNode;
  type: "button";
  variant: "primary";
}
const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};

export const Button = ({
  children,
  variant = "primary",

  ...rest
}: ButtonProps) => {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  );
};
