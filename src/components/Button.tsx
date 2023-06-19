import { ReactNode } from "react";
import styles from "../styles/modules/button.module.scss";

import { getClasses } from "../utils/getClasses";

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "button";
  variant?: "primary" | "secondary";
}
// const buttonTypes = {
//   primary: "primary",
//   secondary: "secondary",
// };

function Button({
  children,
  variant = "primary",
  type,

  ...rest
}: ButtonProps) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={styles.button}
    >
      {children}
    </button>
  );
}

interface SelectButtonProps {
  children: ReactNode;
  id: "status";
}

function SelectButton({ children, id, ...rest }: SelectButtonProps) {
  return (
    <select id={id} className={styles.button} {...rest}>
      {children}
    </select>
  );
}
export { SelectButton };
export default Button;
