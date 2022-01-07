import { Routes, Route, Navigate } from 'react-router-dom';

import Countries from './pages/Countries';
import CountriesStates from './pages/CountriesStates';
import Cities from './pages/Cities';
import Posts from './pages/Posts';
import Login from './pages/Login';
import { PathsMap } from './constants/constants'
import { getIsLogin } from './store/reducers/login.reducer';
import { useSelector } from 'react-redux';

const AppRouter = () => { 
    const isLogin = useSelector(getIsLogin)

    const RouteConfig = [
        {path: PathsMap.COUNTRIES, element:  <Countries isLogin={isLogin} /> },
        {path: PathsMap.STATES, element: isLogin ? <CountriesStates /> : <Navigate to={PathsMap.LOGIN} />},
        {path: PathsMap.CITIES, element: isLogin ? <Cities /> : <Navigate to={PathsMap.LOGIN} />},
        {path: PathsMap.CARDS, element: isLogin ? <Posts /> : <Navigate to={PathsMap.LOGIN} />},
        {path: PathsMap.LOGIN, element: <Login isLogin={isLogin} />},
      ]

    return (
    <Routes>
        {RouteConfig.map(({ path, element }) => 
            <Route path={path} element={element} key={element}/>
        )}
    </Routes>
)
};


export default AppRouter;