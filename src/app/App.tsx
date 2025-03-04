import { Route, Routes } from 'react-router-dom';
import { MatchesPage } from '../pages/matches/page';
import NotFoundPage from '../pages/notFound/page';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MatchesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
