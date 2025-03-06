import { StatusCard } from '..';
import { MatchStatus } from '../../types/matches';

type Props = {
  leftTeam: number;
  rightTeam: number;
  status: MatchStatus;
};

export function Score({ leftTeam, rightTeam, status }: Props) {
  return (
    <div>
      <div>{`${leftTeam} : ${rightTeam}`}</div>
      <StatusCard status={status} />
    </div>
  );
}
