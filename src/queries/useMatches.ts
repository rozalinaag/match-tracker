import {useQuery} from '@tanstack/react-query'
import { ApiResponse } from '../types/matches'
import { fetchMatches } from './fetchMatches'


export const useMatches = () => {
  return useQuery<ApiResponse>({
    queryKey: ["matches"],
    queryFn: fetchMatches,
    staleTime: 60000
  })
}