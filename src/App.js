import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
import Object from './components/object';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/object" element={<Object />} >
          <Route path=':planetName' element={<Object />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
