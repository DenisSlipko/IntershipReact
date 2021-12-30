import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Countries from './pages/Countries';
import Governments from './pages/Governments';
import Cities from './pages/Cities';
import Cards from './pages/Cards';
import Login from './pages/Login';
import ToastMessage from './components/ToastMessage/ToastMessage'

const App = () => {

  return (
    <Router>
      <>
        <nav className="navigation">
          <ul className="link-container">
            <li className="navigation-element">
              <Link className="navigation-element" to="/">
                Country
              </Link>
            </li>
            <li>
              <Link className="navigation-element" to="/states">
                States
              </Link>
            </li>
            <li>
              <Link className="navigation-element" to="/cities">
                Cities
              </Link>
            </li>
            <li>
              <Link className="navigation-element" to="/cards">
                Cards
              </Link>
            </li>
            <li>
              <Link className="navigation-element" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="states" element={<Governments />} />
          <Route path="cities" element={<Cities />} />
          <Route path="cards" element={<Cards />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <ToastMessage />
      </>
    </Router>
  );
};

export default App;