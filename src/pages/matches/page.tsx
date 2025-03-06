import { useMatches } from '../../queries/useMatches';
import Header from './Header/Header';
import MatchList from './MatchList/MatchList';

export function MatchesPage() {
  const { data, isLoading, error, refetch, isFetching } = useMatches();

  const handleUpdateClick = () => {
    refetch();
  };

  return (
    <div>
      <Header
        isPending={isFetching}
        error={error}
        handleUpdateClick={handleUpdateClick}
      />
      <MatchList data={data} isLoading={isLoading} error={error} />
    </div>
  );
}
