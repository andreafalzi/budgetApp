import { ListObjectTypeProps } from "../types";
import { API_URL, token } from "./config";

const updateExpenseRequest = async (expense: ListObjectTypeProps) => {
  const response = await fetch(`${API_URL}/expenses/${expense._id}`, {
    method: "PUT",
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

export default updateExpenseRequest;
