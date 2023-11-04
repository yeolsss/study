import React from "react";

export interface IValidData {
  value: string;
  msg: string;
  ref: React.RefObject<HTMLInputElement>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const validData = ({ value, msg, ref, setError }: IValidData) => {
  if (value.replaceAll(" ", "") === "") {
    alert(msg);
    ref.current?.focus();
    setError(true);
    return true;
  }
};

export const resetState = (
  ...setValues: React.Dispatch<React.SetStateAction<string>>[]
) => {
  setValues.forEach((setValue) => {
    setValue("");
  });
};
