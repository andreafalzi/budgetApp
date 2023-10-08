import { KeyboardEvent } from 'react';
import { IListObjectProps } from '../types';

export const blockInvalidChar = (e: KeyboardEvent) =>
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

export default function calc(array: Array<IListObjectProps>) {
  return array?.reduce((total, array) => total + parseInt(array.money), 0);
}
