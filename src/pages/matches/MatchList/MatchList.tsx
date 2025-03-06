import { ApiResponse } from '../../../types/matches';

type Props = {
  data?: ApiResponse;
  isLoading: boolean;
  error: Error | null;
};

export function MatchList({ data, isLoading, error }: Props) {
  if (isLoading) return <p>Loading matches...</p>;
  if (error) return <p>Failed to load matches</p>;

  return (
    <div>
      <h2>Match List</h2>
      <ul>
        {data?.data.matches.map((match, index) => (
          <li key={index}>
            <strong>{match.title}</strong> - {match.status} <br />
            <span>
              {match.homeTeam.name} ({match.homeScore}) vs.{' '}
              {match.awayTeam.name} ({match.awayScore})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MatchList;
