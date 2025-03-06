import { ReactNode } from 'react';
import icon from './icon.svg';
import css from './styles.module.css';

export function ErrorMessage({ children }: { children: ReactNode }) {
  return (
    <div className={css.wrapper}>
      <img src={icon} alt="error" /> {children}
    </div>
  );
}
