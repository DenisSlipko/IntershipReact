import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Countries from './pages/Countries';
import CountriesState from './pages/CountriesState';
import Cities from './pages/Cities';
import Posts from './pages/Posts';
import Login from './pages/Login';
import ToastMessage from './components/ToastMessage/ToastMessage'
import Navation from './Navigation';

const routeConfig = [
  {path: '/', element: <Countries />},
  {path: 'states', element: <CountriesState />},
  {path: 'cities', element: <Cities />},
  {path: 'cards', element: <Posts />},
  {path: 'login', element: <Login />},
]

const App = () => {

  return (
    <Router>
        <Navation />
        <Routes>
          {routeConfig.map(route => 
            <Route path={route.path} element={route.element} key={route.element}/>
          )}
        </Routes>
        <ToastMessage />
    </Router>
  );
};

export default App;