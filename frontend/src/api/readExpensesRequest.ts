import { API_URL, token } from './config';

const readExpensesRequest = async () => {
  const response = await fetch(`${API_URL}/expenses`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export default readExpensesRequest;
