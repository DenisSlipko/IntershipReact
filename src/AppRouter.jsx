import { Routes, Route } from 'react-router-dom';

import Countries from './pages/Countries';
import CountriesStates from './pages/CountriesStates';
import Cities from './pages/Cities';
import Posts from './pages/Posts';
import Login from './pages/Login';
import { PathMap } from './constants/constants'

const RouteConfig = [
  {path: PathMap.COUNTRIES, element: <Countries />},
  {path: PathMap.STATES, element: <CountriesStates />},
  {path: PathMap.CITIES, element: <Cities />},
  {path: PathMap.CARDS, element: <Posts />},
  {path: PathMap.LOGIN, element: <Login />},
]

const AppRouter = () => (
    <Routes>
        {RouteConfig.map(({ path, element }) => 
            <Route path={path} element={element} key={element}/>
        )}
    </Routes>
);


export default AppRouter;