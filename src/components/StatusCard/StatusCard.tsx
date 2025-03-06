import { MatchStatus } from '../../types/matches';
import css from './styles.module.css';

type Props = {
  status: MatchStatus;
};

export function StatusCard({ status }: Props) {
  let color = '#EB6402';

  if (status === 'Live') {
    color = '#43AD28';
  }

  if (status === 'Finished') {
    color = '#EB0237';
  }

  return (
    <div className={css.wrapper} style={{ background: color }}>
      {status}
    </div>
  );
}
