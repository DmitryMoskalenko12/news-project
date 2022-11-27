import './app.scss';
import StartPage from '../../pages/StartPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsPage from '../../pages/NewsPage';
import Articl from '../articls/Articl';

function App() {
  return (
    <Router>
     <Routes>
      <Route path='/' element={<StartPage/>}/>
      <Route path='/:id' element ={<Articl/>}/>

      <Route path='/NewsPage' element={<NewsPage/>}/>
     </Routes>
    </Router>
  );
}

export default App;
