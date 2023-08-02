import cn from "classnames";

export const inputClassGenerator = (field) => {
  return cn("form-input", {
    "": field === "begin",
    "red-border": field === false,
    "green-border": field === true,
  });
};

export const checkboxClassGenerator = (checkbox) => {
  return cn("license", {
    "": checkbox === "begin",
    "red-text": checkbox === false,
    license: checkbox === true,
  });
};
