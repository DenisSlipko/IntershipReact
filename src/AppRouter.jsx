import { Routes, Route } from 'react-router-dom';

import Countries from './pages/Countries';
import CountriesStates from './pages/CountriesStates';
import Cities from './pages/Cities';
import Posts from './pages/Posts';
import Login from './pages/Login';
import { PathsMap } from './constants/constants'

const RouteConfig = [
  {path: PathsMap.COUNTRIES, element: <Countries />},
  {path: PathsMap.STATES, element: <CountriesStates />},
  {path: PathsMap.CITIES, element: <Cities />},
  {path: PathsMap.CARDS, element: <Posts />},
  {path: PathsMap.LOGIN, element: <Login />},
]

const AppRouter = () => (
    <Routes>
        {RouteConfig.map(({ path, element }) => 
            <Route path={path} element={element} key={element}/>
        )}
    </Routes>
);


export default AppRouter;