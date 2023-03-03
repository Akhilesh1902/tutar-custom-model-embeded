import CanvasWrapper from './Components/ThreeJS/CanvasWrapper';
// import { Controls } from './Components/UI/Controls';
import { AppContext } from './Context/AppContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AppContext>
      <div className='App'>
        {/* <h1>App</h1> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CanvasWrapper />} />
            <Route path='/:modelName' element={<CanvasWrapper />} />
          </Routes>
        </BrowserRouter>
        {/* <Controls /> */}
      </div>
    </AppContext>
  );
}

export default App;
