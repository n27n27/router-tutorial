import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';

const App = () => {
  return (
    
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to='/profiles'>프로필</Link>
        </li>
        <li>
          <Link to='/history'>History 예제</Link>
        </li>
      </ul>

      <hr />    
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profiles/*' element={<Profiles />} />        
      </Routes>
    
    </div>
  );
}

export default App