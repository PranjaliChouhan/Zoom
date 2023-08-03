
import './App.css';
import ZoomableImage from './Zoom';

function App() {
  
  const imageUrl = "https://isoscoopnutrition.com/wp-content/uploads/2021/08/81pdOp-g-L._SL1500_.jpg";

  return (
    <>
    
    <ZoomableImage imageUrl={imageUrl}/>
    </>
  );
}

export default App;
