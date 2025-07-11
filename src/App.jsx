import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Mirage from './pages/mirage/Mirage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mirage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
