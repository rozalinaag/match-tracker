import { ReactNode } from 'react';
import label from './label.svg';
import css from './styles.module.css';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  isRight?: boolean;
};

export function TeamName({ children, isRight }: Props) {
  return (
    <div className={clsx(css.wrapper, isRight && css.right)}>
      <img src={label} alt="team" />
      <div className={css.text}>{children}</div>
    </div>
  );
}
