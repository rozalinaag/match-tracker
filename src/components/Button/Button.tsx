import css from './styles.module.css';
import icon from './refresh.svg';

type Props = {
  children: React.ReactNode;
  handleClick: () => void;
};

export function Button({ children, handleClick }: Props) {
  return (
    <button className={css.wrapper} onClick={handleClick}>
      {children}
      <img src={icon} />
    </button>
  );
}
