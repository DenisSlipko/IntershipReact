import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Countries from './pages/Countries';
import CountriesStates from './pages/CountriesStates';
import Cities from './pages/Cities';
import Posts from './pages/Posts';
import Login from './pages/Login';
import ToastMessage from './components/ToastMessage/ToastMessage'
import Navigation from './Navigation';

const RouteConfig = [
  {path: '/', element: <Countries />, label: 'Countries'},
  {path: '/states', element: <CountriesStates />, label: 'States'},
  {path: '/cities', element: <Cities />, label: 'Cities'},
  {path: '/cards', element: <Posts />, label: 'Cards'},
  {path: '/login', element: <Login />, label: 'Login'},
]

const App = () => {

  return (
    <Router>
        <Navigation navigationConfig={RouteConfig}/>
        <Routes>
          {RouteConfig.map(({path, element}) => 
            <Route path={path} element={element} key={element}/>
          )}
        </Routes>
        <ToastMessage />
    </Router>
  );
};

export default App;