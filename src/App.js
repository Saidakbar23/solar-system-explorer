import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
