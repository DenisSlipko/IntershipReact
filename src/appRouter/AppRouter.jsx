import { Switch } from 'react-router-dom';

import Countries from '../pages/Countries';
import CountriesStates from '../pages/CountriesStates';
import Cities from '../pages/Cities';
import Posts from '../pages/Posts';
import Login from '../pages/Login';
import { PathsMap } from '../constants/constants'
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => { 

    const RouteConfig = [
        {
            path: PathsMap.COUNTRIES, 
            component: <Countries />
        },
        {
            path: PathsMap.STATES, 
            component:  <CountriesStates />, 
            protectedRoute: true
        },
        {
            path: PathsMap.CITIES, 
            component:  <Cities />, 
            protectedRoute: true 
        },
        {
            path: PathsMap.CARDS, 
            component:<Posts />, 
            protectedRoute: true 
        },
        {
            path: PathsMap.LOGIN, 
            component: <Login /> 
        },
    ]

    return (
        <Switch>
            { RouteConfig.map(({ path, component, protectedRoute }) =>      
                <ProtectedRoute exact path={path} component={component} protectedRoute={protectedRoute} key={component}/>
            )} 
        </Switch>
)
};

export default AppRouter;