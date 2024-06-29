import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, SingleHotel } from './pages';

function App() {
  return (
    // <Home />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotels/:name/:address/:id/reserve' element={<SingleHotel />} />
    </Routes>
  );
}

export default App;
