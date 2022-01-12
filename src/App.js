import { BrowserRouter as Router } from 'react-router-dom';

import ToastMessage from './components/ToastMessage/ToastMessage'
import Navigation from './applicationRouter/Navigation';
import AppRouter from './AppNavigation/AppRouter'

const App = () => {

  return (
    <Router>
        <Navigation />
        <AppRouter />
        <ToastMessage />
    </Router>
  );
};

export default App;