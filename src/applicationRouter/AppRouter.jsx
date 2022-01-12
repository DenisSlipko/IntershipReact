import { Switch } from 'react-router-dom';

import Countries from '../pages/Countries';
import CountriesStates from '../pages/CountriesStates';
import Cities from '../pages/Cities';
import Posts from '../pages/Posts';
import Login from '../pages/Login';
import { PathsMap } from '../constants/constants'
import ProtectedRoute from './ProtectedRoute';

const RouteConfig = [
    {path: PathsMap.COUNTRIES, component: <Countries />},
    {path: PathsMap.STATES, component: <CountriesStates />, isProtectedRoute: true},
    {path: PathsMap.CITIES, component: <Cities />, isProtectedRoute: true},
    {path: PathsMap.CARDS, component: <Posts />, isProtectedRoute: true},
    {path: PathsMap.LOGIN, component: <Login />},
]

const AppRouter = () => { 

    return (
    <Switch>
        { RouteConfig.map(({ path, component : Component, isProtectedRoute }) =>      
            <ProtectedRoute path={path} isProtectedRoute={isProtectedRoute} key={Component} >
                {Component}
            </ProtectedRoute>
        )} 
    </Switch>
)
};


export default AppRouter;
