import css from './styles.module.css';
import icon from './refresh.svg';

type Props = {
  children: React.ReactNode;
  handleClick: () => void;
  isFetching: boolean;
};

export function Button({ children, handleClick, isFetching }: Props) {
  return (
    <button className={css.wrapper} onClick={handleClick}>
      {children}
      <img
        className={isFetching ? css.flipping : ''}
        src={icon}
        alt="refresh"
      />
    </button>
  );
}
