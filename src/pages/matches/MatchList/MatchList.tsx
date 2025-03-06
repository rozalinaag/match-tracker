import { Card, Score, TeamName } from '../../../components';
import { ApiResponse } from '../../../types/matches';
import css from './styles.module.css';

type Props = {
  data?: ApiResponse;
  isLoading: boolean;
  error: Error | null;
};

export function MatchList({ data, isLoading, error }: Props) {
  if (isLoading) return <p>Loading matches...</p>;
  if (error) return <p>Failed to load matches</p>;

  return (
    <div className={css.wrapper}>
      {data?.data.matches.map((match, index) => (
        <Card key={index}>
          <TeamName>{match.homeTeam.name}</TeamName>

          <Score
            leftTeam={match.homeScore}
            rightTeam={match.awayScore}
            status={match.status}
          />

          <TeamName isRight={true}>{match.awayTeam.name}</TeamName>
        </Card>
      ))}
    </div>
  );
}

export default MatchList;
