export const getClasses = () => {
  const classes: string[] = [];
  return classes
    .filter((item) => item !== "")
    .join("")
    .trim();
};
