import { ReactNode } from 'react';
import css from './styles.module.css';

type Props = {
  children: ReactNode;
};

export function Card({ children }: Props) {
  return <div className={css.wrapper}>{children}</div>;
}
