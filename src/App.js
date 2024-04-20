import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
import Object from './components/object';
import { Apod } from './components/apod';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/object" element={<Object />} >
          <Route path=':planetName' element={<Object />} />
        </Route>
        <Route path='/apod' element={<Apod />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
