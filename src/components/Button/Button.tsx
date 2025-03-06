import css from './styles.module.css';
import icon from './refresh.svg';

type Props = {
  children: React.ReactNode;
  handleClick: () => void;
  isPending: boolean;
};

export function Button({ children, handleClick, isPending }: Props) {
  return (
    <button className={css.wrapper} onClick={handleClick}>
      {children}
      <img className={isPending ? css.flipping : ''} src={icon} alt="refresh" />
    </button>
  );
}
