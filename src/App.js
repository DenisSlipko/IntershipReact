import { BrowserRouter as Router } from 'react-router-dom';

import ToastMessage from './components/ToastMessage/ToastMessage'
import Navigation from './Navigation';
import AppRouter from './AppRouter'

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