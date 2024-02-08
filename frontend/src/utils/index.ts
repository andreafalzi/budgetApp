import { KeyboardEvent } from "react";

export const blockInvalidChar = (e: KeyboardEvent) =>
  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

export const calc = (array: { money: string }[]) => {
  const total = array?.reduce((total, array) => total + parseInt(array.money), 0);
  return total;
};
