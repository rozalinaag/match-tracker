import { StatusCard } from '..';
import { MatchStatus } from '../../types/matches';
import css from './styles.module.css';

type Props = {
  leftTeam: number;
  rightTeam: number;
  status: MatchStatus;
};

export function Score({ leftTeam, rightTeam, status }: Props) {
  return (
    <div className={css.wrapper}>
      <div>{`${leftTeam} : ${rightTeam}`}</div>
      <StatusCard status={status} />
    </div>
  );
}
