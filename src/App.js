import logo from './logo.svg';
import './App.css';
import Home from './components/redux_point/Home'
import { useSelector } from 'react-redux';
import HomeContainer from './Container/HomeContainer';

function App() {
  return (
    <div className="App">
      <HomeContainer />
    </div>
  );
}

export default App;


