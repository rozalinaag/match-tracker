import { ReactNode } from 'react';
import label from './label.svg';
import css from './styles.module.css';

type Props = {
  children: ReactNode;
  isRight?: boolean;
};

export function TeamName({ children, isRight }: Props) {
  const imgTeam = <img src={label} alt="team" />;

  return (
    <div className={css.wrapper}>
      {!isRight && imgTeam} {children} {isRight && imgTeam}
    </div>
  );
}
