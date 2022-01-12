import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

import { PathsMap } from '../constants/constants'
import { getIsLogin } from '../store/reducers/authorization.reducer';

const ProtectedRoute = ({ path, children, isProtectedRoute }) => {
    const isLogin = useSelector(getIsLogin)

    return (
        isProtectedRoute 
            ? ( 
                <Route path={path}>
                    { isLogin ? children : <Redirect to={PathsMap.LOGIN} /> }
                </Route>
              ) 
            : (
                <Route path={path}>
                    { isLogin && path === PathsMap.LOGIN ? <Redirect to={PathsMap.COUNTRIES} /> : children }
                </Route> 
              )
    )
}

export default ProtectedRoute;
