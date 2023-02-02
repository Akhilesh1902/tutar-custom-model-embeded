import CanvasWrapper from './Components/ThreeJS/CanvasWrapper';
// import { Controls } from './Components/UI/Controls';
import { AppContext } from './Context/AppContext';

function App() {
  return (
    <AppContext>
      <div className='App'>
        {/* <h1>App</h1> */}

        <CanvasWrapper />
        {/* <Controls /> */}
      </div>
    </AppContext>
  );
}

export default App;
