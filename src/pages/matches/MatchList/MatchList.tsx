import { Card, Score, TeamName } from '../../../components';
import { ApiResponse } from '../../../types/matches';
import css from './styles.module.css';

type Props = {
  data?: ApiResponse;
  isLoading: boolean;
  error: Error | null;
};

export function MatchList({ data, isLoading, error }: Props) {
  if (isLoading) return <p>Загружаем матчи...</p>;
  if (error) return <p>Ошибка при загрузке данных</p>;

  return (
    <div className={css.wrapper}>
      {data?.data.matches.map(
        ({ homeScore, homeTeam, status, awayTeam, awayScore }, index) => (
          <Card key={index}>
            <TeamName>{homeTeam.name}</TeamName>

            <Score
              leftTeamScore={homeScore}
              rightTeamScore={awayScore}
              status={status}
            />

            <TeamName isRight={true}>{awayTeam.name}</TeamName>
          </Card>
        )
      )}

      {!data?.data.matches.length && <div>Нет данных</div>}
    </div>
  );
}

export default MatchList;
