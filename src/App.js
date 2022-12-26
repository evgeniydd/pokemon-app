import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { PokemonProvider } from './context/PokemonProvider';
import PokemonPage from './pages/PokemonPage/PokemonPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='pokemon' element={<PokemonPage />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
