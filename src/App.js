import { BrowserRouter as Router } from 'react-router-dom';

import ToastMessage from './components/ToastMessage/ToastMessage'
import Navigation from './components/Navigation/Navigation';
import AppRouter from './appRouter/AppRouter'

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