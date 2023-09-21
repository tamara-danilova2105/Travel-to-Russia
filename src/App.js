import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from "react-redux";
import { getMyTravel } from './redux/myTravelSlice';
import HomePage from './pages/HomePage';
import MyTravel from './pages/MyTravel';
import fone from './photo/fone.jpg';

function App() {
  const items = useSelector(getMyTravel);

  return (
    <Router>
      <img className='fone' src={fone} alt='фоновое изображение' />
      <div className='navbar'>
        <Link to='/' className='link'>Путешествуй по России!</Link>
        <Link to='/mytravel' className='link'> <span className='quantity-region'>{items.length}/85</span> Мои путешествия</Link>
      </div>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/mytravel' element={<MyTravel />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
