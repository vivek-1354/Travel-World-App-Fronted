import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, SearchResults, SingleHotel } from './pages';

function App() {
  return (
    // <Home />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotels/:name/:address/:id/reserve' element={<SingleHotel />} />
      <Route path='/hotels/:destination/result' element={<SearchResults />} />
    </Routes>
  );
}

export default App;
