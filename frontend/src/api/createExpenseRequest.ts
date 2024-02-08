import { ListObjectTypeProps } from "../types";
import { API_URL, token } from "./config";

const createExpenseRequest = async (expense: ListObjectTypeProps) => {
  const response = await fetch(`${API_URL}/expenses`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: expense.description,
      sign: expense.sign,
      money: expense.money,
    }),
  });

  return response.json();
};

export default createExpenseRequest;
