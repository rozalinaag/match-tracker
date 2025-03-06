import { Button, ErrorMessage } from '../../../components';
import css from './styles.module.css';

type Props = {
  isError: boolean;
};

export default function Header({ isError }: Props) {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>Match Tracker</div>

      <div className={css.leftSide}>
        {isError && (
          <ErrorMessage>Ошибка: не удалось загрузить информацию</ErrorMessage>
        )}
        <Button>Обновить</Button>
      </div>
    </div>
  );
}
