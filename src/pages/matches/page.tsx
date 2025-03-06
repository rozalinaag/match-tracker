import { useMatches } from '../../queries/useMatches';
import Header from './Header/Header';
import MatchList from './MatchList/MatchList';

export function MatchesPage() {
  const { data, isLoading, error } = useMatches();

  return (
    <div>
      <Header isError={true} />
      <MatchList data={data} isLoading={isLoading} error={error} />
    </div>
  );
}
