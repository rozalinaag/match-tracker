import axios from "axios";
import { ApiResponse } from "../types/matches";
import { matchesData } from "./mockData";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

export const fetchMatches = async (): Promise<ApiResponse> => {
  if (USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ok: true, data: matchesData }), 500);
    });
  }

  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/matches`);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Ошибка: не удалось загрузить информацию");
  }
};
