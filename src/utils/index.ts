import { KeyboardEvent } from 'react';

export const blockInvalidChar = (e: KeyboardEvent) =>
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
