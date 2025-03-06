import { Button, ErrorMessage } from '../../../components';
import css from './styles.module.css';
import logo from './logo.svg';

type Props = {
  error: Error | null;
  handleUpdateClick: () => void;
};

export default function Header({ error, handleUpdateClick }: Props) {
  return (
    <div className={css.wrapper}>
      <img src={logo} alt="logo" />

      <div className={css.leftSide}>
        {error && (
          <ErrorMessage>Ошибка: не удалось загрузить информацию</ErrorMessage>
        )}
        <Button handleClick={handleUpdateClick}>Обновить</Button>
      </div>
    </div>
  );
}
