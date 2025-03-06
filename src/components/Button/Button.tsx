import css from './styles.module.css';
import icon from './refresh.svg';

type Props = {
  children: React.ReactNode;
};

export function Button({ children }: Props) {
  return (
    <button className={css.wrapper}>
      {children}
      <img src={icon} />
    </button>
  );
}
