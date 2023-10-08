import { IListObjectProps } from '../types';
import { API_URL, token } from './config';

const deleteExpenseRequest = async (expense: IListObjectProps) => {
  await fetch(`${API_URL}/expenses/${expense._id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

export default deleteExpenseRequest;
