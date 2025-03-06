import { Button, ErrorMessage } from '../../../components';
import css from './styles.module.css';
import logo from './logo.svg';

type Props = {
  error: Error | null;
  handleUpdateClick: () => void;
  isPending: boolean;
};

export default function Header({ error, handleUpdateClick, isPending }: Props) {
  return (
    <div className={css.wrapper}>
      <img src={logo} alt="logo" />

      <div className={css.leftSide}>
        {error && (
          <ErrorMessage>Ошибка: не удалось загрузить информацию</ErrorMessage>
        )}
        <Button handleClick={handleUpdateClick} isPending={isPending}>
          Обновить
        </Button>
      </div>
    </div>
  );
}
