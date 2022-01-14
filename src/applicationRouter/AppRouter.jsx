import { Switch } from 'react-router-dom';

import Countries from '../pages/Countries';
import CountriesStates from '../pages/CountriesStates';
import Cities from '../pages/Cities';
import Posts from '../pages/Posts';
import Login from '../pages/Login';
import { PathsMap } from '../constants/constants'
import ProtectedRoute from './ProtectedRoute';

const RouteConfig = [
        { path: PathsMap.COUNTRIES, 
          Component: <Countries />, 
        },
        { path: PathsMap.STATES, 
          Component: <CountriesStates />, 
          isProtectedRoute: true, 
        },
        { path: PathsMap.CITIES, 
          Component: <Cities />, 
          isProtectedRoute: true, 
        },
        { path: PathsMap.CARDS, 
          Component: <Posts />, 
          isProtectedRoute: true, 
        },
        { path: PathsMap.LOGIN, 
          Component: <Login />, 
        },
]

const AppRouter = () => { 

    return (
    <Switch>
        {RouteConfig.map(({ path, Component, isProtectedRoute }) => (    
            <ProtectedRoute exact path={path} isProtectedRoute={isProtectedRoute} key={Component} >
                {Component}
            </ProtectedRoute> )
        )} 
    </Switch>
)
};


export default AppRouter;
