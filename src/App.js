import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Countries from './pages/Countries';
import CountriesStates from './pages/CountriesStates';
import Cities from './pages/Cities';
import Posts from './pages/Posts';
import Login from './pages/Login';
import ToastMessage from './components/ToastMessage/ToastMessage'
import Navigation from './Navigation';

export const PathMap = {
  countries: '/',
  cities: '/cities',
  states: '/states',
  cards: '/cards',
  login: '/login'
}

export const RouteConfig = [
  {path: '/', element: <Countries />},
  {path: '/states', element: <CountriesStates />},
  {path: '/cities', element: <Cities />},
  {path: '/cards', element: <Posts />},
  {path: '/login', element: <Login />},
]

const App = () => {

  return (
    <Router>
        <Navigation />
        <Routes>
          {RouteConfig.map(({ path, element }) => 
            <Route path={path} element={element} key={element}/>
          )}
        </Routes>
        <ToastMessage />
    </Router>
  );
};

export default App;