import { MongoId } from "../types";
import { API_URL, token } from "./config";

const deleteExpenseRequest = async (expense: MongoId) => {
  await fetch(`${API_URL}/expenses/${expense}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export default deleteExpenseRequest;
