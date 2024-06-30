import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, SearchResults, SingleHotel } from './pages';
import { Filter } from './components';
import { useFilter } from './context';

function App() {
  const { state } = useFilter()
  return (
    // <Home />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotels/:name/:address/:id/reserve' element={<SingleHotel />} />
      <Route path='/hotels/:destination/result' element={<SearchResults />} />
      <Route path='/filters' element={state.isFilterModalOpen && <Filter />} />
    </Routes>
  );
}

export default App;
