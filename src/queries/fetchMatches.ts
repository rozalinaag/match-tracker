import { ApiResponse } from '../types/matches'
import { matchesData } from './mockData';

export const fetchMatches = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, data: matchesData }), 500);
  });
};