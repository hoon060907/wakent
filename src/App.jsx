import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Isedol from './pages/Isedol';
import Rusuk from './pages/Rusuk';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/isedol' element={<Isedol />} />
      <Route path='/rusuk' element={<Rusuk />} />
    </Routes>
  )
}

export default App;
