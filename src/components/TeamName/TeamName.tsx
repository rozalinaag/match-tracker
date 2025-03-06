import { ReactNode } from 'react';
import label from './label.svg';
import css from './styles.module.css';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  isRight?: boolean;
};

export function TeamName({ children, isRight }: Props) {
  const imgTeam = <img src={label} alt="team" />;

  return (
    <div className={clsx(css.wrapper, isRight && css.right)}>
      {!isRight && imgTeam} <div className={css.text}>{children}</div>{' '}
      {isRight && imgTeam}
    </div>
  );
}
