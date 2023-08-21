import { KeyboardEvent } from 'react';
import { IListArrayProps } from '../types';

export const blockInvalidChar = (e: KeyboardEvent) =>
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

const now = new Date();
export const currentMonth = now.getMonth();
export const year = now.getFullYear();
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function calc(array: IListArrayProps[]) {
  return array.reduce((total, array) => total + array.money, 0);
}

export function calcTotal(income: number, expenses: number) {
  return income - expenses;
}
