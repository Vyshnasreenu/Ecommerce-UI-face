import { ToastContainer } from 'react-toastify';
import './App.css';
import HomeContainer from './Container/HomeContainer';

function App() {
  return (
    <div className="App">
      <HomeContainer />
      <ToastContainer />
    </div>
  );
}

export default App;


