import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

import { PathsMap, HOME_PAGE } from '../constants/constants'
import { getIsLogin } from '../store/reducers/authorization.reducer';

const ProtectedRoute = ({ path, component, protectedRoute }) => {
    const isLogin = useSelector(getIsLogin)

    return (
        protectedRoute 
        ? (
            <Route path={path}>
                { isLogin ? component : <Redirect to={PathsMap.LOGIN} /> }
            </Route>
        )
        : (
            <Route path={path}>
                { isLogin && path === PathsMap.LOGIN ? <Redirect to={HOME_PAGE} /> : component }
            </Route> 
        )
    )
}

export default ProtectedRoute;
