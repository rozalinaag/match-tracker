import { StatusCard } from '..';
import { MatchStatus } from '../../types/matches';
import css from './styles.module.css';

type Props = {
  leftTeamScore: number;
  rightTeamScore: number;
  status: MatchStatus;
};

export function Score({ leftTeamScore, rightTeamScore, status }: Props) {
  return (
    <div className={css.wrapper}>
      <div>{`${leftTeamScore} : ${rightTeamScore}`}</div>
      <StatusCard status={status} />
    </div>
  );
}
